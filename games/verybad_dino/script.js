var character = document.getElementById("character");
var block = document.getElementById("block");

//i added this myself
addEventListener('keypress', logKey);

function logKey(space) {
    jump();
}
//end of thing that i added myself

function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function() {
    //without parseInt here it would return the value with "px" attached to the end
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.");
    }
},10);