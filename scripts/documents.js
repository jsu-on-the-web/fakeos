/*----------  Function Declaration  ----------*/




/*----------  Variable Declaration  ----------*/

let files = document.querySelectorAll('.documents-modal__file');


/*----------  Script assignment  ----------*/
files.forEach(file => {
    file.addEventListener('click', (event) => {
        console.log(`${event.target} was clicked`)
    })
})


