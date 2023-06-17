/*----------  Function Declaration  ----------*/
const toggleNotepadSize = (event) => {
    if (notepadModal.classList.contains('notepad-modal--maximized')) {
        notepadModal.classList.remove('notepad-modal--maximized');
        notepadModal.classList.add('notepad-modal');
        notepadEntry.style.height = "inherit";
        console.log(`Notepad minimized!`);
    } else {
        notepadModal.classList.remove('notepad-modal');
        notepadModal.classList.add('notepad-modal--maximized');
        notepadEntry.style.height = "inherit";
        console.log(`Notepad maximized!`);
    }
}



/*----------  Variable Declaration  ----------*/

let notepadModal = document.getElementsByClassName("notepad-modal").item(0);
let notepadExpandButton = document.getElementsByClassName("notepad-modal__expand-button").item(0);
let notepadEntry = document.querySelector("#notepad-note");


/*----------  Script assignment  ----------*/
notepadExpandButton.addEventListener("click", (event) => {
    toggleNotepadSize(event);
});



