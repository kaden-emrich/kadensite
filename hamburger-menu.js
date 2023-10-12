var menu = document.getElementById("navbar");

var docRoot = document.querySelector(':root');
docRoot.style.setProperty('--nav-options-offset', (0 - document.getElementById('navbar-options').offsetHeight) + 'px');

var menuOpen = false;

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