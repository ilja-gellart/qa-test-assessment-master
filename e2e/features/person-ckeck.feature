Feature: Check People
    Scenario: Verify Not Found message for People
        Given The app is open on "localhost"
        When User select a tab "Person"
        And User search for "??" character
        Then Verify it’s a Not Found result

    Scenario Outline: Verify each found Person contains a value in “Gender”, “Birth year”, “Eye color” and “Skin color
        Given The app is open on "localhost"
        When User select a tab "Person"
        And User search for "<Names>" character
        Then Verify every valid result for Person contains his / her “Gender”, “Birth year”, “Eye color” and “Skin color
        Examples:
            | Names          |
            | Luke Skywalker |
            | a              |

