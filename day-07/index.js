function rockPaperScissorsGame() {
  let input = prompt("Enter Rock, Paper or Scissors: ");

  console.log(`input: ${input}`);

  if (!input || input === null) {
    console.log("No input provided. Please enter Rock, Paper, or Scissors.");
    return;
    // playAgain();
  }

  const userChoice = input.toLowerCase();

  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(userChoice)) {
    console.log("Invalid choice! Please enter Rock, Paper, or Scissors.");
    // return;
  }

  const result = Math.floor(Math.random() * 3) + 1;
  const computerChoice = validChoices[result - 1];

  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  // switch (result) {
  //   case 1:
  //     computerChoice = "rock";
  //     break;
  //   case 2:
  //     computerChoice = "paper";
  //     break;
  //   default:
  //     computerChoice = "scissors";
  //     break;
  // }

  if (userChoice === computerChoice) {
    console.log("🤝  It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("🎉 You win!");
  } else {
    console.log("💻 Computer wins! Better luck next time.");
    // playAgain();
  }

  playAgain();
}

rockPaperScissorsGame();

function playAgain() {
  let playAgain = prompt("Do you want to play again? (yes/no)");

  const validResponses = playAgain ? playAgain.toLowerCase() : "no";

  console.log(`playAgain: ${playAgain}`);

  if (validResponses === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing! Goodbye!");
  }
}
