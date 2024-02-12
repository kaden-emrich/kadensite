const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*?<>[]{}-_+=~";

function elementHoverTextScramble(element, ms = 500, itterations = 3) {
    var content = element.innerText;
    var continueAniamtion = true;

    element.onmouseleave = () => {
        continueAniamtion = false;
        element.innerText = content;
    }
    // console.log(content); // for debugging

    for(let i = 0; i <= content.length; i++) {
        for(let j = 0; j <= itterations; j++) {
            setTimeout(() => {
                if(continueAniamtion == true) {
                    element.innerText = scramble(content, i-1);
                    // console.log(i + ", " + j + ": " + (ms / (itterations * content.length) * ((i * itterations) + j))); // for debugging
                }
                // else {
                //     element.innerText = content;
                // }
            }, Math.floor(ms / (itterations * content.length) * ((i * itterations) + j)));
        }
    }
}

function elementClickTextScramble(element, ms = 600, itterations = 3) {
    var content = element.innerText;
    var continueAniamtion = true;

    element.onclick = () => {
        continueAniamtion = false;
        element.innerText = content;
        elementClickTextScramble(element, ms, itterations);
    }
    // console.log(content); // for debugging

    for(let i = 0; i <= content.length; i++) {
        for(let j = 0; j <= itterations; j++) {
            setTimeout(() => {
                if(continueAniamtion == true) {
                    element.innerText = scramble(content, i-1);
                    // console.log(i + ", " + j + ": " + (ms / (itterations * content.length) * ((i * itterations) + j))); // for debugging
                }
                // else {
                //     element.innerText = content;
                // }
            }, Math.floor(ms / (itterations * content.length) * ((i * itterations) + j)));
        }
    }
}

function randomChar() {
    var rng = Math.floor(Math.random() * CHARS.length);
    return CHARS.substring(rng, rng+1);
}

function scramble(text, index = -1) {
    var outputText = "";
    for(let i = 0; i < text.length; i++) {
        if(i <= index) {
            outputText += text.substring(i, i+1);
        }
        if(i > index) {
            outputText += randomChar();
        }
    }

    return outputText;
}
