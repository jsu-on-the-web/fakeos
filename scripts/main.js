
/*----------  Imports  ----------*/
import * as notepad from "./notepad.js";
import * as documents from "./documents.js";
import * as du from "./domUtils.js";




/*----------  Function Declaration  ----------*/

const calculateCurrentTime = () => {
    let currentTime = "";

    let hours = timeCalculate.getHours() > 12 ? timeCalculate.getHours() - 12 : timeCalculate.getHours();
    hours = hours < 10 ? '0' + hours : hours.toString();

    let minutes = timeCalculate.getMinutes() < 10 ? '0' + timeCalculate.getMinutes() : timeCalculate.getMinutes();

    let amOrPm = timeCalculate.getHours() < 12 ? 'AM' : 'PM';

    currentTime += hours + ':' + minutes + amOrPm;

    return currentTime;
}



/*----------  Variable Declaration  ----------*/

// An object to represent what programs are currently open
let openPrograms = {
    notepadOpen: false,
    documentsOpen: false,
    ircOpen: false
}

let timeCalculate = new Date();

let notepadModal = notepad.notepadModal;
let documentsModal = documents.documentsModal;

let taskbar = document.querySelector('.taskbar');
let clockText = document.querySelector('.taskbar__clock-text');
let intervalID = setInterval(du.updateText, 5000, calculateCurrentTime(), clockText);

let documentsProgram = document.querySelector('.desktop__documents');
let notepadProgram = document.querySelector('.desktop__notepad');
let ircProgram = document.querySelector('.desktop__irc');

/*----------  Script assignment  ----------*/

if (notepadModal.classList.contains("notepad-modal--inactive")) {
    console.log("Notepad inactive");
}

du.updateText(calculateCurrentTime(), clockText);


// Opening each program 
documentsProgram.addEventListener("click", (event) => {
    if (openPrograms.documentsOpen === false) {
        openPrograms.documentsOpen = true;
        documentsModal.classList.remove("documents-modal--inactive");
    }
})