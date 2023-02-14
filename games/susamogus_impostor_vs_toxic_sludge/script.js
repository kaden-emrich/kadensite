var character = document.getElementById("character");
var block = document.getElementById("block");
var couner = 0;
var score = 0;
document.getElementById("score").innerHTML = score;
character.classList.add("animateWalk");

function jump(){
    if(character.classList == "animateJump"){return}
    character.classList.remove("animateWalk");
    character.classList.add("animateJump");
    score++;
    document.getElementById("score").innerHTML = score;
    setTimeout(function() {
        character.classList.remove("animateJump");
        character.classList.add("animateWalk");
    }, 400);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<50 && blockLeft>20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. Score: "+score);
        score = 0;
        block.style.animation = "block 1s infinite linear";
        location.reload();
    }
});