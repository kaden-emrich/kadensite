var jumbotron = document.getElementsByClassName("jumbotron")[0];
var frame = document.getElementById("jumbotronIFrame");

var currentDate = new Date();

if(currentDate.getMonth() == 5) {
    frame.setAttribute('src', '../../../e/rainbowAnimation/index.html'); // pride month
}