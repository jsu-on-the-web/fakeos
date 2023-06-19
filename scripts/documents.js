/*----------  Function Declaration  ----------*/

const updateFileDisplay = () => {
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

    })
}


/*----------  Variable Declaration  ----------*/

class file {

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
let testFile = new file('test1.txt', 'This is a test file');

let files = document.querySelectorAll('.documents-modal__file');
let documentsDisplayList = document.querySelector('.documents-modal__display-file-list');
let filesContentList = [testFile];

/*----------  Script assignment  ----------*/

// We gotta display something in the display before the user makes a note in the notepad modal
updateFileDisplay();


files.forEach(file => {
    file.addEventListener('click', (event) => {
        console.log(`${event.target} was clicked`)
    })
})


