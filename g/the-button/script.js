var button = document.getElementById("theButton");
var heading = document.getElementById("heading");
var counter = document.getElementById("counter");
var counterText = document.getElementById("counterText");

var num = 0;

function update() {
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
            counterText.style.animation = "show 1s ease forwards";
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
    }


    counter.innerHTML = num;
}