
/*----------  Imports  ----------*/
import * as notepad from "./notepad.js";
import * as documents from "./documents.js";




/*----------  Function Declaration  ----------*/




/*----------  Variable Declaration  ----------*/

// An object to represent what programs are currently open
let openPrograms = {
    notepadOpen: false,
    documentsOpen: false,
    ircOpen: false
}

let notepadModal = notepad.notepadModal;

/*----------  Script assignment  ----------*/

if (notepadModal.classList.contains("notepad-modal--inactive")) {
    console.log("Notepad inactive");
}
