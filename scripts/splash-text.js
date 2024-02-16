var splashText = document.getElementById("splash-text");

const splashTextOptions = [
    "The world's <i>most</i> website",
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
    "Refresh for a more creative subtitle",
    "I try",
    "Where it's at",
    "Now in technicolor!",
    "How much caffeine is too much caffeine?",
    "wake up.",
    "(not clickbait)",
    "Est. 2023",
    "Start taking notes",
    "Home of the original <i>The Kaden</i>",
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
    "Kaden: 2, Web-Blockers: 0",
    "What's up gamer?",
    "if you like PHP you're probably lying",
    "Just a week away!",
    "bogdan wus here",
    "Original concepts only",
    "Gamers only",
    "\"I'm in.\"",
    "HARDCORE!",
    "It can't smell fear (websites can't smell)",
    "Please don't hack my website",
    "Get of my lawn!",
    "Photosensitivity Warning!",
    "Version 3!"
];

splashTextOptions.push("There are " + splashTextOptions.length + " of these");

function howManySplashText() {
    var selection = splashTextOptions[splashTextOptions.length - 1];

    splashText.dataset.originalContent = selection;

    console.log(selection);
    splashText.innerHTML = selection;
}

function pickSplashText() {
    var selection = splashTextOptions[Math.floor(Math.random() * splashTextOptions.length)];

    splashText.dataset.originalContent = selection;

    splashText.innerHTML = selection;
}

var isSpinning = false;
var isToLate = false;
var isDoubleClick = false;

splashText.onclick = () => {
    if(!isSpinning) {
        isSpinning = true;
        // splashText.classList.add("splash-text-spin-class");
        elementBackspaceTextLength(splashText, 600);
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
                pickSplashText();
            }

            elementTypeTextLength(splashText, 600);
        }, 600);

        setTimeout(() => {
            // splashText.classList.remove("splash-text-spin-class");
            isSpinning = false;
        }, 600);
    }
}

splashText.ondblclick = () => {
    if(!isToLate) {
        isDoubleClick = true;
    }
}

pickSplashText();