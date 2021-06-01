Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given the user did not expand any event
And the app has mounted
When all the events are loaded
Then all the event element will already be collapsed

Scenario: User can expand an event to see its details
Given the app is loaded
And all the events are loaded
When user clicks on “Show details” button for an event
Then the event element will be expanded to show the event details

Scenario: User can collapse an event to hide its details
Given the app is loaded
And the user expanded event details
When user clicks on “Close” button for an event
Then the event element will hide its details.