var menu;

var docRoot;

var menuOpen;

function toggleMenu() {

    if(menuOpen) {
        menuOpen = false;
        docRoot.style.setProperty('--nav-options-offset', (0 - document.getElementById('navbar-options').offsetHeight) + 'px');
        menu.className = "navbar nav-animator-collapse";
    }
    else {
        menuOpen = true;
        docRoot.style.setProperty('--nav-options-offset', (0 - document.getElementById('navbar-options').offsetHeight) + 'px');
        menu.className = "navbar nav-animator-expand";
    }


}// toggleMenu()

function initHamburgerMenu() {

    menu = document.getElementById("navbar");

    docRoot = document.querySelector(':root');
    docRoot.style.setProperty('--nav-options-offset', (0 - document.getElementById('navbar-options').offsetHeight) + 'px');

    menuOpen = false;

}// initHamburgerMenu()

initHamburgerMenu();