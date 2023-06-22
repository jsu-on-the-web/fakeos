import * as notepad from "./notepad.js";
import { spawnTaskTab } from "./main.js";
/*----------  Function Declaration  ----------*/

export const updateFileDisplay = () => {
    documentsDisplayList.innerHTML = "";
    filesContentList.forEach(file => {
        // Spawn and add a file icon to the display

        /* =============== The format of the file object =================
            <div class="documents-modal__file">
                                <img class="documents-modal__icon" src="/img/message_file.ico">
                                <p class="documents-modal__file-name">dummy.txt</p>
                            </div>
        */
        let fileToPlace = document.createElement('div');
        fileToPlace.className = 'documents-modal__file';
        let icon = document.createElement('img');
        icon.className = 'documents-modal__icon';
        icon.src = '../img/message_file.ico';
        fileToPlace.appendChild(icon);
        let fileName = document.createElement('p');
        fileName.className = 'documents-modal__file-name';
        const fileNameText = document.createTextNode(file.fileName);
        fileName.appendChild(fileNameText);
        fileToPlace.appendChild(fileName);
        documentsDisplayList.appendChild(fileToPlace);

        fileToPlace.addEventListener("click", () => {
            openFile(fileNameText.nodeValue);
            console.log(`${fileNameText.nodeValue} opened`);
        });
    })
}

export const openFile = (requestedFileName) => {
    let fileToOpen = filesContentList.filter(file => file.fileName === requestedFileName);
    if (fileToOpen.length > 0) {
        // Must be the first one!
        let { fileName, fileContents } = fileToOpen[0];

        notepad.notepadTitle.innerHTML = fileName + ' - Notepad';
        notepad.notepadEntry.value = fileContents;

        notepad.notepadModal.classList.remove('notepad-modal--inactive');
        notepad.notepadFileMenu.classList.add('notepad-modal--inactive');
        spawnTaskTab(event, 'Notepad');
    } else {
        console.error("File not found!");
        return;
    }
}

/*----------  Variable Declaration  ----------*/

export class textFile {

    fileName = '';
    fileContents = '';

    constructor(newName, newContents) {
        this.fileName = newName;
        this.fileContents = newContents;
    }

    get fileName() {
        return this.name;
    }
    set fileName(value) {
        if (typeof value === 'string' && value.length > 0) {
            this.fileName = value;
        }
    }
    get fileContents() {
        return this.fileContents;
    }
    set fileContents(value) {
        this.fileContents = value;
    }
}
let testFile = new textFile('test1.txt', 'This is a test file');

export let documentsModal = document.querySelector('.documents-modal');
export let documentsCloseButton = document.querySelector('.documents-modal__close-button');

export let files = document.querySelectorAll('.documents-modal__file');
export let documentsDisplayList = document.querySelector('.documents-modal__display-file-list');
export let filesContentList = [testFile];

/*----------  Script assignment  ----------*/

// We gotta display something in the display before the user makes a note in the notepad modal
updateFileDisplay();


files.forEach(file => {
    file.addEventListener('click', (event) => {
        console.log(`${event.target} was clicked`)
    })
})


