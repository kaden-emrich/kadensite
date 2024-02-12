var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

// have 6 colors
var red = '#f00';
var orange = '#f50';
var yellow = '#ff0';
var green = '#0f0';
var blue = '#00f';
var purple = '#90f';

const colors = [red, orange, yellow, green, blue, purple];

const barsPerScreen = 12;

const cyclelength = Math.pow(barsPerScreen, 2);

var itteration = 0;
var barHeight = canvas.width / barsPerScreen;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}// clearCanvas()

function updateCanvasSize() {
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    barHeight = canvas.height / barsPerScreen;
}// updateCanvasSize()

function drawColors() {
    clearCanvas();
    let start = (barHeight / (cyclelength / barsPerScreen)) * (itteration % (cyclelength / barsPerScreen));

    var startColor = colors.length - (Math.floor(itteration / (cyclelength / barsPerScreen)) % colors.length + 1);

    for(let i = 0; i < barsPerScreen + 1; i++) {
        if(i == 0) {
            ctx.fillStyle = colors[(startColor) % colors.length];
            ctx.fillRect(0, 0, canvas.width, start);
        }
        else {
            let barYStart = (barHeight * (i - 1)) + start;
            let barYEnd = barYStart + barHeight;
            
            ctx.fillStyle = colors[(i + startColor) % colors.length];
            ctx.fillRect(0, barYStart, canvas.width, barYEnd);
        }
    }
}// drawColors()

function tick() {
    updateCanvasSize();
    drawColors();

    if(itteration >= cyclelength) itteration = 0;
    else itteration++;
}// tick()

updateCanvasSize();
var updateTick;

function start() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stop();
    clearCanvas();
    itteration = 0;
    updateCanvasSize();
    startColor = 0;
    updateTick = setInterval(tick, 1000/60);
}// start()

function stop() {
    updateTick = clearInterval(updateTick);
}// stop()

start();