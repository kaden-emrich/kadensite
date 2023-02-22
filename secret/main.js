var before = document.getElementById("before");
var inputArea = document.getElementById("inputBox");
var terminal = document.getElementById("terminal");

var inputValue;

init();

function init() {
    printLine("welcome to the secret site!_", "greenGlow", 80);
    inputArea.focus();
}

async function command(cmd) {
    inputArea.value = "";
    await printFancy("> " + inputValue, "whiteGlow", 10);
    switch(cmd) {
        case 'help':
            printFancy("Help command used...", "greenGlow", 10);
            break;
        case 'back':
            printFancy("Sending you back...", "redGlow", 10);
            newTab("../index.html");
            break;
        case 'hello world':
            printFancy("Hello World!", "greenGlow", 300);
            break;
        default:
            printFancy("Command \'" + cmd + "\' unknown.", "redGlow", 10);
    }
}

function typeIt(from, e) {
    var kc = e.keyCode;
    //textArea.value = e.keyCode;
    if(kc == 13) {
        console.log(inputValue);
        command(inputValue);
    } else {
        inputValue = inputArea.value;
    }
}

function newTab(link) {
setTimeout(function() {
    window.open(link, "_self");
}, 500);
}

function newElement(style) {
    var next = document.createElement("p");
        next.innerHTML = "";
        next.className = style;
        before.parentNode.insertBefore(next, before);
        return next;
}

function print(text, element) {
    element.innerHtml = text;
}

function printLine(text, style, time) {
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = text;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

async function printFancy(text, style, delay) {
    var el = newElement(style);
    addText(text, el, delay, 0);
    terminal.scrollTo(0, terminal.offsetHeight);
    await sleep(delay*text.length);
    console.log("timeout over");
    return;
}

async function addText(text, element, delay, index) {
    if(index < text.length) {
        element.innerHTML += text[index++];
        setTimeout(function() {addText(text, element, delay, index)}, delay);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}