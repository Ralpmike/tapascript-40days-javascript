let randomNumber = Math.trunc(Math.random() * 10) + 1;
let numberOfGuesses = 0;

function numberGuessingGame() {
  let userPrompt;

  while (true) {
    userPrompt = +prompt("Guess a Number between 1 and 10");
    if (isNaN(userPrompt) || userPrompt === "" || !userPrompt) {
      console.log("Invalid input. Please enter a number.");
      continue;
    } else if (userPrompt == null) {
      break;
    } else {
      break;
    }
  }

  numberOfGuesses++;

  const userNumberGuessed = userPrompt;

  //? Computer generated random number

  console.log(randomNumber);

  console.log(userNumberGuessed);

  if (userNumberGuessed > randomNumber) {
    console.log("Guess too High!");
    numberGuessingGame();
  } else if (userNumberGuessed < randomNumber) {
    console.log("Guess too Low");
    numberGuessingGame();
  } else if (userNumberGuessed == randomNumber) {
    console.log("Congratulations you guessed right🎉!");
    console.log(`You made this number of guesses: ${numberOfGuesses}`);
    numberOfGuesses = 0;
    randomNumber = Math.trunc(Math.random() * 10) + 1;
  }

  const playAgain = prompt("Do you wish to play again (Y/N)");
  console.log("play again:", playAgain);

  if (playAgain == null || playAgain == "") {
    console.log("Invalid response. Goodbye!");
    return;
  }

  const userResponse = playAgain.toLowerCase();
  if (userResponse.includes("y")) {
    numberGuessingGame();
  } else {
    console.log("Goodbye and thank you for playing 🤗");
    return;
  }
}

numberGuessingGame();
