var splashText = document.getElementById("splash-text");

const splashTextOptions = [
    "The world's most website",
    "One of the websites of all time",
    "\"Its the best\" -Kaden Emrich",
    "By: Kaden Emrich",
    "Always be flexin'",
    "[insert-funny-subtitle-here]",
    "A website",
    "BUBBLES!!!",
    "Better than Google!",
    "No login required",
    "We have game(s)!",
    "kaden wuz heree",
    "3p1c l33t w3bs1t3",
    "There are no secrets here",
    "NO SOLICITING",
    "We like to have fun around here",
    "There are probably speling errors",
    "Free as a bird",
    "help.",
    "click",
    "Also try Minecraft!",
    "Procrastinating everything since 2006",
    "my dad thinks my website is cool",
    "my mom thinks my website is cool",
    "I've been expecting you",
    "there is no escape",
    "No viruses I promise",
    "Monospace is the best font",
    "click here for a more creative subtitle",
    "I try",
    "Where it's at",
    "Now in technicolor!",
    "How much caffeine is too much caffeine?",
    "wake up.",
    "(not clickbait)",
    "Est. 2023",
    "Start taking notes",
    "Home of the original The Kaden",
    "Get off your phone and go outside",
    "Take it back now yall",
    "GET BACK TO WORK",
    "Beep Beep Boop",
    "OUTATIME",
    "Let's get down to business",
    "Live, Laugh, Leave",
    "Never gonna give you up...",
    "You shall not pass",
    "kadenemrich.com",
    "Where dreams come true",
    "= 42",
    "Welcome to Paradise",
    "Welcome to the machine",
    'Play THE FINALS',
    "Its Gaming Time!",
    "Comes another...",
    "Gordan Freeman, in the flesh.",
    "The cake is a lie!",
    "All hail lord Gaben",
    "me when... when you... when the... um",
    "[bluescreen]",
    "Smash that like button!",
    "Do you ever feel like a plastic bag?",
    "Go read a book",
    "Kick rocks!",
    "Somebody once told me the world was macaroni",
    "Overwatch says stop kicking it.",
    "Kaden: 2, Web-Blockers: 1",
    "What's up gamer?",
    "if you like PHP you're probably lying",
    "Just a week away!",
    "bogdan wus here",
    "logan wus here",
    "Original concepts only",
    "Gamers only",
    "\"I'm in.\"",
    "HARDCORE!",
    "It can't smell fear (websites can't smell)",
    "Please don't hack my website",
    "Get off my lawn!",
    "Photosensitivity Warning!",
    "Version 3!",
    "Click the clock to time travel!",
    "Time travel is AWESOME",
    "Chromatic Aberration looks cool",
    "Retro look, same great website",
    "Totaly Tubular!",
    "RETRO!",
    "↑ ↑ ↓ ↓ ← → ← → B A",
    "I am Error",
    "You're my only hope",
    "I'm a website, not a miracle worker",
    "WinRAR is free, isn't it?",
    "I'm not a robot",
    "A world of pure imagination",
    "work it harder, make it better",
    "hello neo",
    ":)",
    "the end is near",
    "Uh, let me be clear",
    "Sponsored by Kaden"
];

splashTextOptions.push("There are " + splashTextOptions.length + " of these");

var lastSplashText = -1;

function howManySplashText() {
    var selection = splashTextOptions[splashTextOptions.length - 1];

    splashText.dataset.originalContent = selection;

    // console.log(selection); // for debugging
    splashText.innerHTML = selection;

    lastSplashText = -1;
}

function setSplashText(value) {
    splashText.dataset.originalContent = value;

    splashText.innerHTML = value;
    lastSplashText = value;
}

function randomSplashText() {
    var index = Math.floor(Math.random() * splashTextOptions.length);
    while(index == lastSplashText) {
        index = Math.floor(Math.random() * splashTextOptions.length);
    }
    var selection = splashTextOptions[index];

    lastSplashText = index;

   setSplashText(selection);
}

function pickSplashText() {
    if(new Date().getMonth() == 2 && new Date().getDate() == 5) {
        setSplashText("Happy Birthday Kaden!");
    }
    else if(new Date().getMonth() == 2 && new Date().getDate() == 9) {
        setSplashText("Happy Anniversary to This Site!"); // first deployment was on March 9th, 2023
    }
    else if(new Date().getMonth() == 4 && new Date().getDate() == 5) {
        setSplashText("May the 4th be with you");
    }
    else if(new Date().getMonth() == 11 && new Date().getDate() == 25) {
        setSplashText("is crismas!");
    }
    else if(new Date().getMonth() == 0 && new Date().getDate() == 1) {
        setSplashText("Happy new year!");
    }
    else {
        randomSplashText();
    }
}

var isAnimating = false;
var isToLate = false;
var isDoubleClick = false;

splashText.onclick = () => {
    if(!isAnimating) {
        isAnimating = true;
        // splashText.classList.add("splash-text-spin-class");
        isToLate = false;

        setTimeout(() => {
            if(isDoubleClick) {
                isDoubleClick = false;
                isToLate = true;
                howManySplashText();
            }
            else {
                isDoubleClick = false;
                isToLate = true;
                randomSplashText();
            }

            elementTypeText(splashText, 30);
        }, 30 * splashText.innerText.length);

        elementBackspaceText(splashText, 30);

        setTimeout(() => {
            // splashText.classList.remove("splash-text-spin-class");
            isAnimating = false;
        }, 30 * splashText.innerText.length);
    }
}

splashText.ondblclick = () => {
    if(!isToLate) {
        isDoubleClick = true;
    }
}

pickSplashText();

const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var codeIndex = 0;
var lastKey = "";
document.addEventListener("keyup", (event) => {

    if(event.key == konamiCode[codeIndex]) {
        codeIndex++;

        if(codeIndex == konamiCode.length) {
            codeIndex = 0;
            window.scroll({ top: 0, left: 0, behavior: 'auto' });
            if(!isAnimating) {
                isAnimating = true;
                // splashText.classList.add("splash-text-spin-class");
                isToLate = true;
        
                setTimeout(() => {
                    isDoubleClick = false;
                    isToLate = true;
                    setSplashText("Achievement unlocked: Konami Code!");
    
                    elementTypeText(splashText, 30);
                }, 30 * splashText.innerText.length);
        
                elementBackspaceText(splashText, 30);
        
                setTimeout(() => {
                    // splashText.classList.remove("splash-text-spin-class");
                    isAnimating = false;
                }, 30 * splashText.innerText.length);
            }
        }
    }
    else {
        codeIndex = 0;

        if(lastKey == konamiCode[0] && event.key == konamiCode[1]) {
            codeIndex = 2;
        }
    }

    // console.log(`${key} (${codeIndex})`); // for debugging
    lastKey = event.key;
});