
           var computerChoice = ["a", "b", "c", "d", "e", " f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
                  "r", "s", "t", "u", "v", "w", "x", "y", "z"
            ];

            var userchoice = ["a", "b", "c", "d", "e", " f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
                  "s", "t", "u", "v", "w", "x", "y", "z"
            ];

            var wins = 0;
            var losses = 0;
            var remainingGuesses = 9;
            var lettersGuessed = [];

            var directionsText = document.getElementById("directions-text");
            var userChoiceText = document.getElementById("userchoice-text");
            var computerChoiceText = document.getElementById("computerchoice-text");
             var winsText = document.getElementById("wins-text");
             var lossesText = document.getElementById("losses-text");
             var remainingGuessesText = document.getElementById("remainingGuesses-text");
            

            document.onkeyup = function (event) {
                  var userGuess = event.key;
                  console.log(userGuess);
                  var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)]
                  console.log(computerGuess);
                  if (userGuess === computerGuess) {
                        wins++;
                        console.log(wins);
                        remainingGuesses = 9;
                        lettersGuessed = [];
                        winsText.textContent = "wins: " + wins;


                  } else if (userGuess !== computerGuess) {
                        remainingGuesses--;
                        remainingGuessesText.textContent = "Guesses left: " + remainingGuesses;

                  }
                  if (remainingGuesses == 0) {
                        losses++;
                        lettersGuessed = [];
                        lossesText.textContent = "losses: " + losses;

                       
                  }
                  if (lettersGuessed.indexOf(userGuess) >= 0) {

                  } else {
                        lettersGuessed.push(userGuess);
                        document.getElementById("lettersGuessed-text").innerHTML = lettersGuessed;
                        console.log(lettersGuessed);

                  }

                  directionsText.textContent = "";
                  userChoiceText.textContent = "You chose: " + userGuess;
                  computerChoiceText.textContent = "The computer chose: " + computerGuess;
                  
            };
  