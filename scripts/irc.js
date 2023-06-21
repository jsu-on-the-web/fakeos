

/*----------  Function Declaration  ----------*/

const addChatMessage = (author, newMessage) => {
    let messageToInsert = document.createElement('li');
    messageToInsert.className = 'irc-modal__chat-message';
    let messageAuthor = document.createElement('span');
    messageAuthor.className = 'irc-modal__chat-author';
    messageAuthor.innerHTML = author + ' ';
    let messageText = document.createTextNode(newMessage);
    messageToInsert.appendChild(messageAuthor);
    messageToInsert.appendChild(messageText);

    ircChatLog.appendChild(messageToInsert);
}

const selectAtRandom = (arrayToSelectFrom) => {
    if (arrayToSelectFrom !== undefined || arrayToSelectFrom.length !== 0) {
        return arrayToSelectFrom[Math.floor(Math.random() * arrayToSelectFrom.length)];
    }
}

// const randomGreeting = (event) => {
//     return greetings[Math.floor(Math.random() * greetings.length)];
// }

// const randomMessage = (event) => {
//     return randomMessage[Math.floor(Math.random() * randomMessages.length)];
// }

// const randomAuthor = (event) => {
//     return memberList[Math.floor(Math.random() * memberList.length)];
// }

/*----------  Variable Declaration  ----------*/

let memberNameList = [
    "windauxs9x",
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
    "（＾∀＾●）ﾉｼ",
    "(｡･∀･)ﾉﾞ"
]

let randomMessages = [
    "we are just a series of pre-written messages",
    "lol",
    "hey, who wants to see a meme",
    "good afternoon everyone",
    "feeling sleepy...",
    "anybody here up for gaming",
    "༼ つ ◕_◕ ༽つ",
    "just discovered a new channel with a lot of helpful tech discussions",
    "what should i make for lunch",
    "what should i make for dinner",
    "who else has been living in sweatpants for months on end?",
    "amogus ඞ",
    "just got banned from a channel for no reason, this is ridiculous",
    ":P",
    "i can't stop playing Animal Crossing, send help",
    "have you guys heard of that new movie recently?",
    "you ever think we live in a simulation or we're chatbots or something",
    "ヽ(￣ω￣(￣ω￣〃)ゝ",
    "（；´д｀）ゞ",
    "chat dead lmao",
    "anyone down for some minecraft later?",
    "i'm so down for some netflix partying later if anyone's interested",
    "what's up squad, how's everyone doing tonight?",
    "good vibes tonight",
    "does anyone else feel like this years been one long month so far",
    "wow, it's been a while since I've been on IRC, feels good to be back!",
    "just came across a really interesting article on this subreddit i'm on, highly recommend, pm me for link",
    "just made myself a cup of coffee, ready to chat :)",
    "=]",
    "(´･ω･`)?",
    "im starting to think i spend more time chatting online than i do in real life",
    "i love this channel, you guys always have the best conversations",
    "love me a good old existential crisis first thing in the morning",
    "does anyone else feel like we just talk in circles and never actually reply to each other"
]

// let randomDelays = [
//     1000,
//     1500,
//     2000,
//     2500,
//     3000,
//     3500,
//     4000,
//     4500,
//     5000
// ]

export let ircModal = document.querySelector(".irc-modal");
export let ircCloseButton = document.querySelector(".irc-modal__close-button");
export let ircChatLog = document.querySelector(".irc-modal__chat");

let messageInterval = setInterval(() => {
    let author = selectAtRandom(memberNameList);

    // The user is windauxs9x so we can't have that username sending random messages
    if (author != "windauxs9x") {
        addChatMessage(author, selectAtRandom(randomMessages));
    }

}, 2500);

/*----------  Script assignment  ----------*/

memberNameList.forEach(name => {
    let nameToPush = document.createElement("li");
    nameToPush.className = "irc-modal__member-name";
    nameToPush.appendChild(document.createTextNode(name));
    memberList.appendChild(nameToPush);
});

// IDEA: Post random messages from random members to make the chat seem alive





