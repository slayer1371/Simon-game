var buttonColours=["red", "blue", "green", "yellow"]; 

var gamePattern=[];

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*3);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var b="#"+randomChosenColour;
    $(b).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var aud=new Audio(randomChosenColour+'.mp3');
    aud.autoplay;
    // aud.play();
}

nextSequence();