// Get the current moment
var currentMoment = moment();

// Get the current day, month, and number and display it to it's ID
$("#currentDay").text(currentMoment.format("dddd, MMMM Do"));

// Get the current hour parsed
var currentHour = parseInt(currentMoment.format("H"));
console.log(currentHour); 

var currentHourId;
var clickedHour;
var textValue;

// Set the status of the hour (past, present, or future) and load any local storage data
for (var i = 9; i <= 18; i++) {

    currentHourId = "#hour-" +i;
    console.log(currentHourId);
    checkingHourStatus();

    var savedTextValue = getTextValue();
    console.log(savedTextValue);
    $(currentHourId).children( "textarea" ).text(savedTextValue);
};

// Comparig the ID hour with the current hour
function checkingHourStatus() {
    //  Currently checking 9am < current hour
    if ( i < currentHour ) {
        $(currentHourId).children( "textarea.text-container" ).addClass( "past" );
        
    //  Currently checking 9am == current hour
    } else if ( i == currentHour ) {
        $(currentHourId).children( "textarea.text-container" ).addClass( "present" );

    } else {
        $(currentHourId).children( "textarea.text-container" ).addClass( "future" );
    }
};

// Gets local storage data
function getTextValue() {
    return JSON.parse(localStorage.getItem( "textValue" ));
};

// Sets local storage data
function setTextValue() {
    localStorage.setItem("Planner-hour-"+ clickedHour, JSON.stringify(textValue));
};

// WHEN the user clicks the save button for a particular hour
//  THEN I need to save the text associated with that hour.

var hr9 = $("#hour9Button");
var hr10 = $("#hour10Button");
var hr11 = $("#hour11Button");
var hr12 = $("#hour12Button");
var hr13 = $("#hour13Button");
var hr14 = $("#hour14Button");
var hr15 = $("#hour15Button");
var hr16 = $("#hour16Button");
var hr17 = $("#hour17Button");
var hr18 = $("#hour18Button");

hr9.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log("The clicked hour is: " +clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev("textarea").val();
    console.log("The text value is: " +textValue);
    setTextValue();
    
});
// hr9.off();

hr10.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr11.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr12.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr13.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr14.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr15.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr16.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr17.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});

hr18.on("click", event => {

    event.preventDefault();
    //  GET the button's hour
    clickedHour = $(event.target).data("hour");
    console.log(clickedHour);
    //  GET the value of the text from the previous element
    textValue = $(event.target).prev().val();
    console.log(textValue);
    //  localStorage.setItem( "planner-hour-"+ theClickedHour, value )
    setTextValue();
});