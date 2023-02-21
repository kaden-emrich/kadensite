var textArea = document.getElementById("texter");

var inputValue;

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
    textArea.value = output;
}

function typeIt(from, e) {
    var kc = e.keyCode;
    //textArea.value = e.keyCode;
    if(kc == 13) {
        console.log(inputValue);
        command(inputValue);
    } else {
        inputValue = textArea.value;
    }
}

function newTab(link) {
    setTimeout(function() {
      window.open(link, "_self");
    }, 500);
  }
  