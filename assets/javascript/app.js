function check(){

var question1 = document.trivia.question1.value;
var question2 = document.trivia.question2.value;
var question3 = document.trivia.question3.value;
var question4 = document.trivia.question4.value;
var question5 = document.trivia.question5.value;
var correct = 0;


        if (question1 == "Daily Bugle") {
            correct++;
    }
        if (question2 == "Baxter Building") {
            correct++;
    }
        if (question3 == "Toothgrinder and Toothgnasher") {
            correct++;
    }
        if (question4 == "WWII") {
            correct++;
    }
        if (question5 == "Reed Richards") {
            correct++;
    }
        var messages = ["Great Job", "you did okay" , "you need help", "you suck!"];
        var score;
       
       var range;
       if (correct <1) {
           range = 4;
       }
       if (correct > 0 && correct < 5) {
           Score = 5;
       }
       if (correct > 4) {
           score = 0;
       }
       
       
       
       
        document.getElementById("after_submit").style.visibility = "visible";
        document.getElementById("messages")[range];
        document.getElementById("number_correct").innerHTML = "you got" + correct + "correct.";
    };



