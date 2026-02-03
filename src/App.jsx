import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning.js";
import GameOver from "./components/GameOver.jsx";
const INIALGAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function drivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  let activePlayer = drivedActivePlayer(gameTurn);
  let winner;
  let gameBoard = [...INIALGAMEBOARD.map((row) => [...row])];
  for (let turn of gameTurn) {
    let { square, player } = turn;
    let { row, col } = square;
    gameBoard[row][col] = player;
  }
  for (const win of WINNING_COMBINATIONS) {
    let firstSquareSymbol = gameBoard[win[0].row][win[0].column];
    let secondSquareSymbol = gameBoard[win[1].row][win[1].column];
    let thridSquareSymbol = gameBoard[win[2].row][win[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thridSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  let noWinner = gameTurn.length === 9 && !winner;
  function handlePlayerActive(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      let currentPlayer = drivedActivePlayer(prevTurn);
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
    });
  }
  function handleRematch() {
    setGameTurn([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || noWinner) && (
          <GameOver winner={winner} onClick={handleRematch} />
        )}
        <GameBoard selectedSquare={handlePlayerActive} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
