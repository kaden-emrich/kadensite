var outputArea = document.getElementById("output");
var inputArea = document.getElementById("inputBox");

var inputValue;

inputArea.focus();

function command(cmd) {
    switch(cmd) {
        case 'help':
            print("Help command used...");
            break;
        case 'back':
            print("");
            newTab("../index.html");
            break;
    }
}

function print(output) {
    outputArea.innerHTML += "<br>" + output;
}

function typeIt(from, e) {
    var kc = e.keyCode;
    //textArea.value = e.keyCode;
    if(kc == 13) {
        console.log(inputValue);
        command(inputValue);
        inputArea.value = "";
    } else {
        inputValue = inputArea.value;
    }
}

function newTab(link) {
    setTimeout(function() {
      window.open(link, "_self");
    }, 500);
  }
  