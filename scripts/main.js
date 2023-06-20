
/*----------  Imports  ----------*/
import * as notepad from "./notepad.js";
import * as documents from "./documents.js";




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
let taskbar = document.querySelector('.taskbar');
let clock = document.querySelector('.taskbar__clock');

/*----------  Script assignment  ----------*/

if (notepadModal.classList.contains("notepad-modal--inactive")) {
    console.log("Notepad inactive");
}

clock.addEventListener("load", () => {
    calculateCurrentTime();
});

