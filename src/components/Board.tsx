import "../App.scss";

type cellType = {
  value: "mine" | number;
  isRevealed: boolean;
  isFlagged: boolean;
};
export const Board = ({
  handleClick,
  grid,
}: {
  handleClick: (owIndex: number, colIndex: number) => void;
  grid: cellType[][];
}) => {
  //const { grid, gameOver, handleClick, didWin } = UseGame();
  //  const endGameMessage = didWin ? "You Win!" : "Game Over";
  if (!grid) {
    return null;
  }
  console.log(grid);
  return (
    <div className="board">
      {grid.map((row: cellType[], rowIndex: number) => (
        <div className="row" key={rowIndex}>
          {row.map((cell: cellType, colIndex: number) => (
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
                  : cell.value === 0
                  ? ""
                  : cell.value
                : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
