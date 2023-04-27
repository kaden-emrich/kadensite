var c = document.getElementById("visualizer");
var ctx = c.getContext("2d");

var delaySlider = document.getElementById("delayInput");
var delayDisplay = document.getElementById("delayDisplay");

var arraySizeInput = document.getElementById("arraySizeInput");
var arraySizeDisplay = document.getElementById("arraySizeDisplay");

var statusDisplay = document.getElementById("status");

// Settings

var arrayLength = 100;
var delay = 1; // ms
var showBox = true;
var autoPlayOn = false;

// Settings end

var interval;


var numbers = [];
var animationQueue = [];

c.width = arrayLength*2;
c.height = arrayLength;

init();

document.body.onkeydown = function(e) {
    if(e.key=="h") {
        if(showBox) {
            document.getElementById("stuffs").style.opacity = 0;
            showBox = false;
        }
        else {
            document.getElementById("stuffs").style.opacity = 100;
            showBox = true;
        }
    }
}

function clear() {
    ctx.clearRect(0, 0, arrayLength*2, arrayLength);
    ctx.reset();
}// clear()

function stop() {
    autoPlayOn = 0; 
    interval = clearInterval(interval); 
    statusDisplay.innerText = "Status: Idle";
}// stop()

function shuffle() {
    statusDisplay.innerHTML = "Status: Shuffling...";

    for(let i = 0; i < arrayLength; i++){
        swap(Math.floor(Math.random() * (arrayLength)), i);
    }
    update();

    statusDisplay.innerHTML = "Status: Idle";
}// shuffle()

function visualShuffle(callback) {
    //interval = clearInterval(interval);
    statusDisplay.innerText = "Status: Shuffling...";

    newAnimationQ();

    for(let i = 0; i < arrayLength; i++) {
        swap(Math.floor(Math.random() * (arrayLength)), i);
        addAnimationFrame();
    }

    playAnimationQ(callback);
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

    for(let i = 0; i < arrayLength; i++){

        //ctx.moveTo(i*2 + 1, arrayLength);
        //ctx.lineTo(i*2 + 1, arrayLength - numbers[i]);
        ctx.fillStyle = "hsl(" + (numbers[i] * 300 / arrayLength) + ", 100%, 50%)";

        ctx.fillRect(i*2, arrayLength - numbers[i], 2, arrayLength);
        //ctx.stroke();
        //update();
    }

    delay = delaySlider.value;
    delayDisplay.innerHTML = "Delay: " + delay + " ms";

    arraySizeDisplay.innerText = arrayLength;
} // update()

function startAutoPlay() {
    autoPlayOn = true;
    autoPlay();
}// startAutoPlay()

function autoPlay() {
    if(!autoPlayOn) return;
    
    visualShuffle(function() {startSort(autoPlay);});
}//

/*----- Bubble Sort -----*/

function bubbleSort() {
    let swaped;
    for(let itteration = 0; itteration < numbers.length - 1; itteration++) {
        swaped = false;
        for(let compairison = 0; compairison < numbers.length - 1 - itteration; compairison++) {
            if(numbers[compairison] > numbers[compairison + 1]) {
                swap(compairison, compairison + 1);
                addAnimationFrame();
                swaped = true;
            }
        }
        if(!swaped) break;
    }
    //update();
}// bubbleSort()

function bubbleSortVisual(callback) {
    //interval = clearInterval(interval);
    statusDisplay.innerText = "Status: Sorting... (Bubble)";
    newAnimationQ();

    bubbleSort();

    playAnimationQ(callback);
}// bubbleSortVisual()

/*----- Bubble Sort End -----*/
/*----- Insertion Sort -----*/

function insertionSort() {
    var traverser;
    var subject;
    var insertIndex;

    for(traverser = 1; traverser < numbers.length; traverser++) {
        subject = numbers[traverser];
        insertIndex = traverser - 1;

        while(insertIndex >= 0 && numbers[insertIndex] > subject) {
            swap(insertIndex+1, insertIndex);
            addAnimationFrame();
            --insertIndex;
        }
        numbers[insertIndex+1] = subject;
        addAnimationFrame();
    }
    //update();
}// insertionSort()

function insertionSortVisual(callback) {
    statusDisplay.innerText = "Status: Sorting... (Insertion)";
    newAnimationQ();
    insertionSort();
    playAnimationQ(callback);
}// insertionSortVisual()

/*----- Insertion Sort End -----*/

/*----- Selection Sort -----*/

function selectionSort() {
    //statusDisplay.innerText = "Status: Sorting... (Selection)";

    let minIndex;
    for(let i = 0; i < numbers.length - 1; i++) {
        minIndex = i;
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[j] < numbers[minIndex]){
                minIndex = j;
            }
        }
        swap(i, minIndex);
        addAnimationFrame();
    }

    //statusDisplay.innerText = "Status: Idle";
    //update();
}// selectionSort()

function selectionSortVisual(callback) {
    statusDisplay.innerText = "Status: Sorting... (Selection)";
    newAnimationQ();
    selectionSort();
    playAnimationQ(callback);
}// selectionSortVisual()

/*----- Selection Sort End -----*/

/*----- Merge Sort -----*/

function mergeSort(l, r) {
    if(l < r)
    {
        var m = Math.floor(l + (r - l)/2);

        mergeSort(l, m);
        mergeSort(m+1, r);

        merge(l, m, r);
    }
}// mergeSort(l, r)

function merge(l, m, r) {

    var i = 0;
    var j = 0;
    var k = 0;
    
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = [];
    var R = [];

    for(i = 0; i < n1; i++)
        L[i] = numbers[l+i];

    for(j = 0; j < n2; j++)
        R[j] = numbers[m+1+j];

    i = 0;
    j = 0;
    k = l;
    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) {
            numbers[k] = L[i];
            i++;
        }
        else {
            numbers[k] = R[j];
            j++;
        }
        k++;
        addAnimationFrame();
    }

    while(i < n1) {
        numbers[k] = L[i];
        addAnimationFrame();
        i++;
        k++;
    }

    while(j < n2) {
        numbers[k] = R[j];
        addAnimationFrame();
        j++;
        k++;
    }
}// merge(l, m, r)

function mergeSortVisual(callback) {
    statusDisplay.innerText = "Status: Sorting... (Merge)";
    newAnimationQ();
    mergeSort(0, numbers.length-1);
    playAnimationQ(callback);
}// mergeSortVisual()

/*----- Merge Sort End -----*/
/*----- Quick Sort -----*/

function quickSortVisual(callback) {
    statusDisplay.innerText = "Status: Sorting... (Quick)";
    interval = clearInterval(interval);

    newAnimationQ();

    quickSort(0, numbers.length -1);

    playAnimationQ(callback);
    
}// startQuickSort()

function quickSort(low, high) {
    if(low < high) {
        var pivotLocation = partition(low, high);
        quickSort(low, pivotLocation - 1);
        quickSort(pivotLocation + 1, high);
    }
}// quickSort(low, high)

function partition(low, high) {
    var pivot = high;
    var leftwall = low;

    for(let i = low; i <= high - 1; i++) {
        if(numbers[i] <= numbers[pivot]) {
            swap(i, leftwall);
            addAnimationFrame();
            leftwall++;
        }
    }
    swap(pivot, leftwall);
    addAnimationFrame();

    return(leftwall);
}// partition(low, high)

/*----- Quick Sort End -----*/

// maybe do gnome sort next...

function newAnimationQ() {
    animationQueue = [];

    animationQueue[0] = [];
    for(let i = 0; i < numbers.length; i++) {
        animationQueue[0][i] = numbers[i];
    }
}// newAnimationQ()

function addAnimationFrame() {
    let next = animationQueue.length;
    animationQueue[next] = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] == undefined) {

        }
        animationQueue[next][i] = numbers[i];
    }
}// addAnimationFrame()

function playAnimationQ(callback) {
    let i = 0;
    interval = setInterval(function() {
        if(i < animationQueue.length) {
            numbers = animationQueue[i];
            update();
        }
        else {
            statusDisplay.innerText = "Status: Idle";
            //if(callback != null) callback();
            interval = clearInterval(interval);
            if(callback != null) callback();
        }
        i++
    }, delay);
}

function startSort(callback) {
    var type = document.getElementById("sortDropdown").value;
    switch(type) {
        case "bubble":
            bubbleSortVisual(callback);
            break;
        case "insertion":
            insertionSortVisual(callback);
            break;
        case "selection":
            selectionSortVisual(callback);
            break;
        case "merge":
            mergeSortVisual(callback);
            break;
        case "quick":
            quickSortVisual(callback);
            break;
        case "random":
            var rng = Math.floor(Math.random() * 5);
            switch(rng) {
                case 0:
                    bubbleSortVisual(callback);
                    break;
                case 1:
                    insertionSortVisual(callback);
                    break;
                case 2:
                    selectionSortVisual(callback);
                    break;
                case 3:
                    mergeSortVisual(callback);
                    break;
                case 4:
                    quickSortVisual(callback);
                    break;
            }
            break;
    }
}

function init() {

    arrayLength = arraySizeInput.value;
    
    c.style.width = window.innerWidth + "px";
    c.style.height = window.innerHeight + "px";

    interval = clearInterval(interval);

    statusDisplay.innerText = "Status: Idle";

    numbers = [];
    for(let i = 0; i < arrayLength; i++){
        numbers[i] = i+1;
    }

    setInterval(function() {
        c.style.width = window.innerWidth + "px";
        c.style.height = window.innerHeight + "px";
    }, 1000/24);

    update();

}

function testFunction(arr) {
    return arr;
}