import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const min = 1;
const max = 100;

console.log("\nWelcome to the Number Guessing Game\n");

let playerName = "";
let chances = 0;
let attempts = 0;
let randomNumber = 0;

// ---- SETUP ----
rl.question("What should I call you? ", (name) => {
  playerName = name;

  rl.question(
    `So ${playerName}, are you feeling lucky today? (yes/no): `,
    (answer) => {
      // decide chances
      chances = Math.floor(Math.random() * 5) + 1;

      const mood = answer.toLowerCase();

      if (chances > 3 && mood === "yes") {
        console.log("You have quite the gut feeling lad");
      } else if (chances <= 3 && mood === "yes") {
        console.log("Your stars are not shining bright lad");
      } else if (chances > 3 && mood === "no") {
        console.log("Ohh so you don't rely on your luck");
      } else {
        console.log("What hardships have you faced in your life to say so");
      }

      console.log(`\nYou have ${chances} chances`);
      console.log(`I'm thinking of a number between ${min} and ${max}\n`);

      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      // start gameplay loop
      askGuess();
    },
  );
});

// ---- GAME LOOP ----
function askGuess() {
  if (attempts >= chances) {
    console.log(
      `Sorry ${playerName}, you used all your chances. The number was ${randomNumber}`,
    );
    rl.close();
    return;
  }

  rl.question(`Guess ${attempts + 1}: `, (input) => {
    const guess = Number(input);
    attempts++;

    if (Number.isNaN(guess)) {
      console.log("Please enter a valid number");
      askGuess();
      return;
    }

    if (guess === randomNumber) {
      console.log(
        `🎉 Congratulations ${playerName}! You guessed it in ${attempts} attempts`,
      );
      rl.close();
      return;
    }

    console.log(guess > randomNumber ? "Too high!" : "Too low!");
    askGuess();
  });
}
