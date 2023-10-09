var menu = document.getElementById("navbar-options");

var menuOpen = false;
var resetTimeout = null;

function toggleMenu() {

    if(menuOpen) {
        menuOpen = false;
        menu.className = "nav-animator-collapse";
    }
    else {
        clearTimeout(resetTimeout);

        menuOpen = true;
        menu.className = "nav-animator-expand";
    }


}// toggleMenu()