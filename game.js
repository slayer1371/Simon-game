var userClickedPattern=[];

var buttonColours=["red", "blue", "green", "yellow"]; 
 
var gamePattern=[];

var level=0;

var started=false;

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");

    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPatter);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function startOver(){
    level=0;
    started=false;
    gamePattern=[];
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function() {
            nextSequence();
          }, 1000);
    }}
    else{
        playSound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);    
        startOver();
    }
}

function nextSequence(){
    userClickedPattern=[];

    level++;
    $("#level-title").text("Level "+level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    var b="#"+randomChosenColour;
    $(b).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
    //aud.autoplay;
}

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
      }, 100);

}

function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
}