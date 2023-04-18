var c = document.getElementById("visualizer");
var ctx = c.getContext("2d");

var arrayLength = 50;
var towerColor = "#123456";

var numbers = [];

c.width = arrayLength*2;
c.height = arrayLength;

init();

function init() {

    for(let i = 0; i < arrayLength; i++){
        numbers[i] = i+1;
    }

    ctx.fillStyle = towerColor;

    update();

    shuffle();

    bubbleSort();

    //ctx.clearRect(0, 0, 1000, 500);
    //await update();

    //await shuffle();

    //await update();

    //clear();
    //ctx.clearRect(0, 0, 1000, 500);
    //setTimeout(update, 1000);
}

function clear() {
    ctx.clearRect(0, 0, arrayLength*2, arrayLength);
    ctx.reset();
}

function shuffle() {
    for(let i = 0; i < arrayLength; i++){
        swap(Math.floor(Math.random() * (arrayLength + 1)), i);
    }
    update();
}

function swap(i1, i2) {
    let temp = numbers[i2];
    numbers[i2] = numbers[i1];
    numbers[i1] = temp;
    //update();
}

function update() {

    clear();

    ctx.fillStyle = towerColor;

    for(let i = 0; i < arrayLength; i++){

        //ctx.moveTo(i*2 + 1, arrayLength);
        //ctx.lineTo(i*2 + 1, arrayLength - numbers[i]);

        ctx.fillRect(i*2, arrayLength - numbers[i], 2, arrayLength);
        //ctx.stroke();
        //update();
    }

    //ctx.stroke();

    //var i = 0;
    
    /*var updateTick = setInterval(function() {
        if(i > 500) {
            updateTick = null;
        } 

        ctx.moveTo(i*2, 500);
        ctx.lineTo(i*2, 500 - numbers[i]);
        ctx.stroke();
        update();

        i++;
    }, 100);*/
} // update()

function bubbleSort() {

    var didSwap;

    for(let iteration = 0; iteration < numbers.length - 1; iteration++) {
        didSwap = false;

        for(let compairison = 0; compairison < numbers.length - 1 - iteration; compairison++) {
            
            if(numbers[compairison] > numbers[compairison+1]) {
                swap(compairison, compairison+1);
                didSwap = true;
                update();
            }
        }
        
        if(!swap) {
            break;
        }//*/
    }
}// bubbleSort()