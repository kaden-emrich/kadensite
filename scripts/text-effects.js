const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*?<>[]{}-_+=~";

function elementTextScramble(element, ms = 500, itterations = 3) {
    var content = element.innerText;
    if(!element.dataset.originalContent) {
        element.dataset.originalContent = content;
    }
    else {
        content = element.dataset.originalContent;
    }

    var continueAniamtion = true;

    element.onmouseenter = () => {
        continueAniamtion = false;
        element.innerText = content;
    }
    // console.log(content); // for debugging

    for(let i = 0; i <= content.length; i++) {
        for(let j = 0; j <= itterations; j++) {
            setTimeout(() => {
                if(continueAniamtion == true) {
                    if(element.innerText.length < content.length) {
                        element.innerText = scramble(content.substring(0, i + 1), i-1);
                    }
                    else {
                        element.innerText = scramble(content, i-1);
                    }
                    // console.log(i + ", " + j + ": " + (ms / (itterations * content.length) * ((i * itterations) + j))); // for debugging
                }
                // else {
                //     element.innerText = content;
                // }
            }, Math.floor(ms / (itterations * content.length) * ((i * itterations) + j)));
        }
    }
}

function elementHoverTextScramble(element, ms = 500, itterations = 3) {
    var content = element.innerText;
    if(!element.dataset.originalContent) {
        element.dataset.originalContent = content;
    }
    else {
        content = element.dataset.originalContent;
    }

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
                    if(element.innerText.length < content.length) {
                        element.innerText = scramble(content.substring(0, element.innerText.length + 1), i-1);
                    }
                    else {
                        element.innerText = scramble(content, i-1);
                    }
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
    if(!element.dataset.originalContent) {
        element.dataset.originalContent = content;
    }
    else {
        content = element.dataset.originalContent;
    }
    
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
                    if(element.innerText.length < content.length) {
                        element.innerText = scramble(content.substring(0, element.innerText.length + 1), i-1);
                    }
                    else {
                        element.innerText = scramble(content, i-1);
                    }
                    // console.log(i + ", " + j + ": " + (ms / (itterations * content.length) * ((i * itterations) + j))); // for debugging
                }
                // else {
                //     element.innerText = content;
                // }
            }, Math.floor(ms / (itterations * content.length) * ((i * itterations) + j)));
        }
    }
}

function elementTypeText(element, ms = 60) {
    var content = element.innerText;
    if(!element.dataset.originalContent) {
        element.dataset.originalContent = content;
    }
    else {
        content = element.dataset.originalContent;
    }

    element.innerText = "";

    for(let i = 0; i < content.length; i++) {
        setTimeout(() => {
            if(i == content.length - 1) {
                element.innerText = content;
            }
            else {
                element.innerText = content.substring(0, i) + "_";
            }
        }, Math.floor(i * (ms)));
    }
}

function elementTypeTextLength(element, ms = 600) {
    var content = element.innerText;
    if(!element.dataset.originalContent) {
        element.dataset.originalContent = content;
    }
    else {
        content = element.dataset.originalContent;
    }

    element.innerText = "";

    for(let i = 0; i < content.length; i++) {
        setTimeout(() => {
            if(i == content.length - 1) {
                element.innerText = content;
            }
            else {
                element.innerText = content.substring(0, i) + "_";
            }
        }, Math.floor(i * (ms / content.length)));
    }
}

function elementBackspaceText(element, ms = 30) {
    var content = element.innerText;
    if(!element.dataset.originalContent) {
        element.dataset.originalContent = content;
    }
    else {
        // content = element.dataset.originalContent;
    }

    // element.innerText = "";

    for(let i = content.length - 1; i >= 0; i--) {
        setTimeout(() => {
            if(i == 0) {
                element.innerText = "";
            }
            else {
                element.innerText = content.substring(0, i) + "<";
            }
        }, Math.floor((content.length - i) * (ms)));
    }
}

function elementBackspaceTextLength(element, ms = 600) {
    var content = element.innerText;
    if(!element.dataset.originalContent) {
        element.dataset.originalContent = content;
    }
    else {
        // content = element.dataset.originalContent;
    }

    // element.innerText = "";

    for(let i = content.length - 1; i >= 0; i--) {
        setTimeout(() => {
            if(i == 0) {
                element.innerText = " ";
            }
            else {
                element.innerText = content.substring(0, i) + "<";
            }
        }, Math.floor((content.length - i) * (ms / content.length)));
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
