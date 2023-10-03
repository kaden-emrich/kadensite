var box = document.getElementById("dynamic-box");

var dynamicContent = document.getElementsByClassName("dynamic-content");

//var otherPage = window.open("docs/sorting-algorithm-visualizer.html");

function updateBox(file) {

    // remove other elements
    while(box.firstChild) {
        box.removeChild(box.firstChild);
    }

    box.replaceWith(dynamicContent[0].import.getElementById('dynamic-box'));

}// updateBox(file)

function supportsImports() {
    return 'import' in document.createElement('link');
}

//updateBox();