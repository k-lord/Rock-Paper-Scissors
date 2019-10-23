$( document ).ready(function() {
    console.log( "ready!" );

    var options = ["r","p","s"]
    var playerOneWins = 0;
    var playerOneLosses = 0;
    var playerTwoWins = 0;
    var playerTwoLosses = 0;
    var ties = 0;

    //on-click event on submit button for user to enter a username in the form
    $("#userNameSubmit").on("click", function(event) {
        event.preventDefault();
        var userName = $("#inlineFormInputGroupUsername2").val().trim();
        console.log("username selected is: " + userName);
        $("#usernameOne").text(userName);
        $("#inlineFormInputGroupUsername2").val("Username");
        $("#instructions").text("Type R, P, or S to start playing.")
        $(".form-inline").hide();
        $(".resultsTally").css("display","block");
        $("#secondRow").css("margin-top","0.5em");
        rpsGame();

    });

    //function for the game logic when the user presses a button on the keyboard of either r,p, or s
    function rpsGame() {
        document.onkeyup = function () {
        var playerOne = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("playerOne played: " + playerOne);

        //function for computer to randomly choose either r,p, or s from the pre-defined options array
        var computerGuess = options[Math.floor(Math.random()*options.length)];
        console.log("playerTwo played: " + computerGuess);

        //function to reset the game images to a default gif file and to clear the results and letterplayed divs
        function resetImage () {
            $("#results").empty();
            $("#letterPlayedOne").empty();
            $("#letterPlayedTwo").empty();
            $(".image").attr("src","assets/images/giphyrps.gif");
        }

        //game logic
        if (playerOne === "r" || playerOne === "p" || playerOne === "s"){

            //if user ties with computer --------------------------------------------------------------
            if(playerOne === computerGuess) {
                ties++;
                $("#instructions").text("Type R, P, or S to continue playing.");
                $(".ties").text(ties);
                $("#results").text("YOU TIED!");
            }
            
            //if user presses r -----------------------------------------------------------------------
            if((playerOne === "r") && (computerGuess === "r")){
                clearTimeout();
                $("#letterPlayedOne").text("ROCK");
                $("#imageOne").attr("src","assets/images/rock2.png");
                $("#letterPlayedTwo").text("ROCK");
                $("#imageTwo").attr("src","assets/images/rock2.png");
                setTimeout(resetImage, 10000);
            }
            if((playerOne =="r") && (computerGuess=="s")){
                playerOneWins++;
                playerTwoLosses++;
                clearTimeout();
                $("#instructions").text("Type R, P, or S to continue playing.");
                $("#playerOneWins").text(playerOneWins);
                $("#playerTwoLosses").text(playerTwoLosses);
                $("#results").text("YOU WON!");
                $("#letterPlayedOne").text("ROCK");
                $("#imageOne").attr("src","assets/images/rock2.png");
                $("#letterPlayedTwo").text("SCISSORS");
                $("#imageTwo").attr("src","assets/images/scissor2.jpg");
                setTimeout(resetImage, 10000);
            }
            if((playerOne =="r") && (computerGuess=="p")){
                playerOneLosses++;
                playerTwoWins++;
                clearTimeout();
                $("#instructions").text("Type R, P, or S to continue playing.");
                $("#playerOneLosses").text(playerOneLosses);
                $("#playerTwoWins").text(playerTwoWins);
                $("#results").text("YOU LOST!");
                $("#letterPlayedOne").text("ROCK");
                $("#imageOne").attr("src","assets/images/rock2.png");
                $("#letterPlayedTwo").text("PAPER");
                $("#imageTwo").attr("src","assets/images/paper2.jpg");
                setTimeout(resetImage, 10000);
            }
            //if user presses s -----------------------------------------------------------------------
            if((playerOne === "s") && (computerGuess === "s")){
                clearTimeout();
                $("#letterPlayedOne").text("SCISSORS");
                $("#imageOne").attr("src","assets/images/scissor2.jpg");
                $("#letterPlayedTwo").text("SCISSORS");
                $("#imageTwo").attr("src","assets/images/scissor2.jpg");
                setTimeout(resetImage, 10000);
            }
            if((playerOne =="s") && (computerGuess=="p")){
                playerOneWins++;
                playerTwoLosses++;
                clearTimeout();
                $("#instructions").text("Type R, P, or S to continue playing.");
                $("#playerOneWins").text(playerOneWins);
                $("#playerTwoLosses").text(playerTwoLosses);
                $("#results").text("YOU WON!");
                $("#letterPlayedOne").text("SCISSORS");
                $("#imageOne").attr("src","assets/images/scissor2.jpg");
                $("#letterPlayedTwo").text("PAPER");
                $("#imageTwo").attr("src","assets/images/paper2.jpg");
                setTimeout(resetImage, 10000);
            }
            if((playerOne =="s") && (computerGuess=="r")){
                playerOneLosses++;
                playerTwoWins++;
                clearTimeout();
                $("#instructions").text("Type R, P, or S to continue playing.");
                $("#playerOneLosses").text(playerOneLosses);
                $("#playerTwoWins").text(playerTwoWins);
                $("#results").text("YOU LOST!");
                $("#letterPlayedOne").text("SCISSORS");
                $("#imageOne").attr("src","assets/images/scissor2.jpg");
                $("#letterPlayedTwo").text("ROCK");
                $("#imageTwo").attr("src","assets/images/rock2.png");
                setTimeout(resetImage, 10000);
            }
            //if user presses p -----------------------------------------------------------------------
            if((playerOne === "p") && (computerGuess === "p")){
                clearTimeout();
                $("#letterPlayedOne").text("PAPER");
                $("#imageOne").attr("src","assets/images/paper2.jpg");
                $("#letterPlayedTwo").text("PAPER");
                $("#imageTwo").attr("src","assets/images/paper2.jpg");
                setTimeout(resetImage, 10000);
            }
            if((playerOne =="p") && (computerGuess=="r")){
                playerOneWins++;
                playerTwoLosses++;
                clearTimeout();
                $("#instructions").text("Type R, P, or S to continue playing.");
                $("#playerOneWins").text(playerOneWins);
                $("#playerTwoLosses").text(playerTwoLosses);
                $("#results").text("YOU WON!");
                $("#letterPlayedOne").text("PAPER");
                $("#imageOne").attr("src","assets/images/paper2.jpg");
                $("#letterPlayedTwo").text("ROCK");
                $("#imageTwo").attr("src","assets/images/rock2.png");
                setTimeout(resetImage, 10000);
            }
            if((playerOne =="p") && (computerGuess=="s")){
                playerOneLosses++;
                playerTwoWins++;
                clearTimeout();
                $("#instructions").text("Type R, P, or S to continue playing.");
                $("#playerOneLosses").text(playerOneLosses);
                $("#playerTwoWins").text(playerTwoWins);
                $("#results").text("YOU LOST!");
                $("#letterPlayedOne").text("PAPER");
                $("#imageOne").attr("src","assets/images/paper2.jpg");
                $("#letterPlayedTwo").text("SCISSORS");
                $("#imageTwo").attr("src","assets/images/scissor2.jpg");
                setTimeout(resetImage, 10000);
            }
        //ignore if user hits the enter button to fix bug if user hits enter instead of clicks submit button in initial start of game
        } else if ((event.keyCode == 13)) {
            $("#instructions").text("Type R, P, or S to start playing.");

        //message shown if user hits any other button besides r,p,s, or enter
        } else {
            $("#instructions").text("That's not a move... Type R, P, or S.");
            resetImage();
        }
    }
}

});
