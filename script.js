//Get elements with jQuery
var containerEl = $('.container')
// $('#currentDay')
var currentHour

// Add current Day to jumbotron
var currentDay = moment();
        $("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// Loop through from 9 - 17 (military time)
for (var i=9; i<18; i++) {
    // Create a new block of HTML for each hour of the data
    // Saving the current hour to a data attribute so it can be accessed from an event listener

    // i = current hour of the loop, 9 - 17 
    //fetch all of the data within this for loop so its rendered as you add them to the page.

    // local storage key = "hour-9"
    var savedValueForHour = localStorage.getItem( "hour-" + i);

    //color-blocking
    var timeBlock = $("#hour-" + i)

    if (i < moment().hour()) {
        timeBlock.addClass("past")
    }
    if (i == moment().hour()) {
        timeBlock.addClass("present")
    }
    if (i > moment().hour()) {
        timeBlock.addClass("future")
    }   
}

// create event listener on the container and responds just to the buttons in them in this case the save buttons.
var saveButtonEl = $("button");

saveButtonEl.click(function(event) {
    // data-attributes are easier without jQuery, but might be easier to stay consistent in jQuery here.
    // $(event.target).data()
    // console.log(event);
    // console.log(event.target.parentElement.previousElementSibling.children[0].value)
    
    var hour = event.target.value;
    var task = event.target.parentElement.previousElementSibling.children[0].value;
    var hourData = {
        hour: hour,
        task: task
    }

    localStorage.setItem(hour,JSON.stringify(hourData))

});

// gets to dos from local storage
function getToDos() {
    // Set toDoList to an empty set to fill in with the saved items
    var retrievedData = [];
    
   for (var i=9; i<18; i++) {       
       //grab the data
       var hourData = JSON.parse(localStorage.getItem(i));
       // console.log(hourData);

       // Does local storage contain data
       if (hourData) {
           retrievedData.push(hourData);
       };
    }
    
    return retrievedData;
    
};

// checks if local storage was empty and if not populates the text areas per hour with their respective tasks
function populateToDos() {
    // Calls getToDos to check if data is stored
    var toDos = getToDos();

    if (toDos.length == 0) {
        return
    }
    
    // Assign Data to text areas
    
    toDos.map(toDo => { // toDo is being declared in this anonymous function
        //pointing to the parent element $(`#hour-${toDo.hour}`)
        //point deeper in to the text areas instead
        $(`textarea[data-hour='${toDo.hour}']`).val(toDo.task);
    })
    
}

populateToDos();