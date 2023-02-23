var button = document.getElementById("theButton");
var gameBox = document.getElementById("game");
var heading = document.getElementById("heading");
var counter = document.getElementById("counter");
var cpsEl = document.getElementById("cps");

var gameBoxMarginWidth = window.innerWidth*0.30;
var gameBoxMarginHeight = window.innerHeight*0.30;

var num = 0;
var bits = 0;
var modifier = 1;
var upgradeCost = 50;

/* Settings Start */

var boolShowButton = true;
function showButton() {

    button.style.position = "relative";
    button.style.opacity = 1;
    boolShowButton = true;

}
function hideButton() {

    button.style.position = "absolute";
    button.style.opacity = 0;
    boolShowButton = false;

}

var boolShowCPS = false;
function showCPS() {

    boolShowCPS = true;
    cpsEl.innerHTML = "CPS: " + cps;

}
function hideCPS() {
    
    boolShowCPS = false;
    cpsEl.innerHTML = "";

}

/* Settings End */

function init() {

}

var tickCounter = 0;
function tick() {
    tickCounter++;
    sizeGameBox();
    if(tickCounter == 10) {
        tickCounter = 0;
        secTick();
    }
}
var seconds = 0;
var lastClicks = 0;
var cps = 0;
function secTick() {
    cps = num - lastClicks;
    lastClicks = num;
    if(boolShowCPS == true){
        cpsEl.innerHTML = "CPS: " + cps;
    }
    else {
        cpsEl.innerHTML = "";
    }

    //console.log(++seconds + "s");
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
    num += modifier;
    bits += modifier;
    console.log("click #" + num);
    switch(num) {
        case 1:
            setTxt("click it again...");
            break;
        case 2:
            setTxt("again...");
            break;
        case 3:
            setTxt("good job.");
            counter.style.animation = "show 1s ease forwards";
            break;
        case 5:
            setTxt("keep clicking the button");
            break;
        case 10:
            setTxt("your doing great :)");
            break;
        case 11:
            setTxt("*you're* doing great :))");
            break;
        case 20:
            setTxt("this is the pinnacle of gaming!");
            break;
        case 25:
            setTxt("i'm having so much fun!");
            showCPS();
            break;
        case 50:
            setTxt("are you ok?");
            break;
        case 69:
            setTxt("nice.");
            break;
        case 70:
            setTxt("why do you feel the need to do this?");
            break;
        case 95:
            setTxt("is this entertaining?");
            break;
        case 97:
            setTxt("i'm bored.");
            break;
        case 98:
            setTxt("well... while we're here...");
            break;
        case 99:
            setTxt("...i might as well make this fun.");
            break;
        case 100:
            createUsernameBox();
            break;
        case 101:
            setTxt("...");
            break;
        case 102:
            setTxt("wow.");
            break;
        case 103:
            setTxt("you aren't even going to ask for my name?");
            break;
        case 104:
            setTxt("you know what?");
            break;
        case 105:
            setTxt("that's fine.");
            break;
        case 106:
            setTxt("because i don't have a name.");
            break;
        case 107:
            setTxt(":(");
            break;
        case 108:
            setTxt("it doesn't matter.");
            break;
        case 109:
            setTxt("do you want to know why?");
            break;
        case 110:
            setTxt("it's because im not the one wasting their time<br>on clicking a useless button.");
            break;
        case 111:
            setTxt("imagine...");
            break;
        case 112:
            startFun();
    }

    if(num >= 3 && num != 100) {
        counter.innerHTML = "You have clicked the button <span id=\"num\">" + num + "</span> times.";
    }
    sizeGameBox();
}

async function setTxt(text) {

    heading.innerHTML = text;
    return;

}

async function startFun() {
    
    setTxt("...");
    document.getElementById("upgrade").style.animation = "showUpgrade 0s ease forwards";
    setTimeout(function() { setTxt("what");}, "1000");
    setTimeout(function() { setTxt("what is");}, "2000");
    setTimeout(function() { setTxt("what is that?");}, "3000");

}

function createUsernameBox() {

    counter.innerHTML = "";
    hideCPS();
    hideButton();
    setTxt("please enter your name.");

    var box = document.createElement("input");
    box.id = "usernameInput";
    box.onkeydown = "inKey(this, event)";
    button.parentNode.insertBefore(box, button);
    box.focus();

}
function setUsername() {

    username = document.getElementById("usernameInput").value;
    document.getElementById("usernameInput").value = "";
    setTxt("hello " + username +", it's nice to meet you.");
    document.getElementById("usernameInput").remove();
    showButton();
    showCPS();
    counter.innerHTML = "You have clicked the button <span id=\"num\">" + num + "</span> times.";

}

function clickReg() {

    if(boolShowButton) {

        update();

    }

}

async function inKey(from, e) {
    var kc = e.keyCode;
    console.log(kc);
    if(kc == 32 && document.activeElement != button) {
        clickReg();
    }
    else if(kc == 13) {
        switch(num) {
            case 100:
                setUsername();
                break;
        }
    }
}

function clickAnimation() {
    let time = .1;
    button.style.animation = "theButtonClick " + time + "s ease forwards";
    setTimeout(function() {button.style.animation = "none";}, time*1000);
}

function upgrade() {
    if(bits >= upgradeCost) {
        modifier++;
        bits -= upgradeCost;
        upgradeCost = (modifier*modifier*25);
        document.getElementById("upgrade").innerHTML = "UPGRADE!<br>cost: " + upgradeCost + " bits";
    }
    else {
        document.getElementById("upgrade").innerHTML = "not enough<br>bits";
        setTimeout(function() { document.getElementById("upgrade").innerHTML = "UPGRADE!<br>cost: " + upgradeCost + " bits" }, 1000);
    }
    if(modifier == 2) {

        setTxt("i don't think that it did anything.");

        setTimeout(function() { 

            document.getElementById("mod").innerHTML = "Your current modifier: " + modifier + "x"; 
            sizeGameBox();

            setTimeout(function() { 
                
                setTxt("you don't even know how many bits you have!<br>you might be in debt now!"); 
                sizeGameBox();

                setTimeout(function() { 
                    
                    document.getElementById("bits").innerHTML = "you have " + bits + "bits."; 
                    sizeGameBox();

                    setTimeout(function() { 
                        
                        setTxt("welp."); 
                        sizeGameBox();
                    
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
        
    }
}

/*
Problems:
    Holding down spacebar is unfair.
    - When holding down the space bar the browser automaticly registers many keypresses is quick succession. This works like an auto clicker.
*/