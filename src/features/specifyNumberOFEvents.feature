Feature: Specify Number OF Events

Scenario: When user hasn't specified event number 32 is the default number
  Given user hasn't specified the number of events
  When the user opens the app
  Then the maximum of 32 events will be displayed

Scenario: User can change the number of events they want to see
Given the user opened the app
When the user changes the number of events
Then the number of events displayed will change.
