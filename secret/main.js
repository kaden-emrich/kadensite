var before = document.getElementById("before");
var inputArea = document.getElementById("inputBox");
var terminal = document.getElementById("terminal");

var cHelp = "Commands - \n - help: You just used it. (good job) \n - back: sends you back to the main site. "

var inputValue;
var lastLine;

init();

async function init() {
    printFancyLine("welcome to the secret site!_", "greenGlow", 20);
    inputArea.focus();
}

async function help() {
    await printFancyLine(cHelp, "greenGlow", 10);
    printFancyLine(" - 404: [COMMAND NOT FOUND]", "redGlow", 10);
}

function back() {
    printFancyLine("Sending you back...", "greenGlow", 10);
    newTab("../index.html");
}

function helloWorld() {
    printFancyLine("Hello World!", "greenGlow", 300);
}

function muck() {
    setTimeout(function() {
    printFancyLine("Muck.", "blueGlow", 100);
    }, 1000);
}

async function fourOhFour() {
    for(let i = 0; i < 25; i++) {
        await printFancyLine("ERROR", "redGlow", 5);
    }
}

function unknownCommand(command) {
    printFancyLine("Command \'" + command + "\' unknown.", "redGlow", 10);
}

async function command(cmd) {
    inputArea.value = "";
    await printFancyLine("> " + inputValue, "whiteGlow", 10);
    switch(cmd) {
        case 'help':
            help();
            break;
        case 'back':
            back();
            break;
        case 'hello world':
            helloWorld();
            break;
        case 'muck':
        case 'muck.':
            muck();
            break;
        case '404':
            fourOhFour();
            break;
        default:
            unknownCommand(cmd);
    }
}

function typeIt(from, e) {
    var kc = e.keyCode;
    //textArea.value = e.keyCode;
    if(kc == 13) {
        console.log(inputValue);
        command(inputValue);
    } else {
        inputValue = inputArea.value.toLowerCase();
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

async function printFancyLine(text, style, delay) {
    var el = newElement(style);
    addText(text, el, delay, 0);
    terminal.scrollTo(0, terminal.offsetHeight);
    await sleep(delay*1.5*text.length);
    lastLine = el;
    return;
}

async function printFancy(text, style, delay) {
    var el = lastLine;
    addText(text, el, delay, 0);
    terminal.scrollTo(0, terminal.offsetHeight);
    await sleep(delay*1.5*text.length);
    lastLine = el;
    return;
}

async function addText(text, element, delay, index) {
    if(index < text.length) {
        if(text.substring(index, index+1) == '\n') {
            element.innerHTML += "<br>";
            index += 2;
            console.log("linebreak");
        }
        else {
            element.innerHTML += text[index++];
        }
        setTimeout(function() {addText(text, element, delay, index)}, delay);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}