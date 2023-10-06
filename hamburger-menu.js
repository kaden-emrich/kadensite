var menu = document.getElementById("navbar-options");

var menuOpen = false;

function toggleMenu() {

    if(menuOpen) {
        menuOpen = false;
        menu.style.animation = "navbar-expand 1s ease reverse";
        
        setTimeout(() => { menu.style.animation = ''; menu.style.height = '' }, 1000);
    }
    else {
        menuOpen = true;
        menu.style.animation = "navbar-expand 1s ease forwards";
        
        setTimeout(() => { menu.style.animation = ''; menu.style.height = '199px' }, 1000);
    }


}// toggleMenu()