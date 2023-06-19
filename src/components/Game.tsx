import { UseGame } from "../hooks/UseGame";
import "../App.scss";
export const Game = () => {
  const { grid, gameOver, handleClick } = UseGame();
  return (
    <div className="mines-game">
      {gameOver ? <div>Game Over</div> : null}
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              className={`cell ${
                cell.isRevealed ? (cell.isMine ? "mine" : "safe") : ""
              }`}
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
