# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Ilja Gellart iljagellart@gmail.com 

## Remarks 
### Expected test result outcome: 9 scenarios (1 failed, 8 passed).
1 test fail until application will apply a fix.

Bug found for Scenario:
Expected: *	When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).
Actual: Results are not removed after hit Enter/or Search Button with empty search box.

## Main features

### Search for character (person)
*   Scenario Outline: Verify each found Person contains a value in “Gender”, “Birth year”, “Eye color” and “Skin color
	When you search for **a character** and it’s a valid one, then you should be able to see his / her “Gender”, “Birth year”, “Eye color” and “Skin color”.
*	Scenario: Verify Not Found message for People
    When you search for a character and it’s not a valid one, then you should be able to see “Not found” in the results.

### Search for planet
*	Scenario Outline: Verify each found Planet contains Population, Climate and Gravity
    When you search for **a planet** and it’s a valid one, then you should be able to see its “Population”, “Climate” and “Gravity”.
*	Scenario: Verify Not Found message for Planets
    When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results.

### Additional flows
*	Scenario: Verify clear and search Enter key (Test fail bug reported above).
    When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).
*   You can search for results by clicking the “Search” button or by pressing “enter” on the search field.

*	Scenario Outline: Scenario Outline name: Verify switch between Planets and People
    When for example you have searched for a full planet name and you’ve got results, if you switch to People and search for the same thing (that has no matching people based on a partial name), you should get a “Not found” in the results.

*	Tested with names  Scenario Outline: Verify each found Person contains a value in “Gender”, “Birth year”, “Eye color” and “Skin color | a              | , same could be implemented for Planets.
    You can have more than one results, for both Planets and Names (partial matching)