// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  reporters: [
    // Like this with the default options, see the options below
    'cucumberjs-json',

    // OR like this if you want to set the folder and the language
    [ 'cucumberjs-json', {
            jsonFolder: 'tmp/new/',
            language: 'en',
        },
    ],
],
  debug: false,
  allScriptsTimeout: 11000,
  //seleniumAddress: 'http://localhost:4444/wd/hub',  
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'firefox'
  },
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/**/*.steps.ts'
    ],
    format: [
      'json:test-report/cucumber-test-results.json'
    ]
  },
  onPrepare() {
    var fs = require('fs');
    var dir = './test-report/';
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  }
};
