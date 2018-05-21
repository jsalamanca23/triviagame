$(document).ready(function(){
    $("#start").on("click", function(){
        $("#start").addClass("hide");
        startTimer();
    });

// timer function     
    function startTimer(){
        var remainingTime = 10;
        $("#timer-container").removeClass("hide");
        timer = setInterval(function(){
            $("#timer").text("");
            remainingTime--;
            $("#timer").text(remainingTime);
            if(remainingTime === 0){
                clearInterval(timer);
                // gameOver();
            }

        },1000);
    }
});