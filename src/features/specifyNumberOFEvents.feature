Feature: Specify Number OF Events

Scenario: When user hasn’t specified a number, 4 is the default number
Given the user hasn’t specified a number of events.
When the user opens up the app.
Then the default number that is rendered is 4

Scenario: User can change the number of events they want to see
Given the user wants to change the number of events they see
When the user changes the input number
Then the number of events displayed will change.
