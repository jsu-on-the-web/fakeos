/*----------  Function Declaration  ----------*/

const addChatMessage = (author, newMessage) => { }

const randomGreeting = (event) => { }

/*----------  Variable Declaration  ----------*/

let memberNameList = [
    "windeaux9x",
    "DardiveN",
    "rKstorTiCKsuN",
    "CLIpANoWSTe",
    "rChAR",
    "ladja1982",
    "Xx_oneou_xX"
];
let memberList = document.querySelector(".irc-modal__member-list");

let greetings = [
    "hello!",
    "gm",
    "hey there",
    "o/",
    "welcome back!",
    "wb",
    "（＾∀＾●）ﾉｼ"
]

let randomMessages = [
    "lol",
    "hey, who wants to see a meme",
    "good afternoon everyone",
    "feeling sleepy...",
    "anybody here up for gaming",
    "༼ つ ◕_◕ ༽つ",
    "what should i make for lunch",
    "what should i make for dinner",
    "have you guys heard of that new movie recently?",
    "you ever think we live in a simulation or we're chatbots or something",
    "ヽ(￣ω￣(￣ω￣〃)ゝ",
    "（；´д｀）ゞ",
    "chat dead lmao"
]

export let ircModal = document.querySelector(".irc-modal");
export let ircCloseButton = document.querySelector(".irc-modal__close-button");


/*----------  Script assignment  ----------*/

memberNameList.forEach(name => {
    let nameToPush = document.createElement("li");
    nameToPush.className = "irc-modal__member-name";
    nameToPush.appendChild(document.createTextNode(name));
    memberList.appendChild(nameToPush);
});


