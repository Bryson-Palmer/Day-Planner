// Get the current day, month, and number
var currentMoment = moment();
$("#currentDay").text(currentMoment.format("dddd, MMMM Do"));


// Get the current hour
var currentHour = parseInt(currentMoment.format("H"));

console.log(currentHour); 

// FOR loop over the hours of the day from i= 9 to i <= 18

//  var i = 9;
//  Element ID = "#hour-" +i;
//  Currently checking 9am < current hour
//  9am is in the past

//  Option A - Select matching element - $( Element ID ).css( "background" );

//  Option B - Select matching element - $( Element ID ).css( "background" )'

// Add a click event on a PARENT ELEMENT that can listen to my save button clicks

// WHEN the user clicks the save button
// THEN I need to save the associated text for the associated hour.