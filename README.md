# Calendar-Application-Refactoring

## Description

This is a refactoring of the code provided for a basic calendar application. Initially it contained three div elements for three separate hour blocks. It also included CSS properties for those three divs. It contained no JavaScript Code and was not functional as a calendar.

My objective was to add more div elements to increase the number of hours, add JavaScript to be able to save tasks to each block to local storage and retrieve them. I also used JavaScript to change the class of the div blocks when compared to the local hour. I included the local time in the header element and used it to compare timeblocks in order to change the background color of each timeblock depending on whether it was the past, present or future compared to the current time.

This is a useful application for planning out your day. The ability to store the data in local storage makes it easy to quickly access whenever the user wants to remind themselves of the taks they set for each hour.

I learned how to use a listener for click events in order to save events to each time block to local storage. I also learned how to use conditional logic to change the class for each time block and update the background color depending on the current time.

### Credits

Most of the HTML and CSS code was provided by the bootcamp and I am responsible for the JavaScript code.
