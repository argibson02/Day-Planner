///Variables
var notesArray = ["","","","","","","","","","","","","","","","","","","","","","","",""];
var localCheck = [];
var localCheckVerify = ["","","","","","","","","","","","","","","","","","","","","","","",""];

//textarea variables
var text00 = $("#text00");
var text01 = $("#text01");
var text02 = $("#text02");
var text03 = $("#text03");
var text04 = $("#text04");
var text05 = $("#text05");
var text06 = $("#text06");
var text07 = $("#text07");
var text08 = $("#text08");
var text09 = $("#text09");
var text10 = $("#text10");
var text11 = $("#text11");
var text12 = $("#text12");
var text13 = $("#text13");
var text14 = $("#text14");
var text15 = $("#text15");
var text16 = $("#text16");
var text17 = $("#text17");
var text18 = $("#text18");
var text19 = $("#text19");
var text20 = $("#text20");
var text21 = $("#text21");
var text22 = $("#text22");
var text23 = $("#text23");


///----------------------------------------------------------------------CLOCK
let currentTimeClock = function () {
    let currentTime = moment().format("dddd, DD-MM-YYYY, kk:mm:ss");
    $("#currentTimeText").text(currentTime);
};
currentTimeClock();
setInterval(currentTimeClock, 1000);


//-----------------------------------------------------------------COLOR SWAPPING
function colorSwap() {
    let todayHours = moment().hour();

        if (todayHours > 0) { 
            $("#text00").addClass("past");
        }
        else if (todayHours < 0) {
            $("#text00").addClass("future");
        }
        else {
            $("#text00").addClass("present");
        }

        if (todayHours > 1) {
            $("#text01").addClass("past");
        }
        else if (todayHours < 1) {
            $("#text01").addClass("future");
        }
        else {
            $("#text01").addClass("present");
        }

        if (todayHours > 2) {
            $("#text02").addClass("past");
        }
        else if (todayHours < 2) {
            $("#text02").addClass("future");
        }
        else {
            $("#text02").addClass("present");
        }

        if (todayHours > 3) {
            $("#text03").addClass("past");
        }
        else if (todayHours < 3) {
            $("#text03").addClass("future");
        }
        else {
            $("#text03").addClass("present");
        }

        if (todayHours > 4) {
            $("#text04").addClass("past");
        }
        else if (todayHours < 4) {
            $("#text04").addClass("future");
        }
        else {
            $("#text04").addClass("present");
        }

        if (todayHours > 5) {
            $("#text05").addClass("past");
        }
        else if (todayHours < 5) {
            $("#text05").addClass("future");
        }
        else {
            $("#text05").addClass("present");
        }

        if (todayHours > 6) {
            $("#text06").addClass("past");
        }
        else if (todayHours < 6) {
            $("#text06").addClass("future");
        }
        else {
            $("#text06").addClass("present");
        }

        if (todayHours > 7) {
            $("#text07").addClass("past");
        }
        else if (todayHours < 7) {
            $("#text07").addClass("future");
        }
        else {
            $("#text07").addClass("present");
        }

        if (todayHours > 8) {
            $("#text08").addClass("past");
        }
        else if (todayHours < 8) {
            $("#text08").addClass("future");
        }
        else {
            $("#text08").addClass("present");
        }

        if (todayHours > 9) {
            $("#text09").addClass("past");
        }
        else if (todayHours < 9) {
            $("#text09").addClass("future");
        }
        else {
            $("#text09").addClass("present");
        }

        if (todayHours > 10) {
            $("#text10").addClass("past");
        }
        else if (todayHours < 10) {
            $("#text10").addClass("future");
        }
        else {
            $("#text10").addClass("present");
        }

        if (todayHours > 11) {
            $("#text11").addClass("past");
        }
        else if (todayHours < 11) {
            $("#text11").addClass("future");
        }
        else {
            $("#text11").addClass("present");
        }

        if (todayHours > 12) {
            $("#text12").addClass("past");
        }
        else if (todayHours < 12) {
            $("#text12").addClass("future");
        }
        else {
            $("#text12").addClass("present");
        }

        if (todayHours > 13) {
            $("#text13").addClass("past");
        }
        else if (todayHours < 13) {
            $("#text13").addClass("future");
        }
        else {
            $("#text13").addClass("present");
        }

        if (todayHours > 14) {
            $("#text14").addClass("past");
        }
        else if (todayHours < 14) {
            $("#text14").addClass("future");
        }
        else {
            $("#text14").addClass("present");
        }

        if (todayHours > 15) {
            $("#text15").addClass("past");
        }
        else if (todayHours < 15) {
            $("#text15").addClass("future");
        }
        else {
            $("#text15").addClass("present");
        }

        if (todayHours > 16) {
            $("#text16").addClass("past");
        }
        else if (todayHours < 16) {
            $("#text16").addClass("future");
        }
        else {
            $("#text16").addClass("present");
        }

        if (todayHours > 17) {
            $("#text17").addClass("past");
        }
        else if (todayHours < 17) {
            $("#text17").addClass("future");
        }
        else {
            $("#text17").addClass("present");
        }

        if (todayHours > 18) {
            $("#text18").addClass("past");
        }
        else if (todayHours < 18) {
            $("#text18").addClass("future");
        }
        else {
            $("#text18").addClass("present");
        }

        if (todayHours > 19) {
            $("#text19").addClass("past");
        }
        else if (todayHours < 19) {
            $("#text19").addClass("future");
        }
        else {
            $("#text19").addClass("present");
        }

        if (todayHours > 20) {
            $("#text20").addClass("past");
        }
        else if (todayHours < 20) {
            $("#text20").addClass("future");
        }
        else {
            $("#text20").addClass("present");
        }

        if (todayHours > 21) {
            $("#text21").addClass("past");
        }
        else if (todayHours < 21) {
            $("#text21").addClass("future");
        }
        else {
            $("#text21").addClass("present");
        }

        if (todayHours > 22) {
            $("#text22").addClass("past");
        }
        else if (todayHours < 22) {
            $("#text22").addClass("future");
        }
        else {
            $("#text22").addClass("present");
        }

        if (todayHours > 23) {
            $("#text23").addClass("past");
        }
        else if (todayHours < 23) {
            $("#text23").addClass("future");
        }
        else {
            $("#text23").addClass("present");
        }
}
colorSwap(); 


//-------------------------------------------------------------------------STORAGE
//--------------------Function for syncing notes with local
function checkNotes() {
    if (localStorage.getItem("notesArray") === null) { // if the local storage array is null, we skip syncing.
        return;
    }
    else {
        localCheck = JSON.parse(localStorage.getItem("notesArray")); // if not null, make it var local check.
    }
    
    if (localCheck !== localCheckVerify) { // if local storage is not empty, we sync our javascript session array to local one.
        notesArray = localCheck;
        $("#text00").val(notesArray[0]);
        $("#text01").val(notesArray[1]);
        $("#text02").val(notesArray[2]);
        $("#text03").val(notesArray[3]);
        $("#text04").val(notesArray[4]);
        $("#text05").val(notesArray[5]);
        $("#text06").val(notesArray[6]);
        $("#text07").val(notesArray[7]);
        $("#text08").val(notesArray[8]);
        $("#text09").val(notesArray[9]);
        $("#text10").val(notesArray[10]);
        $("#text11").val(notesArray[11]);
        $("#text12").val(notesArray[12]);
        $("#text13").val(notesArray[13]);
        $("#text14").val(notesArray[14]);
        $("#text15").val(notesArray[15]);
        $("#text16").val(notesArray[16]);
        $("#text17").val(notesArray[17]);
        $("#text18").val(notesArray[18]);
        $("#text19").val(notesArray[19]);
        $("#text20").val(notesArray[20]);
        $("#text21").val(notesArray[21]);
        $("#text22").val(notesArray[22]);
        $("#text23").val(notesArray[23]);
    }
}
checkNotes(); //--- syncing runs immediately upon loading the page

///---------------storing notes functions-----------------------------------------------for loop?
function storeNotes00(event) {
    event.preventDefault();
    notesArray[0] = text00.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local
}
function storeNotes01(event) {
    event.preventDefault();
    notesArray[1] = text01.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes02(event) {
    event.preventDefault();
    notesArray[2] = text02.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes03(event) {
    event.preventDefault();
    notesArray[3] = text03.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes04(event) {
    event.preventDefault();
    notesArray[4] = text04.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes05(event) {
    event.preventDefault();
    notesArray[5] = text05.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes06(event) {
    event.preventDefault();
    notesArray[6] = text06.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes07(event) {
    event.preventDefault();
    notesArray[7] = text07.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes08(event) {
    event.preventDefault();
    notesArray[8] = text08.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes09(event) {
    event.preventDefault();
    notesArray[9] = text09.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes10(event) {
    event.preventDefault();
    notesArray[10] = text10.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes11(event) {
    event.preventDefault();
    notesArray[11] = text11.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes12(event) {
    event.preventDefault();
    notesArray[12] = text12.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes13(event) {
    event.preventDefault();
    notesArray[13] = text13.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes14(event) {
    event.preventDefault();
    notesArray[14] = text14.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes15(event) {
    event.preventDefault();
    notesArray[15] = text15.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes16(event) {
    event.preventDefault();
    notesArray[16] = text16.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes17(event) {
    event.preventDefault();
    notesArray[17] = text17.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes18(event) {
    event.preventDefault();
    notesArray[18] = text18.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes19(event) {
    event.preventDefault();
    notesArray[19] = text19.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes20(event) {
    event.preventDefault();
    notesArray[20] = text20.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes21(event) {
    event.preventDefault();
    notesArray[21] = text21.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes22(event) {
    event.preventDefault();
    notesArray[22] = text22.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}
function storeNotes23(event) {
    event.preventDefault();
    notesArray[23] = text23.val();
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // syncing javascript array and local storage, add to local storage
    notesArray = JSON.parse(localStorage.getItem("notesArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local;
}

///-----------------------------------Clear notes function 
function clearNotes(event) {
    event.preventDefault();
    notesArray = localCheckVerify; // sets javascript session array to blank
    localStorage.setItem("notesArray", JSON.stringify(notesArray));  // pushes to local store
    checkNotes(); // reusing the check notes function to clear values in note boxes 
}


//--------------------------------------------------------------EVENT LISTENERS
//------------------------------- Save buttons
$("#btn00").on("click", storeNotes00);
$("#btn01").on("click", storeNotes01);
$("#btn02").on("click", storeNotes02);
$("#btn03").on("click", storeNotes03);
$("#btn04").on("click", storeNotes04);
$("#btn05").on("click", storeNotes05);
$("#btn06").on("click", storeNotes06);
$("#btn07").on("click", storeNotes07);
$("#btn08").on("click", storeNotes08);
$("#btn09").on("click", storeNotes09);
$("#btn10").on("click", storeNotes10);
$("#btn11").on("click", storeNotes11);
$("#btn12").on("click", storeNotes12);
$("#btn13").on("click", storeNotes13);
$("#btn14").on("click", storeNotes14);
$("#btn15").on("click", storeNotes15);
$("#btn16").on("click", storeNotes16);
$("#btn17").on("click", storeNotes17);
$("#btn18").on("click", storeNotes18);
$("#btn19").on("click", storeNotes19);
$("#btn20").on("click", storeNotes20);
$("#btn21").on("click", storeNotes21);
$("#btn22").on("click", storeNotes22);
$("#btn23").on("click", storeNotes23);
$("#btn00").on("click", storeNotes00);

//------------------------------- Clear button
$('#clearButton').click(clearNotes);
