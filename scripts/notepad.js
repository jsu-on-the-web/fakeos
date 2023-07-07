import { updateFileDisplay, textFile, filesContentList } from "./documents.js";
import { openPrograms, closeTaskTab } from "./main.js";

/*----------  Function Declaration  ----------*/
// TODO: Until the modal can resize properly, this method goes unused
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
        notepadTitle.innerHTML = newFileName + ' - Notepad';
        newFileName += ".txt";
        let newFile = new textFile(newFileName, notepadEntry.value);

        // If a file with the same name already exists, replace it with the new file
        const matchIndex = filesContentList.findIndex(file => file.fileName == newFileName);
        if (matchIndex === -1) {
            filesContentList.push(newFile);
            console.log(`Added file ${newFileName}`);

        } else {
            filesContentList[matchIndex] = newFile;
            console.log(`Overwrote file ${newFileName} at index ${matchIndex}`);
        }
    }
    updateFileDisplay();
    toggleMenu(event, notepadFileMenu);
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

export const toggleMenu = (event, menuTarget) => {
    if (!(menuTarget.classList.contains("notepad-modal--inactive"))) {
        menuTarget.classList.add("notepad-modal--inactive");
        notepadNew.classList.add("--inactive");
        notepadSave.classList.add("--inactive");
        notepadExit.classList.add("--inactive");
    } else {
        menuTarget.classList.remove("notepad-modal--inactive");
        notepadNew.classList.remove("--inactive");
        notepadSave.classList.remove("--inactive");
        notepadExit.classList.remove("--inactive");
    }
}
/*----------  Variable Declaration  ----------*/

export const notepadModal = document.getElementsByClassName("notepad-modal").item(0);
export let notepadExpandButton = document.getElementsByClassName("notepad-modal__expand-button").item(0);
export let notepadCloseButton = document.querySelector(".notepad-modal__close-button");
export let notepadEntry = document.querySelector("#notepad-note");
export let notepadTitle = document.querySelector(".notepad-modal__title");

export let notepadFileTab = document.querySelector(".notepad-modal__menu-bar-file");
export let notepadFileMenu = document.querySelector(".notepad-modal__file-menu");
export let notepadNew = document.querySelector(".notepad-modal__file-menu-new");
export let notepadSave = document.querySelector(".notepad-modal__file-menu-save");
export let notepadExit = document.querySelector(".notepad-modal__file-menu-exit");

/*----------  Script assignment  ----------*/
// notepadExpandButton.addEventListener("click", (event) => {
//     toggleNotepadSize(event);
// });

notepadSave.addEventListener("click", (event) => {
    saveFile(event);
});

notepadFileTab.addEventListener("click", (event) => {
    toggleMenu(event, notepadFileMenu);
});

notepadEntry.addEventListener("click", (event) => {

    if (!(notepadFileMenu.classList.contains("notepad-modal--inactive"))) {
        toggleMenu(event, notepadFileMenu);
    }

});

notepadNew.addEventListener("click", (event) => {
    notepadTitle.innerHTML = "Untitled - Notepad";
    notepadEntry.value = '';
    toggleMenu(event, notepadFileMenu);
})

notepadExit.addEventListener("click", (event) => {
    if (openPrograms.notepadOpen === true || !(notepad.notepadModal.classList.contains('notepad-modal--inactive'))) {
        console.log("closing notepad");
        openPrograms.notepadOpen = false;
        toggleMenu(event, notepadFileMenu);
        notepadModal.classList.add('notepad-modal--inactive');
        closeTaskTab(event, 'Notepad');
    }
});

console.log(filesContentList);
