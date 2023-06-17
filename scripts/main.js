
/*----------  Imports  ----------*/
import { toggleNotepadSize, notepadModal } from "./notepad";




/*----------  Function Declaration  ----------*/




/*----------  Variable Declaration  ----------*/

// An object to represent what programs are currently open
let openPrograms = {
    notepadOpen: false,
    documentsOpen: false,
    ircOpen: false
}


/*----------  Script assignment  ----------*/

if (notepadModal.classList.contains("notepad-modal--inactive")) {
    console.log("Notepad inactive");
}
