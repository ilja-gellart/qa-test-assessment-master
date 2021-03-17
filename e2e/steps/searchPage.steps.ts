const { Given, When, Then, And } = require('cucumber');
const { browser, by, element, ElementFinder, protractor } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

let searchBox = element(by.id('query'));
let searchBtn = element(by.css('.btn'));
let notFoundTxt = element(by.cssContainingText('div', 'Not found'));
let personRadioBtn = element(by.id('people'));
let planetsRadioBtn = element(by.id('planets'));

Given('The app is open on {string}', async (string) => {
  await browser.get('http://' + string + ':4200/');
  await chai.expect(searchBox.isDisplayed()).to.eventually.be.true;
});

When('User select a tab {string}', async (string) => {
  if (string == "Person")
    await personRadioBtn.click();
  else
    await planetsRadioBtn.click();
});

When('User search for {string} character', async (string) => {
  await searchBox.sendKeys(string);
  await searchBtn.click();
});

When('User clear search box and hit Enter key', {}, async () => {
  await searchBox.clear();
  await searchBox.sendKeys(protractor.Key.ENTER);
});

When('User click on search button', {}, async () => {
  await searchBtn.click();
});

Then('Verify it’s a Not Found result', {}, async () => {
  await chai.expect(notFoundTxt.isDisplayed()).to.eventually.be.true;
});

Then('Verify every valid result for Person contains his / her “Gender”, “Birth year”, “Eye color” and “Skin color', async () => {
  //Print All values for gender, DB, eye color, skin color and assert that they not equal to null
  await element.all(by.css('app-character .card-body')).each(async function (parent, index) {
    await parent.all(by.css('.col-sm-10')).each(async function (child) {
      await child.getText().then(async function (text) {
        // verify that value present
        await chai.expect(text).not.to.be.a('null');
      });
    });
  });
});

Then('Verify it’s a valid result for Planet contains {string}, {string} and {string}', async (population, climate, gravity) => {
  // Get values for population, climate, gravity and assert that they are equal to the test data in feature file
  var textOut;
  await element.all(by.css('app-planet .card-body')).each(async function (parent, index) {
    await parent.getText().then(async function (text) {
      textOut = text;
    });
    await chai.expect(textOut).to.include(population);
    await chai.expect(textOut).to.include(climate);
    await chai.expect(textOut).to.include(gravity);
  });
});
