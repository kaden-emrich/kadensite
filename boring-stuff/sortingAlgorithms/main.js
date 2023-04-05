var c = document.getElementById("visualizer");
var ctx = c.getContext("2d");

var numbers = [];

for(let i = 0; i < 500; i++){
    numbers[i] = i+1;
}

init();



async function shuffle() {
    for(let i = 0; i < 500; i++){
        swap(Math.floor(Math.random() * 501), i);
    }
}

function swap(i1, i2) {
    let temp = numbers[i2];
    numbers[i2] = numbers[i1];
    numbers[i1] = numbers[i2];
    //update();
}

function clear() {
    ctx.clearRect(0, 0, 1000, 500);
}

async function update() {

    clear();
    clear();

    for(let i = 0; i < 500; i++){

        ctx.moveTo(i*2, 500);
        ctx.lineTo(i*2, 500 - numbers[i]);
        ctx.stroke();
        update();
    }

    var i = 0;
    
    var updateTick = setInterval(function() {
        if(i > 500) {
            updateTick = null;
        } 

        ctx.moveTo(i*2, 500);
        ctx.lineTo(i*2, 500 - numbers[i]);
        ctx.stroke();
        update();

        i++;
    }, 100);
}

async function init() {
    //await update();

    //await shuffle();

    //ctx.clearRect(0, 0, 1000, 500);
    //await update();

    //clear();
    //ctx.clearRect(0, 0, 1000, 500);
    //setTimeout(update, 1000);
}