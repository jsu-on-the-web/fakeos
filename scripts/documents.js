/*----------  Function Declaration  ----------*/




/*----------  Variable Declaration  ----------*/

class file {

    fileName = '';
    fileContents = '';

    constructor(newName, newContents) {
        fileName = newName;
        fileContents = newContents;
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
// let file1 = new File('test1.txt', 'This is a test file');

let files = document.querySelectorAll('.documents-modal__file');
let fileContents = [];

/*----------  Script assignment  ----------*/
files.forEach(file => {
    file.addEventListener('click', (event) => {
        console.log(`${event.target} was clicked`)
    })
})


