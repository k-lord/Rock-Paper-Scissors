$( document ).ready(function() {
    console.log( "ready!" );


var options = ["r","p","s"]
var playerOneWins = 0;
var playerOneLosses = 0;
var playerTwoWins = 0;
var playerTwoLosses = 0;
var ties = 0;

document.onkeyup = function () {
    var playerOne = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(playerOne );

    var computerGuess = options[Math.floor(Math.random()*options.length)];
    console.log(computerGuess);

    if (playerOne === "r" || playerOne === "p" || playerOne === "s"){
        if((playerOne === "r") && (computerGuess === "r")){
            ties++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $(".ties").text(ties);
            $("#results").text("You tied!")
            $("#letterPlayedOne").text("ROCK");
            $("#imageOne").attr("src","assets/images/rock.png");
            $("#letterPlayedTwo").text("ROCK");
            $("#imageTwo").attr("src","assets/images/rock.png");
        }
        if((playerOne =="r") && (computerGuess=="s")){
            playerOneWins++;
            playerTwoLosses++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $("#playerOneWins").text(playerOneWins);
            $("#playerTwoLosses").text(playerTwoLosses);
            $("#results").text("You won!");
            $("#letterPlayedOne").text("ROCK");
            $("#imageOne").attr("src","assets/images/rock.png");
            $("#letterPlayedTwo").text("SCISSORS");
            $("#imageTwo").attr("src","assets/images/scissors.png");
        }
        if((playerOne =="r") && (computerGuess=="p")){
            playerOneLosses++;
            playerTwoWins++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $("#playerOneLosses").text(playerOneLosses);
            $("#playerTwoWins").text(playerTwoWins);
            $("#results").text("You lost!");
            $("#letterPlayedOne").text("ROCK");
            $("#imageOne").attr("src","assets/images/rock.png");
            $("#letterPlayedTwo").text("PAPER");
            $("#imageTwo").attr("src","assets/images/paper.png");
        }
        //-----------------------------------------------------------------------
        if((playerOne === "s") && (computerGuess === "s")){
            ties++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $(".ties").text(ties);
            $("#results").text("You tied!")
            $("#letterPlayedOne").text("SCISSORS");
            $("#imageOne").attr("src","assets/images/scissors.png");
            $("#letterPlayedTwo").text("SCISSORS");
            $("#imageTwo").attr("src","assets/images/scissors.png");
        }
        if((playerOne =="s") && (computerGuess=="p")){
            playerOneWins++;
            playerTwoLosses++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $("#playerOneWins").text(playerOneWins);
            $("#playerTwoLosses").text(playerTwoLosses);
            $("#results").text("You won!");
            $("#letterPlayedOne").text("SCISSORS");
            $("#imageOne").attr("src","assets/images/scissors.png");
            $("#letterPlayedTwo").text("PAPER");
            $("#imageTwo").attr("src","assets/images/paper.png");
        }
        if((playerOne =="s") && (computerGuess=="r")){
            playerOneLosses++;
            playerTwoWins++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $("#playerOneLosses").text(playerOneLosses);
            $("#playerTwoWins").text(playerTwoWins);
            $("#results").text("You lost!");
            $("#letterPlayedOne").text("SCISSORS");
            $("#imageOne").attr("src","assets/images/scissors.png");
            $("#letterPlayedTwo").text("ROCK");
            $("#imageTwo").attr("src","assets/images/rock.png");
        }
        //-----------------------------------------------------------------------
        if((playerOne === "p") && (computerGuess === "p")){
            ties++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $(".ties").text(ties);
            $("#results").text("You tied!")
            $("#letterPlayedOne").text("PAPER");
            $("#imageOne").attr("src","assets/images/paper.png");
            $("#letterPlayedTwo").text("PAPER");
            $("#imageTwo").attr("src","assets/images/paper.png");
        }
        if((playerOne =="p") && (computerGuess=="r")){
            playerOneWins++;
            playerTwoLosses++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $("#playerOneWins").text(playerOneWins);
            $("#playerTwoLosses").text(playerTwoLosses);
            $("#results").text("You won!");
            $("#letterPlayedOne").text("PAPER");
            $("#imageOne").attr("src","assets/images/paper.png");
            $("#letterPlayedTwo").text("ROCK");
            $("#imageTwo").attr("src","assets/images/rock.png");
        }
        if((playerOne =="p") && (computerGuess=="s")){
            playerOneLosses++;
            playerTwoWins++;
            $("#instructions").text("Type R, P, or S to continue playing.");
            $("#playerOneLosses").text(playerOneLosses);
            $("#playerTwoWins").text(playerTwoWins);
            $("#results").text("You lost!");
            $("#letterPlayedOne").text("PAPER");
            $("#imageOne").attr("src","assets/images/paper.png");
            $("#letterPlayedTwo").text("SCISSORS");
            $("#imageTwo").attr("src","assets/images/scissors.png");
        }
       
    } else {
        $("#instructions").text("Let's try that again... Type R, P, or S to continue playing.");
    }
}

});
