$(document).ready(function(){
    var questions = [{
        q:"What Race is Ronan the accusser?",
        o:["human", "Kree", "German", "Xandarian"],
        a:"Kree",
    },{
        q:"The Fantastic Four have their Head Quarters in what building?",
        o:["Baxter Building", "Stark Tower", "Fantastic Headquarters", "Tilted Towers"],
        a:"Baxter Building",
    },{
        q:"Ghost Rider is known as:",
        o:["The Red Skull", "The Guardian Devil", "The Spirit of Hate", "The Spirit of Vengeance"],
        a:"The Spirit of Vengeance",
    },{
        q:"Captain America was frozen in which war?",
        o:["WWI", "Cold War", "WWII", "Civil War"],
        a:"WWII",
    },{
        q:"Peter Parker works as a photographer for:",
        o:["Daily Bugle", "New York Times", "Daily Mail", "Forbes"],
        a:"Daily Bugle",

    }]

    var pick;
    var test;
    var choice;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var num = 0;
    var userSelection = [];

        questions.forEach(function(x){
        userSelection.push(null)
    });

    $("#start").on("click", function(){
        $(this).addClass("hide");
        startTime();
        displayQuestions();
    })

    $(document).on("click", ".done-btn", function(){
        clearInterval(timeRemain);
        gameOver();
    });

    $(document).on("click", ".option", function(){
        var groupIndex = $(this).attr("data-q");
        var buttonValue = $(this).text();
        $('button[data-q="'+groupIndex+'"]').removeClass("selected");
        $(this).addClass("selected");  
        userSelection.splice(groupIndex, 1, buttonValue);
        console.log(userSelection);
    });

    function startTime(){
        var time = 20;
        $("#timer-wrap").removeClass("hide");
        timeRemain = setInterval(function(){
            $("#timer").text("");
            time--;
            $("#timer").text(time);
            
            if(time === 0){
                clearInterval(timeRemain);
                gameOver();
            }
        },1000);

    }

    function displayQuestions(){
        $("#game-wrap").removeClass("hide");
        var doneBtn = $("<button>").addClass("done-btn").text("Done");

        for(var i = 0; i < questions.length; i++){
            var current = questions[i];
            var questionWrap = $("<div>").addClass("q-wrap");
            var questionTitle = $("<h3>").text(current.q);
            var buttonWrap = $("<div>").addClass("b-wrap");
            for(var j = 0; j < current.o.length; j++){
                var currentOpt = current.o[j];
                var button = $("<button>");
                button.addClass("option btn btn-primary");
                button.attr("data-index", j);
                button.attr("data-q", i);
                button.text(currentOpt);
                $(buttonWrap).append(button);
            }
            $(questionWrap).append(questionTitle, buttonWrap);
            $("#game-questions").append(questionWrap, doneBtn);
        }
    }

    function gameOver(){
        $("#game-questions").empty();
        evaluateResults();
        displayResults();
    }

    function evaluateResults(){
        
        for(var i = 0; i < questions.length; i++){
            if(userSelection[i] === null){
                unanswered++;
                incorrect++;
            }
            else if(userSelection[i] === questions[i].a) {
                correct++
            }
            else {
                incorrect++
            }
        }
    }

    function displayResults(){

        var resultsData = $("<div>");
        var correctWrap = $("<p>").text("Correctly answered:" + correct);
        var incorrectWrap = $("<p>").text("Incorrectly answered:" + incorrect);
        var unansweredWrap = $("<p>").text("Unanswered:" + unanswered);

        $(resultsData).append(correctWrap, incorrectWrap, unansweredWrap);
        $("#results-wrap").append(resultsData);
    }

});