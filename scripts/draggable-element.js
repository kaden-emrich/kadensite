// Kaden Emrich

class DraggableElement {
    static allElements = [];

    static initAll() {
        var elements = document.getElementsByClassName("draggable");
    
        for(let i = 0; i < elements.length; i++) {
            DraggableElement.allElements.push(new DraggableElement(elements[i]));
        };
    }

    constructor(elmnt) {
        this.elmnt = elmnt;
        this.pos1 = this.pos2 = this.pos3 = this.pos4 = 0;

        this.anchor = this.elmnt.querySelector(".drag-anchor");
        
        if(this.anchor) {
            this.anchor.onmousedown = () => this.dragMouseDown();
        }
        else {
            this.elmnt.onmousedown = () => this.dragMouseDown();
        }

        // console.log("draggable element setup"); // for debugging
    }

    dragMouseDown(e) {
        // console.log("mouse down element"); // for debugging
        e = e || window.event;
        e.preventDefault();

        for(let i = 0; i < DraggableElement.allElements.length; i++) {
            DraggableElement.allElements[i].elmnt.style.zIndex = "1000";
        }

        this.elmnt.style.pointerEvents = "none";

        this.elmnt.style.zIndex = 1001;

        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = () => this.closeDragElement();
        document.onmousemove = () => this.elementDrag();
    }

    elementDrag(e) {
        // console.log("dragging element"); // for debugging
        e = e || window.event;
        e.preventDefault();
    
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
    
        this.elmnt.style.top = (this.elmnt.offsetTop - this.pos2) + "px";
        this.elmnt.style.left = (this.elmnt.offsetLeft - this.pos1) + "px";
    }

    closeDragElement() {
        // console.log("closing draggable element"); // for debugging
        this.elmnt.style.pointerEvents = "all";
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

DraggableElement.initAll();