var game = document.getElementById("game");
var player = document.getElementById("player");
var debugArea = document.getElementById("debugArea");

var gameWidth = game.clientWidth;
var gameHeight = game.clientHeight;

var playerWidth = player.offsetWidth;
var playerHeight = player.offsetHeight;

var x = 200;
var y = 200;
var playerSpeed = 4;

var keyUp = false;
var keyDown = false;
var keyLeft = false;
var keyRight = false;

/* Settings Start */

var FPS = 60;

/* Settings end */

init();

function moveUp() {

    if(y > 0) {

        y -= playerSpeed;

    }
}
function moveDown() {

    if(y + playerHeight < gameHeight){

        y += playerSpeed;

    }
}
function moveLeft() {

    if(x > 0) {

        x -= playerSpeed;

    }
}
function moveRight() {

    if(x + playerWidth < gameWidth) {

        x += playerSpeed;

    }
}

document.addEventListener("keydown", event => {

    switch(event.key) {
        case "ArrowLeft":
            keyLeft = true;
            break;
        case "ArrowRight":
            keyRight = true;
            break;
        case "ArrowUp":
            keyUp = true;
            break;
        case "ArrowDown":
            keyDown = true;
            break;
    }
});
document.addEventListener("keyup", event => {

    switch(event.key) {
        case "ArrowLeft":
            keyLeft = false;
            break;
        case "ArrowRight":
            keyRight = false;
            break;
        case "ArrowUp":
            keyUp = false;
            break;
        case "ArrowDown":
            keyDown = false;
            break;
    }
});

function init() {

    setInterval(tick, 1000/FPS);
    game.focus();

}

function tick() {

    updatePos();

}

function updatePos() {

    if(keyLeft && !keyRight) {
        moveLeft();
    }
    if(keyRight && !keyLeft) {
        moveRight();
    }
    if(keyUp && !keyDown) {
        moveUp();
    }
    if(keyDown && !keyUp) {
        moveDown();
    }

    player.style.left = x + "px";

    player.style.top = y + "px";

}