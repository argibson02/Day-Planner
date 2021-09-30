///Variables
var timeNow = moment();
var timeNowUser = moment().format("dddd, DD-MM-YYYY, kk:mm:ss");
var notesArray = ["","","","","","","","","","","","","","","","","","","","","","","",""];
var localCheck = ["","","","","","","","","","","","","","","","","","","","","","","",""];


var notesInput = document.getElementById("initialsText");

console.log(timeNow);
console.log(timeNowUser);


///--------------------------------CLOCK
let currentTimeClock = function () {
    let currentTime = moment().format("dddd, DD-MM-YYYY, kk:mm:ss");
    $("#currentTimeText").text(currentTime);
}
currentTimeClock();
setInterval(currentTimeClock, 1000);


//Needs:
//- clock running with moment.js and updating every second
//- event listeners on all buttons
//- notes and send to local storage
//- retrieve from local storage
//- change text area background colors dynamically by hour
//


























































/*
//----------------------------STORAGE
//----------------------------------------------------Function for any stored notes
function checkNotes() {
    if (localStorage.getItem("notesArray") === null) { // if the local storage array is null, we skip syncing
        return;
    }
    else if (localStorage.getItem("notesArray") === "") { // if the local storage array is an empty string, we skip syncing
        return;
    }
    else {
        localCheck = JSON.parse(localStorage.getItem("notesArray")); // if not null, make it var local check
    }

    if (localCheck.length > notesArray.length) { // if local storage is longer, we make it into the function array
        notesArray = localCheck;
    }
}



//-----------------------------------------------Saving and clearing initials and scores
// Function to save scores
function saveNotes(event) {
    event.preventDefault();
    if (initialsInput.value === "") {
        return; // prevents null additions to the scoresArray
    } 
    else {
    var initialsHandOff = initialsInput.value.toUpperCase();  // Combining score and initials into an single string
    localStorage.setItem("initials", initialsHandOff);
    var scoreHandOff = timeScore;
    var scoreAndInitials = (initialsHandOff + ": " + scoreHandOff + " points");
    
    scoresArray.push(scoreAndInitials); // push that item to out javascript array
    localStorage.setItem("scoresArray", JSON.stringify(scoresArray));  // syncing javascript array and local storage, add to local storage

    // Clearing field and disabling further input
    initialsInput.value = "";
    document.getElementById("initialsText").disabled = true;
    document.getElementById("submitButton").disabled = true;
    }
    scoresArray = JSON.parse(localStorage.getItem("scoresArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local
    displayScores();
}

// Function for clearing scoresArray
function clearScores (event) {
    event.preventDefault();
    localStorage.setItem("scoresArray", ""); // clears local storage
    scoresArray = []; // clears javascript storage
    scoreboardUl.innerHTML = ""; 
}



//--------------------------------------------------Event Listeners
submitButton.$(document).on(("click", saveNotes);
*/