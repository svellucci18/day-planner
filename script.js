//Get elements with jQuery
var containerEl = $('.container')
// $('#currentDay')
var currentHour

// Loop through from 9 - 17 (military time)
for (var i=9; i<18; i++) {
    // Create a new block of HTML for each hour of the data
    // Saving the current hour to a data attribute so it can be accessed from an event listener

    // i = current hour of the loop, 9 - 17 
    //fetch all of the data within this for loop so its rendered as you add them to the page.

    // local storage key = "hour-9"
    var savedValueForHour = localStorage.getItem( "hour-" + i);

}

// create event listener on the container and responds just to the buttons in them in this case the save buttons.
containerEl.on('click','button', function(event) {
    // data-attributes are easier without jQuery, but might be easier to stay consistent in jQuery here.
    // $(event.target).data()

});

// Put data-attributes on the buttons and the parents to go get them.
