
class PopWindow {
    static allWindows = [];

    static initAll() {
        var windows = document.getElementsByClassName("pop-window");

        for(let i = 0; i < windows.length; i++) {
            PopWindow.allWindows.push(new PopWindow(windows[i]));
        }
    }

    constructor(elmnt) {
        this.elmnt = elmnt;
        this.closeButton = this.elmnt.querySelector(".pop-close");

        this.closeButton.onclick = () => this.close();
    }

    close() {
        this.elmnt.style.display = "none";
    }

    open() {
        this.elmnt.style.display = "block";
    }
}

PopWindow.initAll();