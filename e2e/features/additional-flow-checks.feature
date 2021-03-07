Feature: Additional flow checks
    Scenario Outline: Scenario Outline name: Verify switch between Planets and People
        Given The app is open on "localhost"
        When User select a tab "Planets"
        And User search for "<Names>" character
        Then Verify it’s a valid result for Planet contains "<Population>", "<Climate>" and "<Gravity>"
        When User select a tab "Person"
        And User click on search button
        Then Verify it’s a Not Found result
        Examples:
            | Names    | Population | Climate | Gravity    |
            | Tatooine | 200000     | arid    | 1 standard |

    Scenario: Verify clear and search Enter key
        Given The app is open on "localhost"
        When User select a tab "People"
        And User search for "a" character
        Then Verify every valid result for Person contains his / her “Gender”, “Birth year”, “Eye color” and “Skin color
        When User clear search box and hit Enter key
        Then Verify it’s a Not Found result


