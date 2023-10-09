const splashTextOptions = [
    "The world's <i>most</i> website",
    "One of Kaden's websites of all time",
    "\"Its the best\" -Kaden Emrich",
    "By: Kaden Emrich",
    "Always be flexin'",
    "[insert-content-here]",
    "A website",
    "BUBBLES!!!",
    "Better than Google!",
    "No login required",
    "We have game(s)!",
    "kaden wuz heree",
    "3p1c l33t w3bs1t3",
    "It's hiding <a href=\"../secret\">something</a>",
    "NO SOLICITING",
    "We like to have fun around here",
    "There may be speling errors",
    "Live from New York",
    "help.",
    "please don't play <a href=\"https://clicker-clicker.kadenemrich.com\">clicker-clicker</a>",
    "No, I am your father!",
    "Procrastinating everything since 2006",
    "Where do you think you're going?",
    "I've been expecting you",
    "there is no escape",
    "No viruses I promise",
    "When you try your best but you don't succeed",
    "Monospace is the best font",
    "Refresh for a more creative subtitle",
    "I try"
];

function pickSplashText() {
    var selection = splashTextOptions[Math.floor(Math.random() * splashTextOptions.length)];

    document.getElementById("splash-text").innerHTML = selection;
}

pickSplashText();