#  Tic-Tac-Toe Master (React Edition) 

A highly optimized Tic-Tac-Toe game built with **React.js**, focusing on efficient state management and immutable data patterns.

##  Key Features

- **Dynamic Player Switching:** Intelligent logic to track the active player without redundant states.
- **Move Logging:** A detailed log of every move made during the game, allowing players to see the match history.
- **Winning Logic:** Automated check for winning combinations after every move.
- **Draw Detection:** Smartly identifies when the game ends in a draw.
- **Rematch Functionality:** Instant board reset to start a new game without refreshing the page.

## Advanced Concepts Applied

- **Derived State (Crucial):** Instead of creating multiple states for the board, winner, and turns, the entire game state is "derived" from a single `gameTurn` array. This prevents state synchronization bugs.
- **Immutable Updates:** Used the spread operator `[...]` and `map()` to create deep copies of the game board, ensuring React's re-rendering works perfectly without mutating the original data.
- **Computed Properties:** Dynamically calculated the active player and game winner during the render cycle for maximum performance.

##  Tech Stack

- **Framework:** React.js
- **State Management:** React Hooks (`useState`)
- **Styling:** CSS3 (Highlighting active players and game board grid)


