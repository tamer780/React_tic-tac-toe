export default function GameOver({ winner, onClick }) {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p> {winner} won!</p>}
      {!winner && <p>it&apos;s a draw!</p>}
      <button onClick={onClick}>Rematch</button>
    </div>
  );
}
