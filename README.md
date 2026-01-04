# Number Guessing Game

A simple Node.js Command-Line Interface (CLI) game where the player tries to guess a random number within a limited number of chances.

🎯 This project is based on the **[@roadmap.sh Number Guessing Game project](https://roadmap.sh/projects/number-guessing-game)**.

🔗 Original problem statement:  
https://roadmap.sh/projects/number-guessing-game

---

## 📌 Description

This game runs in the terminal. When started, it:

1. Greets the player
2. Asks for the player's name
3. Asks whether the player feels lucky
4. Chooses a random number between 1 and 100
5. Assigns the number of chances dynamically
6. Prompts the player to guess the number
7. Provides feedback ("Too high" / "Too low") after each guess
8. Ends when the player guesses correctly or runs out of chances

---

## ⚠️ Note on Deviation from the Original Problem

The original roadmap.sh problem statement suggests allowing the player to choose a difficulty level such as:

- Easy
- Medium
- Hard

Each difficulty corresponds to a fixed number of chances.

### ✅ Deviation in This Implementation

In this implementation, the difficulty selection has been **intentionally replaced** with a **luck-based system**:

- Instead of explicitly choosing *Easy / Medium / Hard*,  
- The number of chances is determined dynamically based on a **randomized "luck" factor** after asking the player whether they feel lucky.

This approach keeps the core learning goals intact (input handling, loops, conditionals, state management) while introducing a more playful and narrative-driven gameplay experience.

---

## 🚀 How to Run

### Requirements

- Node.js (v12 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rukutodo/Roadmap.sh-luckyGuessGame.git
2. cd cli-numberGuessingGame
3. npm install
4. node index.js

## Sample Output

Welcome to the Number Guessing Game

What should I call you?: Venu
So Venu, are you feeling lucky today? (yes/no): yes
You have quite the gut feeling lad
You have 4 chances to guess the correct number
I'm thinking of a number between 1 and 100

Guess 1: 57
Too low!
Guess 2: 89
Too high!

##🧠 Game Logic

Random number is chosen between 1 and 100

Number of chances is decided dynamically (luck-based)

Input is validated to ensure numeric guesses

Feedback is given after each guess

Game ends on success or when chances are exhausted

##🛠️ Tech Used

Node.js

JavaScript

readline module for CLI interaction

##📫 Contributing

Ideas for extension:

Add a scoring system

Track win/loss history

Reintroduce difficulty modes as an optional feature

Convert the game to a browser-based version

Contributions are welcome.

