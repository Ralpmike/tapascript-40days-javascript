// let randomNumber = Math.trunc(Math.random() * 10) + 1;
// let numberOfGuesses = 0;

// function numberGuessingGame() {
//   let userPrompt;

//   while (true) {
//     const input = prompt("Guess a Number between 1 and 10");

//     if (input == null || input == "") {
//       console.log("Game cancelled. Goodbye 👍!");
//       return;
//     }
//     //? Check if the user input is a number and not a string
//     userPrompt = Number(input);

//     if (isNaN(userPrompt) || userPrompt < 1 || userPrompt > 10) {
//       console.log("Invalid input. Please enter a number between 1 and 10.");
//       continue;
//     }

//     break;
//   }

//   numberOfGuesses++;

//   const userNumberGuessed = userPrompt;

//   //? Computer generated random number

//   console.log(randomNumber);

//   console.log(userNumberGuessed);

//   if (userNumberGuessed > randomNumber) {
//     console.log("Guess too High!");
//     numberGuessingGame();
//   } else if (userNumberGuessed < randomNumber) {
//     console.log("Guess too Low");
//     numberGuessingGame();
//   } else if (userNumberGuessed == randomNumber) {
//     console.log("Congratulations you guessed right🎉!");
//     console.log(`You made this number of guesses: ${numberOfGuesses}`);
//     numberOfGuesses = 0;
//     randomNumber = Math.trunc(Math.random() * 10) + 1;
//   }

//   const playAgain = prompt("Do you wish to play again (Y/N)");
//   console.log("play again:", playAgain);

//   if (playAgain == null || playAgain == "") {
//     console.log("Invalid response. Goodbye!");
//     return;
//   }

//   const userResponse = playAgain.toLowerCase();
//   if (userResponse.includes("y")) {
//     numberGuessingGame();
//   } else {
//     console.log("Goodbye and thank you for playing 🤗");
//     return;
//   }
// }

// numberGuessingGame();
function numberGuessingGame() {
  let randomNumber = Math.trunc(Math.random() * 10) + 1;
  let numberOfGuesses = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly) {
    const input = prompt("Guess a number between 1 and 10");

    if (input === null) {
      console.log("Game cancelled. Goodbye!");
      return;
    }

    const userGuess = Number(input);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      console.log("Invalid input. Please enter a number between 1 and 10.");
      continue;
    }

    numberOfGuesses++;

    if (userGuess > randomNumber) {
      console.log("Too high!");
    } else if (userGuess < randomNumber) {
      console.log("Too low!");
    } else {
      console.log("🎉 Congratulations! You guessed it right.");
      console.log(`You made this number of guesses: ${numberOfGuesses}`);
      guessedCorrectly = true;

      const playAgain = prompt("Do you want to play again? (Y/N)");
      if (playAgain && playAgain.toLowerCase().startsWith("y")) {
        numberGuessingGame(); // Restart game
      } else {
        console.log("Thanks for playing! 👋");
      }
    }
  }
}

numberGuessingGame();
