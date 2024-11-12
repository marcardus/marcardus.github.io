# Memory Game

Welcome to the **Memory Game**! This is a browser-based game where you match pairs of cards. The game includes a timer, score tracking, different difficulty levels, and background music.

## Features

- **Difficulty Levels**: Choose from three difficulty levels:
  - **Easy**: 5 pairs of cards (10 cards total)
  - **Medium**: 6 pairs of cards (12 cards total)
  - **Hard**: 12 pairs of cards (24 cards total)
  
- **Timer**: The game has a countdown timer to challenge players to finish within a certain time limit.
- **Score Tracking**: Your score increases as you correctly guess card pairs. Your score is displayed on the game screen.
- **Background Music**: The game includes background music that can be muted or unmuted.
- **Game Over Screen**: Displays your final score and the number of pairs you guessed correctly when the game ends.

## How to Play

1. **Start the Game**: When the page loads, the game automatically starts based on the difficulty level saved in `localStorage`. You can also manually choose the difficulty.
2. **Flip the Cards**: Click on the cards to flip them over and try to find matching pairs.
3. **Matching Pairs**: If two flipped cards match, they remain face-up; if not, they will flip back after a short delay.
4. **Timer**: Keep an eye on the timer. The game ends when the timer runs out or when you successfully match all pairs.
5. **End of Game**: Once the game ends, your final score is displayed along with the number of pairs you guessed correctly.
6. **Play Again**: After the game, you can press the "Play Again" button to start a new game.

## Game Flow

### 1. **Card Setup**
The game begins by selecting a set of cards based on the difficulty level:
- **Easy**: 5 pairs (10 cards)
- **Medium**: 6 pairs (12 cards)
- **Hard**: 12 pairs (24 cards)

### 2. **Shuffling the Cards**
The cards are shuffled using the **Fisher-Yates shuffle algorithm** to ensure a random order every time.

### 3. **Card Matching**
The player flips two cards at a time. If they match, they remain face-up; otherwise, they are flipped back over after a brief delay.

### 4. **Game Over Conditions**
- The game ends when all pairs are matched correctly.
- The game also ends if the timer runs out before all pairs are matched.

### 5. **Score and Stats**
- The game tracks the total number of **pairs clicked** and **pairs guessed** correctly.
- The score increases by **2 points** for each correct pair guessed.

## Installation

To play the game locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/memory-game.git

