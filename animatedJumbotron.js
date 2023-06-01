var jumbotron = document.getElementsByClassName("jumbotron")[0];
var frame = document.getElementsByClassName("jumbotronIFrame")[0];

setInterval(() => {
    frame.width = jumbotron.offsetWidth + "px";
    frame.height = jumbotron.offsetHeight + "px";
}, 50/3);