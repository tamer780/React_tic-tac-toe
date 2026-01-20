export default function GameOver({ winner, onClick }) {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>Winner {winner}!</p>}
      {!winner && <p>it&apos;s a drow!</p>}
      <button onClick={onClick}>Rematch</button>
    </div>
  );
}
