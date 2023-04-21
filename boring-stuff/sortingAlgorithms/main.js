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
var animationQueue = [];

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
    statusDisplay.innerText = "Status: Sorting... (Bubble)";

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
    statusDisplay.innerText = "Status: Sorting... (Bubble)";

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
                swap(insertIndex, insertIndex + 1);
                --insertIndex;
                update();
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
    }, delay);
}

/*----- Insertion Sort End -----*/

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

/*----- Merge Sort -----*/


// instant
function mergeSortInstant(l, r) {
    if(l < r)
    {
        var m = Math.floor(l + (r - l)/2);

        mergeSortInstant(l, m);
        mergeSortInstant(m+1, r);

        mergeInstant(l, m, r);
    }
    update();

    //return arr;
}// mergeSortInstant(l, r)

function mergeInstant(l, m, r) {

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
    }

    while(i < n1) {
        numbers[k] = L[i];
        i++;
        k++;
    }

    while(j < n2) {
        numbers[k] = R[j];
        j++;
        k++;
    }

    //return arr;
}// mergeInstant(l, m, r)
// instant end

// visual
function mergeSortVisual() {
    statusDisplay.innerText = "Status: Sorting... (Merge)";
    interval = clearInterval(interval);
    animationQueue = [];

    animationQueue[0] = [];
    for(let i = 0; i < numbers.length; i++) {
        animationQueue[0][i] = numbers[i];
    }

    mergeSortSplitVisual(0, numbers.length -1);

    

    let i = 0;
    interval = setInterval(function() {
        if(i < animationQueue.length) {
            numbers = animationQueue[i];
            update();
        }
        else {
            interval = clearInterval(interval);
            statusDisplay.innerText = "Status: Idle";
        }
        i++
    }, delay);
}// mergeSortVisual()

function mergeSortSplitVisual(l, r) {
    if(l < r)
    {
        var m = Math.floor(l + (r - l)/2);

        mergeSortSplitVisual(l, m);
        mergeSortSplitVisual(m+1, r);

        mergeVisual(l, m, r);
    }

    //return arr;
}// mergeSortSplitVisual(l, r)

function mergeVisual(l, m, r) {

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
            addAnimationFrame();
        }
        else {
            numbers[k] = R[j];
            j++;
            addAnimationFrame();
        }
        k++;
    }

    while(i < n1) {
        numbers[k] = L[i];
        i++;
        k++;
        addAnimationFrame();
    }

    while(j < n2) {
        numbers[k] = R[j];
        j++;
        k++;
        addAnimationFrame();
    }

    //return arr;
}// mergeVisual(l, m, r)
// visual end


/*----- Merge Sort End -----*/
/*----- Quick Sort -----*/

function startQuickSort() {
    statusDisplay.innerText = "Status: Sorting... (Quick)";
    interval = clearInterval(interval);

    newAnimationQ();

    quickSort(0, numbers.length -1);

    playAnimationQ();
    
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

function playAnimationQ() {
    let i = 0;
    interval = setInterval(function() {
        if(i < animationQueue.length) {
            numbers = animationQueue[i];
            update();
        }
        else {
            interval = clearInterval(interval);
            statusDisplay.innerText = "Status: Idle";
        }
        i++
    }, delay);
}

function startSort() {
    var type = document.getElementById("sortDropdown").value;
    switch(type) {
        case "bubble":
            bubbleSortVisual();
            break;
        case "insertion":
            insertionSortVisual();
            break;
        case "selection":
            selectionSortVisual();
            break;
        case "merge":
            mergeSortVisual();
            break;
        case "quick":
            startQuickSort();
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