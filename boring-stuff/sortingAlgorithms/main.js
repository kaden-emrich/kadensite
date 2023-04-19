var c = document.getElementById("visualizer");
var ctx = c.getContext("2d");

var delaySlider = document.getElementById("delaySlider");
var delayDisplay = document.getElementById("delayDisplay");

var arraySizeInput = document.getElementById("arraySizeInput");
var arraySizeDisplay = document.getElementById("arraySizeDisplay");

var statusDisplay = document.getElementById("status");

var arrayLength = 100;
var towerColor = "#123456";

var delay = 1; // ms
var interval;

var numbers = [];

c.width = arrayLength*2;
c.height = arrayLength;

init();

function clear() {
    ctx.clearRect(0, 0, arrayLength*2, arrayLength);
    ctx.reset();
}// clear()

function shuffle() {
    statusDisplay.innerHTML = "Status: Shuffling...";

    for(let i = 0; i < arrayLength; i++){
        swap(Math.floor(Math.random() * (arrayLength)), i);
    }
    update();

    statusDisplay.innerHTML = "Status: Idle";
}// shuffle()

function visualShuffle() {
    interval = clearInterval(interval);
    statusDisplay.innerText = "Status: Shuffling...";

    let i = 0;
    interval = setInterval(function() {
        if(i < arrayLength) {
            swap(Math.floor(Math.random() * (arrayLength)), i);
            update();
        }
        else {
            statusDisplay.innerText = "Status: Idle";
            clearInterval(interval);
        }
        i++;
    }, delay);

    //statusDisplay.innerHTML = "Status: Idle";
}// visualShuffle()

function swap(i1, i2) {
    let temp = numbers[i2];
    numbers[i2] = numbers[i1];
    numbers[i1] = temp;
    //update();
}// swap(i1, i2)

function update() {

    c.style.width = window.innerWidth + "px";
    c.style.height = window.innerHeight + "px";

    c.width = arrayLength*2;
    c.height = arrayLength;

    clear();

    ctx.fillStyle = towerColor;

    for(let i = 0; i < arrayLength; i++){

        //ctx.moveTo(i*2 + 1, arrayLength);
        //ctx.lineTo(i*2 + 1, arrayLength - numbers[i]);
        ctx.fillStyle = "hsl(" + (numbers[i] * 360 / arrayLength) + ", 100%, 50%)";

        ctx.fillRect(i*2, arrayLength - numbers[i], 2, arrayLength);
        //ctx.stroke();
        //update();
    }

    delay = delaySlider.value;
    delayDisplay.innerHTML = "Delay: " + delay + " ms";

    arraySizeDisplay.innerText = arrayLength;
} // update()

/*----- Bubble Sort -----*/

function bubbleSortInstant() {
    statusDisplay.innerText = "Status: Sorting... (Bubble Sort)";

    let swaped;
    for(let itteration = 0; itteration < numbers.length - 1; itteration++) {
        swaped = false;
        for(let compairison = 0; compairison < numbers.length - 1 - itteration; compairison++) {
            if(numbers[compairison] > numbers[compairison + 1]) {
                swap(compairison, compairison + 1);
                update();
                swaped = true;
            }
        }
        if(!swaped) break;
    }

    statusDisplay.innerText = "Status: Idle";
}// bubbleSortInstant()

function bubbleSortVisual() {
    interval = clearInterval(interval);
    statusDisplay.innerText = "Status: Sorting... (Bubble Sort)";

    let itteration = 0;
    let compairison = 0;
    let swaped = false;
    interval = setInterval(function() {
        if(compairison >= numbers.length - 1 - itteration) {

            if(!swaped) {
                statusDisplay.innerText = "Status: Idle";
                clearInterval(interval);
            }

            itteration++;
            compairison = 0;
            swaped = false;
        }
        if(itteration >= numbers.length - 1) {
            statusDisplay.innerText = "Status: Idle";
            interval = clearInterval(interval);
        }
        
        if(numbers[compairison] > numbers[compairison + 1]) {
            swap(compairison, compairison + 1);
            swaped = true;
        }

        update();
        compairison ++;
    }, delay);

}// bubbleSortVisual()

/*----- Bubble Sort End -----*/
/*----- Insertion Sort -----*/

function insertionSortInstant() {
    var traverser;
    var subject;
    var insertIndex;

    for(traverser = 1; traverser < numbers.length; traverser++) {
        subject = numbers[traverser];
        insertIndex = traverser - 1;

        while(insertIndex >= 0 && numbers[insertIndex] > subject) {
            numbers[insertIndex+1] = numbers[insertIndex];
            --insertIndex;
        }
        numbers[insertIndex+1] = subject;
    }

    update();
}// insertionSortInstant()

function insertionSortVisual() {
    interval = clearInterval(interval);
    statusDisplay.innerText = "Status: Sorting... (Insertion)";

    var traverser = 1;
    var subject = numbers[traverser];
    var insertIndex = traverser - 1;

    interval = setInterval(function() {
        if(traverser < numbers.length) {
            

            if(insertIndex >= 0 && numbers[insertIndex] > subject) {
                numbers[insertIndex+1] = numbers[insertIndex];
                --insertIndex;
            }
            else {
                numbers[insertIndex+1] = subject;

                traverser++;
                subject = numbers[traverser];
                insertIndex = traverser - 1;
            }
            
        }
        else {
            update();
            statusDisplay.innerText = "Status: Idle";
            clearInterval(interval);
        }

        update();
    }, delay);
}

/*----- Selection Sort -----*/

function selectionSortInstant() {
    statusDisplay.innerText = "Status: Sorting... (Selection)";

    let minIndex;
    for(let i = 0; i < numbers.length - 1; i++) {
        minIndex = i;
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[j] < numbers[minIndex]){
                minIndex = j;
            }
        }
        swap(i, minIndex);
    }

    statusDisplay.innerText = "Status: Idle";
    update();
}// selectionSortInstant()

function selectionSortVisual() {
    interval = clearInterval(interval);
    statusDisplay.innerText = "Status: Sorting... (Selection)";

    let i = 0;
    let j = i + 1;
    let minIndex = i;

    interval = setInterval(function() {
        if(i < numbers.length) {
            while(j < numbers.length) {
                if(numbers[j] < numbers[minIndex]) {
                    minIndex = j;
                }
                j++;
            }
            swap(i, minIndex);
            update();
            j = i + 1;
            i++;
            minIndex = i;

        }
        else {
            statusDisplay.innerText = "Status: Idle";
            update();
            interval = clearInterval(interval);
        }
        update();
    }, delay);
}// selectionSortVisual()

/*----- Selection Sort End -----*/

/*----- Insertion Sort End -----*/

function init() {

    arrayLength = arraySizeInput.value;
    
    c.style.width = window.innerWidth + "px";
    c.style.height = window.innerHeight + "px";

    interval = clearInterval(interval);

    statusDisplay.innerText = "Status: Idle";

    for(let i = 0; i < arrayLength; i++){
        numbers[i] = i+1;
    }

    setInterval(function() {
        c.style.width = window.innerWidth + "px";
        c.style.height = window.innerHeight + "px";
    }, 1000/24);

    update();

    //shuffle();

    //console.log(numbers);

    //bubbleSortVisual();

    //ctx.clearRect(0, 0, 1000, 500);
    //await update();

    //await shuffle();

    //await update();

    //clear();
    //ctx.clearRect(0, 0, 1000, 500);
    //setTimeout(update, 1000);
}