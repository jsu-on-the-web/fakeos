/*----------  Function Declaration  ----------*/




/*----------  Variable Declaration  ----------*/

let memberNameList = ["windeaux9x", "DardiveN", "rKstorTiCKsuN", "CLIpANoWSTe", "rChAR", "ladja1982", "Xx_oneou_xX"]
let memberList = document.querySelector(".irc-modal__member-list");

export let ircModal = document.querySelector(".irc-modal");


/*----------  Script assignment  ----------*/

memberNameList.forEach(name => {
    let nameToPush = document.createElement("li");
    nameToPush.className = "irc-modal__member-name";
    nameToPush.appendChild(document.createTextNode(name));
    memberList.appendChild(nameToPush);
});


