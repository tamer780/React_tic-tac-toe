import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [nameOfPlayer, setNameOfPlayer] = useState(name); //two way binding
  const [isEditing, setIsEditing] = useState(false);
  function handlePlayerNameChange(e) {
    setNameOfPlayer(e.target.value);
  }
  function handleEditing() {
    setIsEditing((prevState) => !prevState);
  }
  let playerName = <span className="player-name">{nameOfPlayer}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={nameOfPlayer}
        onChange={handlePlayerNameChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
