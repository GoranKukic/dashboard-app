# Dashboard App

This is "Dasboard web app".

## The brief

- Web app is builted with React, styled with SCSS preprocessor and it is displaying data from JSON file.
- App is fully responsive down to 320px of viewport width.

Web app functionality:

- In the header on the right side there is an icon for notifications. By clicking on it, a dropdown with two options appears. The options have a hover effect. Also, the icon changes color on click and the notification counter in the upper right corner disappears. By clicking the icon again, clicking the option, or clicking anywhere outside of it, the dropdown disappear. Options have no functionality.

- On the right side there is a calendar that can be opened and closed. By clicking on the X in the upper right corner, the calendar disappears and all the data on the page is expanded to the maximum. Clicking on the << icon reappears and the content on the page collapses to the width of the calendar. Also there is animation when showing and hiding the calendar is happening.

- There are 3 types of status in the list of items. Status colors depend on their types that are deined in JSON file. The status colors also define the color of the date at the beginning of the list of items. If the status is rejected, the item gets delay 1d overdue. By clicking on the icon representing the eye, a modal dialog opens which has two buttons - "Ok" and "Close" (both close the modal dialog).

- There are progress bars with percentages on the Task You Initiated and Overdue Actions cards. If the percentage is from 0 to 40, the color of the bar is red and occupies the percentage of the coloring of the given value. If the value is between 41 - 60, the color is orange, if the value is 61 - 90, the color is blue, and if the value is greater than 91, the color is green.

(Need to be done)

- There are 4 icons on the left menu. By clicking on each of the icons, the route of the page is changed. The Pulse icon is the home page that is defined in the design. Meeting, Items and Actions pages are not defined in the design and can have any content. By clicking on each icon, it changes the appearance to the active state (defined appearance in the design).

- Clicking on the "+ Quick Item" button opens a dialog with forms. After filling out the form, clicking the submit button, the values ​​from the form should be saved in a json file. All fields in the form should be mandatory, if they are not, the submit cannot be executed. Bonus task - create validation messages if the user has not filled in all the fields.

## Live Preview

[See live here](https://gorankukic-dashboardapp.netlify.app/)

## Screenshots

![Screnshoot](images/screenshoot_1.jpg)
![Screnshoot](images/screenshoot_2.jpg)

## What we have learned?

- That React portals are great way to build modals
- To work with and manipulate JSON files

## Development requirements

- [Node.js](http://nodejs.org/)

To install dependencies run:

`npm install`

To start app run:

`npm start`
