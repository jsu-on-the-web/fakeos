import { updateFileDisplay, textFile, filesContentList } from "./documents.js";

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

export const saveFile = (event) => {
    let newFileName = fileNameEntry(event);

    if (newFileName === "") {
        console.error("File name invalid!");
        alert("File name invalid! File not saved!");
        return;
    } else {
        newFileName += ".txt";
        let newFile = new textFile(newFileName, notepadEntry.value);

        // If a file with the same name already exists, replace it with the new file
        const matchIndex = filesContentList.findIndex(file => file.fileName == newFileName);
        if (matchIndex === -1) {
            filesContentList.push(newFile);
            console.log(`Added file %{newFileName}`);

        } else {
            filesContentList[matchIndex] = newFile;
            console.log(`Overwrote file ${newFileName} at index ${matchIndex}`);
        }
    }
    updateFileDisplay();
    console.log(filesContentList);
}

export const fileNameEntry = (event) => {
    const INVALID_CHARACTERS = /[?\s]/;
    const WHITESPACE_ONLY = /^\s*$/;
    let newFileName = prompt('Enter a file name');

    if (newFileName === '' || newFileName.match(INVALID_CHARACTERS || newFileName.match(WHITESPACE_ONLY))) {
        return "";
    } else {
        return newFileName;
    }


}
/*----------  Variable Declaration  ----------*/

export const notepadModal = document.getElementsByClassName("notepad-modal").item(0);
export let notepadExpandButton = document.getElementsByClassName("notepad-modal__expand-button").item(0);
export let notepadCloseButton = document.querySelector(".notepad-modal__close-button");
export let notepadEntry = document.querySelector("#notepad-note");
export let notepadSave = document.querySelector(".notepad-modal__file-menu-save");

/*----------  Script assignment  ----------*/
// notepadExpandButton.addEventListener("click", (event) => {
//     toggleNotepadSize(event);
// });

notepadSave.addEventListener("click", (event) => {
    saveFile(event);
});

console.log(filesContentList);
