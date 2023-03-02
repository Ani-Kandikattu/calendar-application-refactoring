$(function () {
  // An event listener for click events on the save button.
  const saveButtons = $(".saveBtn");

  $(saveButtons).each(function () {
    $(this).on("click", function () {
      const userInput = $(this).siblings(".textarea").val();

      const timeBlockId = $(this).parent().attr("id");

      if (userInput) {
        localStorage.setItem(timeBlockId, userInput);
      }
    });
  });

  //Code to apply the past, present, or future class to each time block by comparing the id to the current hour. Using an if statement
  //to compare the block hour to the hour in local time allows us to change the class.

  const currentHour = moment().hour();

  $(".time-block").each(function () {
    const blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  //Code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.

  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");

    const userInput = localStorage.getItem(timeBlockId);

    if (userInput !== null && userInput !== undefined && userInput !== "") {
      $(this).find("textarea").val(userInput);
    }
  });

  //Code to display the current date in the header of the page.

  const currentDate = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-us", options);
  $("#current-date").text(formattedDate);
});
