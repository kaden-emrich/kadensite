var r = document.querySelector(":root");

var navWrapper = document.getElementById("nav-area-wrapper");
var navOpener = document.getElementById("nav-opener");
var navOptions = document.querySelectorAll("#nav-options ul a li");

var timeTravelSymbol = document.getElementById("time-travel-symbol");

var navWidth = 300;
var navOpenerWidth = 30;

var navOpen = false;
var navClicked = false;

r.style.setProperty("--nav-width", navWidth + "px");
r.style.setProperty("--nav-opener-width", navOpenerWidth + "px");

function openNav() {
    console.log("open nav");
    navWrapper.style.width = navWidth + "px";

    navOptions.forEach(element => {
        element.style.fontSize = "40px";
        
        if(!navOpen) {
            element.innerText = "";
            setTimeout(() => {
                elementTypeText(element);
            }, 100);
        }
        // element.style.height = "50px";
    });

    setTimeout(timeTravelSymbol.classList.remove("tt-symbol-hide"), 1000);

    // navOptions.style.fontSize = "40px";
    navOpen = true;
}

function closeNav() {
    navOptions.forEach(element => {
        elementBackspaceText(element, 200 );
        // element.style.fontSize = "0px";
        // element.style.height = "0px";
    });

    setTimeout(() => navWrapper.style.width = "0px", 150)

    timeTravelSymbol.classList.add("tt-symbol-hide");

    navOpen = false;
}

function toggleNav() {
    if(navOpen) {
        closeNav();
    }
    else {
        openNav();
    }
}

navOpener.addEventListener('mouseover', () => {
    if(!navClicked) {
        openNav();
    }
});

navOpener.addEventListener('click', () => {
    navClicked = true;
    toggleNav();
});

navOpener.addEventListener('mouseleave', () => {
    navClicked = false;
});

navWrapper.addEventListener('mouseleave', () => {
    closeNav();
});

closeNav();