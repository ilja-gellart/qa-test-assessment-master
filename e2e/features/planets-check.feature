Feature: Check Planets
    Scenario: Verify Not Found message for Planets
        Given The app is open on "localhost"
        When User select a tab "Planets"
        And User search for "??" character
        Then Verify it’s a Not Found result

    Scenario Outline: Verify each found Planet contains Population, Climate and Gravity
        Given The app is open on "localhost"
        When User select a tab "Planets"
        And User search for "<Names>" character
        Then Verify it’s a valid result for Planet contains "<Population>", "<Climate>" and "<Gravity>"
        Examples:
            | Names    | Population | Climate   | Gravity    |
            | Tatooine | 200000     | arid      | 1 standard |
            | Alderaan | 2000000000 | temperate | 1 standard |
            | Dagobah  | unknown    | murky     | N/A        |
