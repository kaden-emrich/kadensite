var navWrapper = document.getElementById("nav-area-wrapper");
var navOpener = document.getElementById("nav-opener");

var navWidth = 300;
var navOpenerWidth = 20;

function openNav() {
    console.log("open nav");
    navWrapper.style.left = "0px";
}

function closeNav() {
    navWrapper.style.left = "-" + navWidth + "px";
}

navOpener.addEventListener('mouseover', () => {
    openNav();
});

navOpener.addEventListener('click', () => {
    openNav();
});

navWrapper.addEventListener('mouseleave', () => {
    closeNav();
});

