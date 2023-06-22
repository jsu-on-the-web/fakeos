/*----------  Function Declaration  ----------*/
export const toggleNotepadSize = (event) => {
    if (notepadModal.classList.contains('notepad-modal--maximized')) {
        notepadModal.classList.remove('notepad-modal--maximized');
        notepadEntry.style.height = "inherit";
        console.log(`Notepad minimized!`);
    } else {
        notepadModal.classList.add('notepad-modal--maximized');
        notepadEntry.style.height = "inherit";
        console.log(`Notepad maximized!`);
    }
}



/*----------  Variable Declaration  ----------*/

export const notepadModal = document.getElementsByClassName("notepad-modal").item(0);
export let notepadExpandButton = document.getElementsByClassName("notepad-modal__expand-button").item(0);
export let notepadCloseButton = document.querySelector(".notepad-modal__close-button");
export let notepadEntry = document.querySelector("#notepad-note");


/*----------  Script assignment  ----------*/
// notepadExpandButton.addEventListener("click", (event) => {
//     toggleNotepadSize(event);
// });



