import { UseGame } from "../hooks/UseGame";
import "../App.scss";
import { Board } from "./Board.tsx";
import Header from "./Header.tsx";
export const Game = () => {
  const { grid, gameOver, handleClick, didWin, resetGame, revealedCells } =
    UseGame();
  const endGameMessage = didWin ? "You Win!" : "Game Over";
  return (
    <div className="mines-game">
      {gameOver ? <div>{endGameMessage}</div> : null}
      <Header resetGame={resetGame} mineCount={revealedCells} elapsedTime={0} />
      <Board handleClick={handleClick} grid={grid} />
    </div>
  );
};
