var button = document.getElementById("theButton");
var gameBox = document.getElementById("game");
var heading = document.getElementById("heading");
var counter = document.getElementById("counter");

var gameBoxMarginWidth = window.innerWidth*0.30;
var gameBoxMarginHeight = window.innerHeight*0.30;

var num = 0;

function init() {

}

function tick() {
    sizeGameBox();
}

function sizeGameBox() {
    gameBoxMarginWidth = window.innerWidth*0.30;
    gameBoxMarginHeight = window.innerHeight*0.30;

    gameBox.style.width = "fit-content";
    gameBox.style.height = "fit-content";

    
    gameBox.style.left = ((window.innerWidth - gameBox.offsetWidth)/2) + "px";
    gameBox.style.top = ((window.innerHeight - gameBox.offsetHeight)/2) + "px";
    
    //button.style.width = (gameBox.style.width*.1) + "px";
    //heading.style.fontSize = gameBox.style.width*.3 + "px";

    //console.log(window.innerWidth + ", " + window.innerHeight);
    //console.log(gameBox.offsetWidth + ", " + gameBox.offsetHeight);
    //console.log(gameBox.style.left + ", " + gameBox.style.top);
    //console.log("game resized!");
}

setInterval(tick, 100);

function update() {
    clickAnimation();
    num++;
    console.log("click #" + num);
    switch(num) {
        case 1:
            heading.innerHTML = "click it again...";
            break;
        case 2:
            heading.innerHTML = "again...";
            break;
        case 3:
            heading.innerHTML = "good job.";
            counter.style.animation = "show 1s ease forwards";
            break;
        case 5:
            heading.innerHTML = "keep clicking the button";
            break;
        case 10:
            heading.innerHTML = "your doing great :)";
            break;
        case 11:
            heading.innerHTML = "*you're* doing great :))";
            break;
        case 20:
            heading.innerHTML = "this is the pinnacle of gaming!";
            break;
        case 25:
            heading.innerHTML = "i'm having so much fun!";
            break;
        case 50:
            heading.innerHTML = "are you ok?";
            break;
        case 69:
            heading.innerHTML = "nice.";
            break;
        case 70:
            heading.innerHTML = "why do you feel the need to do this?";
            break;
        case 95:
            heading.innerHTML = "is this entertaining?";
            break;
        case 97:
            heading.innerHTML = "i'm bored.";
            break;
        case 98:
            heading.innerHTML = "well... while we're here...";
            break;
        case 99:
            heading.innerHTML = "...i might aswell make this fun.";
            break;
        case 100:
            startFun();
            break;
    }

    if(num >= 3) {
        counter.innerHTML = "You have clicked the button <span id=\"num\">" + num + "</span> times.";
    }
    sizeGameBox();
}

function startFun() {
    // ask the user for thier name
    // add curency
    // add an upgrade
}

async function inKey(from, e) {
    var kc = e.keyCode;
    console.log(kc);
    if(kc == 32 && document.activeElement != button) {
        update();
    }
}

function clickAnimation() {
    let time = .1;
    button.style.animation = "theButtonClick " + time + "s ease forwards";
    setTimeout(function() {button.style.animation = "none";}, time*1000);
}
