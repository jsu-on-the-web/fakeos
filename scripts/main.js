
/*=============================================
=            Imports                          =
=============================================*/

import * as notepad from "./notepad.js";
import * as documents from "./documents.js";
import * as irc from "./irc.js";
import * as du from "./domUtils.js";


/*=============================================
=            Function Declaration            =
=============================================*/

const calculateCurrentTime = () => {
    let timeCalculate = new Date();
    let currentTime = "";

    let hours = timeCalculate.getHours() > 12 ? timeCalculate.getHours() - 12 : timeCalculate.getHours();
    hours = hours < 10 ? '0' + hours : hours.toString();

    let minutes = timeCalculate.getMinutes() < 10 ? '0' + timeCalculate.getMinutes() : timeCalculate.getMinutes();

    let amOrPm = timeCalculate.getHours() < 12 ? 'AM' : 'PM';

    currentTime += hours + ':' + minutes + amOrPm;

    // console.log(currentTime);

    return currentTime;
}

export const spawnTaskTab = (event, programName) => {
    let newTab = document.createElement('div');
    newTab.className = 'taskbar__task';

    let newTabIcon = document.createElement('img');
    newTabIcon.className = 'taskbar__task-icon';

    let newTabTitle = document.createElement('span');
    newTabTitle.className = 'taskbar__task-title';

    switch (programName) {
        case 'Documents':
            newTabIcon.src = "../img/mydocs.ico";
            newTabTitle.innerText = 'Documents';
            newTab.id = 'Documents';
            break;
        case 'Notepad':
            newTabIcon.src = "../img/notepad.ico";
            newTabTitle.innerText = 'Notepad';
            newTab.id = 'Notepad';
            break;
        case 'IRC':
            newTabIcon.src = "../img/network_three_pcs.ico";
            newTabTitle.innerText = 'IRC';
            newTab.id = 'IRC';
            break;
        default:
            console.error('Unknown program');
            return;
    }

    newTab.appendChild(newTabIcon);
    newTab.appendChild(newTabTitle);

    tasksList.appendChild(newTab);
    console.log(tasksList);

}

export const closeTaskTab = (event, programName) => {
    try {
        tasksList.removeChild(document.querySelector(`#${programName}`));
    } catch (error) {
        console.error(error);
    }
}

/*=============================================
=            Variable Declaration                =
=============================================*/

// An object to represent what programs are currently open
export let openPrograms = {
    notepadOpen: false,
    documentsOpen: false,
    ircOpen: false
}

let notepadModal = notepad.notepadModal;
let documentsModal = documents.documentsModal;
let ircModal = irc.ircModal;

let taskbar = document.querySelector('.taskbar');
let tasksList = document.querySelector('.taskbar__task-list')
let startMenu = document.querySelector('.taskbar__menu');
let startButton = document.querySelector('.taskbar__start-button');

let clockText = document.querySelector('.taskbar__clock-text');
let intervalID = setInterval(() => {
    du.updateText(calculateCurrentTime(), clockText);
}, 5000);

let documentsProgram = document.querySelector('.desktop__documents');
let notepadProgram = document.querySelector('.desktop__notepad');
let ircProgram = document.querySelector('.desktop__irc');

let documentsCloseButton = documents.documentsCloseButton;
let notepadCloseButton = notepad.notepadCloseButton;
let ircCloseButton = irc.ircCloseButton;


/*=============================================
=            Script Assignment                =
=============================================*/

du.updateText(calculateCurrentTime(), clockText);
startMenu.classList.add("taskbar__menu--inactive");


startButton.addEventListener("click", (event) => {
    if (startMenu.classList.contains("taskbar__menu--inactive")) {
        startMenu.classList.remove("taskbar__menu--inactive");
        startButton.classList.add("taskbar__start-button--pressed");
    } else {
        startMenu.classList.add("taskbar__menu--inactive");
        startButton.classList.remove("taskbar__start-button--pressed");
    }
})

// Opening each program 
documentsProgram.addEventListener("click", (event) => {
    if (openPrograms.documentsOpen === false) {
        console.log("opening documents");
        openPrograms.documentsOpen = true;
        spawnTaskTab(event, 'Documents');
        documentsModal.classList.remove('documents-modal--inactive');
    }
})
documentsCloseButton.addEventListener("click", (event) => {
    if (openPrograms.documentsOpen === true) {
        console.log("closing documents");
        openPrograms.documentsOpen = false;
        documentsModal.classList.add('documents-modal--inactive');
        closeTaskTab(event, 'Documents');
    }
});

notepadProgram.addEventListener("click", (event) => {
    if (openPrograms.notepadOpen === false) {
        console.log("opening notepad");
        openPrograms.notepadOpen = true;
        notepadModal.classList.remove('notepad-modal--inactive');
        spawnTaskTab(event, 'Notepad');
    }
});
notepadCloseButton.addEventListener("click", (event) => {
    if (openPrograms.notepadOpen === true || !(notepad.notepadModal.classList.contains('notepad-modal--inactive'))) {
        console.log("closing notepad");
        openPrograms.notepadOpen = false;
        notepadModal.classList.add('notepad-modal--inactive');
        closeTaskTab(event, 'Notepad');
    }
});


ircProgram.addEventListener("click", (event) => {
    if (openPrograms.ircOpen === false) {
        console.log("opening irc");
        openPrograms.ircOpen = true;
        ircModal.classList.remove('irc-modal--inactive');
        spawnTaskTab(event, 'IRC');
    }
});
ircCloseButton.addEventListener("click", (event) => {
    if (openPrograms.ircOpen === true) {
        console.log("closing irc");
        openPrograms.ircOpen = false;
        ircModal.classList.add('irc-modal--inactive');
        closeTaskTab(event, 'IRC');
    }
});

