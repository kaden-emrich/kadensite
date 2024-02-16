const gamesArea = document.getElementById("games-area");
const trackContainer = document.getElementById("games-track-container")
const displayTrack = document.getElementById("display-track");

var maxPercent = 100;
var minPercent = 0;

gamesArea.onmousedown = e => {
    displayTrack.dataset.mouseDownAt = e.clientX;
    // console.log("mouse down");
}

gamesArea.onmouseup = e => {
    displayTrack.dataset.mouseDownAt = 0;
    displayTrack.dataset.prevPercentage = displayTrack.dataset.percentage;
}

gamesArea.onmousemove = e => {
    if(displayTrack.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(displayTrack.dataset.mouseDownAt) - e.clientX,
        maxDelta = displayTrack.clientWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(displayTrack.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, -minPercent), -maxPercent);

    // console.log(nextPercentage);

    displayTrack.dataset.percentage = nextPercentage;

    // console.log(`mouse move ${percentage}% > ${mouseDelta} / ${maxDelta}`);

    displayTrack.style.transform = `translate(${nextPercentage}%, 0%)`;
}

function initTrack() {
    var numImg = displayTrack.querySelectorAll("img").length;
    var startPercent = 50 / numImg;
    
    minPercent = startPercent;
    maxPercent = 100 - startPercent;
    displayTrack.style.transform = `translate(${-startPercent}%, 0%)`;
}

initTrack();