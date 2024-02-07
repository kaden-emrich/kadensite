var before = document.getElementById("before");
var inputArea = document.getElementById("inputBox");
var terminal = document.getElementById("terminal");

var cHelp = "Commands - \n - help: You just used it. (good job) \n - home: sends you back to the main site. \n - muck: Muck. \n - findTheAnswer: It will find the all the answer. \n - noGames: no games. \n - about: takes you to the about me page.\n - sort: opens sorting algorithm visualizer.  \n - asteroids: play the classic asteroids game.\n - snake: play snake. \n - more - is there any more?";

var inputValue;
var lastLine;
var inputLine;

var numLines;
var username = "User";

var line;

init();

async function init() {
    sizeScreen();
    newInputLine();
    printFancyLine("welcome to the secret site!_\n", "greenGlow", 20);
    inputArea.focus();
}

function sizeScreen() {
    let screen = document.getElementById("screen");
    //document.getElementById("screen").style = "height:" + (document.body.offsetHeight*0.96) + ";width:" + (document.body.offsetWidth*0.96) + ";top:" + (document.body.offsetHeight*0.02) + ";left:" + (document.body.offsetWidth*0.02) +";";
    screen.style.top = (window.innerHeight*0.02) + "px";
    screen.style.left = (window.innerHeight*0.02) + "px";
    screen.style.width = (window.innerWidth-2*(window.innerHeight*0.02)) + "px";
    screen.style.height = (window.innerHeight-2*(window.innerHeight*0.02)) + "px";
}

setInterval(sizeScreen, 100);

document.addEventListener("click", function() {
    //console.log("click");
    if(inputArea == document.activeElement) {
        //console.log("text has focus");
        before.style.animation = "blinker 1s linear infinite";
    } else {
        //console.log("text does not has focus");
        before.style.animation = "hide .2s ease forwards";
    }
});

/* Commands Start */
async function help() {
    await printFancyLine(cHelp, "greenGlow", 10);
    printFancyLine(" - 404: [COMMAND NOT FOUND]", "redGlow", 10);
    return;
}

async function home() {
    printFancyLine("Sending you home...", "greenGlow", 10);
    newTab("../index.html");
    return;
}

async function helloWorld() {
    printFancyLine("Hello World!", "greenGlow", 300);
    return;
}

async function muck() {
    setTimeout(function() {
    printFancyLine("Muck.", "blueGlow", 100);
    }, 1000);
    return;
}

async function fourOhFour() {
    for(let i = 0; i < 25; i++) {
        await printFancyLine("ERROR", "redGlow", 5);
    }
    return;
}

async function findAnswer() {
    printFancyLine("Calculating the answer...", "greenGlow", 10);
    newTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    return;
}

async function noGames() {
    printFancyLine("There are no games...", "redGlow", 10);
    newTab("../g/index.html");
    return;
}

async function about() {
    printFancyLine("Taking you to about me...", "greenGlow", 10);
    newTab("../about/index.html");
    return;
}

async function extras() {
    printFancyLine("Taking you to [e]...", "greenGlow", 10);
    newTab("../e/index.html");
    return;
}

async function openSortAlgVis() {
    printFancyLine("Sorting...", "greenGlow", 10);
    thisTab("https://sortalg.kadenemrich.com/");
    return;
}

async function asteroids() {
    printFancyLine("Opening asteroids", "greenGlow", 10);
    thisTab("https://asteroids.kadenemrich.com");
    return;
}

async function snake() {
    printFancyLine("Opening snake", "greenGlow", 10);
    thisTab("https://snake.kadenemrich.com/fullscreen");
    return;
}

async function setUsername(name) {
    username = name;
    printFancyLine("Hello ", "greenGlow", 10);
    printFancy(username, "blueGlow", 10);
    printFancy("!", "greenGlow", 10);
    return;
}

async function unknownCommand(command) {
    printFancyLine("Command \'" + command + "\' unknown.", "redGlow", 10);
    return;
}
/* Commands End */

async function command(cmd) {
    inputArea.value = "";
    //await printFancyLine("> " + inputValue, "whiteGlow", 10);
    switch(cmd) {
        case 'help':
            await help();
            break;
        case 'home':
            await home();
            break;
        case 'hello world':
            await helloWorld();
            break;
        case 'muck':
        case 'muck.':
            await muck();
            break;
        case '404':
            await fourOhFour();
            break;
        case 'findtheanswer':
            await findAnswer();
            break;
        case 'nogames':
            await noGames();
            break;
        case 'about':
            await about();
            break;
        case 'asteroids':
            await asteroids();
            break;
        case 'snake':
            await snake();
            break;
        case 'sort':
            await openSortAlgVis();
            break;
        case 'more':
            await extras();
            break;
        default:
            await unknownCommand(cmd);
    }
    return;
}

async function typeIt(from, e) {
    var kc = e.keyCode;
    //textArea.value = e.keyCode;
    if(kc == 13) {
        newInputLine();
        console.log(inputValue);
        await command(inputValue.toLowerCase());
    } else {
        inputValue = inputArea.value;
        inputLine.innerHTML = "<br>/< " + inputValue;
        terminal.scrollTo(0, inputLine.offsetTop)
    }
    terminal.scrollTo(0, inputLine.offsetTop)
}

function thisTab(link) {
    setTimeout(function() {
        window.open(link, "_self");
    }, 500);
}

function newTab(link) {
    setTimeout(function() {
        window.open(link, "_blank");
    }, 500);
}

function newInputLine() {
    var next = document.createElement("p");
    next.innerHTML = "<br>/< ";
    next.className = "whiteGlow";
    before.parentNode.insertBefore(next, before);
    inputLine = next;
    terminal.scrollTo(0, inputLine.offsetTop)
    return next;
}

function newElement(style) {
    var next = document.createElement("p");
    next.innerHTML = "<br>";
    next.className = style;
    inputLine.parentNode.insertBefore(next, inputLine);
    terminal.scrollTo(0, inputLine.offsetTop)
    numLines++;
    return next;
}

function print(text, element) {
    element.innerHtml += text;
}

function printLine(text, style, time) {
    before.style.animation = "hide .2s ease forwards";
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = text;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        terminal.scrollTo(0, inputLine.offsetTop)
        numLines++;
        before.style.animation = "blinker 1s linear infinite";
    }, time);
}

async function printFancyLine(text, style, delay) {
    before.style.animation = "hide .2s ease forwards";
    var el = newElement(style);
    addText(text, el, delay, 0);
    terminal.scrollTo(0, inputLine.offsetTop)
    await sleep(delay*1.5*text.length);
    lastLine = el;
    before.style.animation = "blinker 1s linear infinite";
    return;
}

async function printFancy(text, style, delay) {
    before.style.animation = "hide .2s ease forwards";
    var el = lastLine;
    addText(text, el, delay, 0);
    terminal.scrollTo(0, inputLine.offsetTop)
    await sleep(delay*1.5*text.length);
    lastLine = el;
    before.style.animation = "blinker 1s linear infinite";
    return;
}

async function addText(text, element, delay, index) {
    if(index < text.length) {
        if(text.substring(index, index+1) == '\n') {
            element.innerHTML += "<br>";
            index += 2;
            //console.log("linebreak");
        }
        else {
            element.innerHTML += text[index++];
        }
        terminal.scrollTo(0, inputLine.offsetTop)
        setTimeout(function() {addText(text, element, delay, index)}, delay);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}