$(document).ready(function () {
  $("#calendar").evoCalendar({
    theme: "Orange Coral",
    calendarEvents: [
      {
        id: "event1", // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Writing Workshop",
        badge: "05/29", // Event badge (optional)
        date: ["May/29/2022", "May/29/2022"], // Date range
        description: "Writing Workshop by Aashvi Shah", // Event description (optional)
        type: "event",
        color: "#63d867", // Event custom color (optional)
      },
    ],
  });
});
