import { UseGame } from "../hooks/UseGame";
import "../App.scss";
export const Game = () => {
  const { grid, gameOver, handleClick, didWin } = UseGame();
  const endGameMessage = didWin ? "You Win!" : "Game Over";
  return (
    <div className="mines-game">
      {gameOver ? <div>{endGameMessage}</div> : null}
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              className={`cell ${
                cell.isRevealed ? (cell.value === "mine" ? "mine" : "safe") : ""
              }`}
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {cell.isRevealed
                ? cell.value === "mine"
                  ? "X"
                  : cell.value
                : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
