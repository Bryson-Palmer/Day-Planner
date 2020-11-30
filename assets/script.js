// Get the current moment
var currentMoment = moment();

// Format the current moment to be day, month, and number and display it to it's ID
$( "#currentDay" ).text( currentMoment.format( "dddd, MMMM Do" ) );

// Get the current hour parsed
var currentHour = parseInt( currentMoment.format( "H" ) );
// Log current hour
console.log( currentHour ); 

// Global variables to update
var currentHourId;
var clickedHour;
var textValue;

// Set the status of the hour (past, present, or future) and load any local storage data
for ( var i = 9; i <= 18; i++ ) {

    // Assign the current hour id to currentHourId
    currentHourId = "#hour-" +i;
    // Log hour id
    console.log( currentHourId );
    // Call function that sets the status of the hour
    settingHourStatus();

    // Assign the data stored in local storage, to the current key, to savedTextValue
    var savedTextValue = getTextValue( "Planner-hour-" +i );
    // Log the value stored in savedTextValue
    console.log( savedTextValue );
    // Traverse the DOM starting at current hour id, targeting the child element (textarea), and set text content with savedTextValue
    $( currentHourId ).children( "textarea" ).text( savedTextValue );
};

// Sets the status of the hour to be past, present, or future
function settingHourStatus() {
    //  Comparig if the ID hour is less than the current hour
    if ( i < currentHour ) {
        // DOM traversal to the child textarea and adding the class .past
        $(currentHourId).children( "textarea" ).addClass( "past" );
        
    //  Comparig if the ID hour is equal to the current hour
    } else if ( i == currentHour ) {
        // DOM traversal to the child textarea and adding the class .present
        $(currentHourId).children( "textarea" ).addClass( "present" );

    //  Default ID hour must be ahead of current hour and in the future
    } else {
        // DOM traversal to the child textarea and adding the class .future
        $(currentHourId).children( "textarea" ).addClass( "future" );
    }
};

// Gets local storage data. Pass in text value of current key from loop
function getTextValue( textValue ) {
    // returns local storage value textValue
    return JSON.parse( localStorage.getItem( textValue.trim() ));
};

// Sets local storage data
function setTextValue() {
    // Passing in prefix for hour, the clicked hour, and the text to be saved trimmed of white space
    localStorage.setItem( "Planner-hour-"+ clickedHour, JSON.stringify( textValue.trim() ) );
};

// WHEN the user clicks the save button for a particular hour
//  THEN I need to save the text associated with that hour.

var hr9 = $( "#hour9Button" );
var hr10 = $( "#hour10Button" );
var hr11 = $( "#hour11Button" );
var hr12 = $( "#hour12Button" );
var hr13 = $( "#hour13Button" );
var hr14 = $( "#hour14Button" );
var hr15 = $( "#hour15Button" );
var hr16 = $( "#hour16Button" );
var hr17 = $( "#hour17Button" );
var hr18 = $( "#hour18Button" );
var clearAll = $( "#clearAll" );

hr9.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr10.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr11.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr12.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr13.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr14.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr15.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr16.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr17.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

hr18.on( "click", event => {

    //  GET the button's hour
    clickedHour = $( event.target ).data( "hour" );
    //  GET the value of the text from the previous element
    textValue = $( event.target ).prev().val();
    //  Save to local storage
    setTextValue();
    //  reload page
    location.reload();
});

// Clear All button
clearAll.on( "click", () => {
    localStorage.clear();
    location.reload();
});