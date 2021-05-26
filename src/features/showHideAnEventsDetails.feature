Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given the user turns on the application
When the user firsts opens up the app
Then the event element will already be collapsed

Scenario: User can expand an event to see its details
Given the user wants to the details of a even
When user clicks on “Show details” button for an event
Then the event element will be expanded to show the event details

Scenario: User can collapse an event to hide its details
Given the user wants close event element
When user clicks on “Close” button for an event
Then the event element will hide its details.