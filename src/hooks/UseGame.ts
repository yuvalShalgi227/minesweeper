import { useState } from "react";
interface Cell {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
}
export const UseGame = () => {
  const dimensions = 10;
  const initialGrid: Cell[][] = Array(dimensions)
    .fill(null)
    .map(() =>
      Array(dimensions).fill({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
      })
    );
  const numberOfMines = 10;
  const safeCells = dimensions * dimensions - numberOfMines;
  // Randomly assign mines
  for (let i = 0; i < numberOfMines; i++) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    initialGrid[row][col] = { ...initialGrid[row][col], isMine: true };
  }
  const [grid, setGrid] = useState<Cell[][]>(initialGrid);
  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [revealedCells, setRevealedCells] = useState(0);

  const revrealAll = () => {
    const newGrid = [...grid];
    newGrid.forEach((row) =>
      row.forEach((cell) => {
        cell.isRevealed = true;
      })
    );
    setGrid(newGrid);
  };

  const handleClick = (rowIndex: number, colIndex: number) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = {
      ...newGrid[rowIndex][colIndex],
      isRevealed: true,
    };
    setGrid(newGrid);
    if (grid[rowIndex][colIndex].isMine) {
      //alert("Game over!");
      revrealAll();
      setGameOver(true);
    } else {
      setRevealedCells((prev) => prev + 1);
      if (revealedCells === safeCells) {
        alert("You won!");
        setDidWin(true);
        revrealAll();
        setGameOver(true);
      }
    }
  };

  return { grid, gameOver, handleClick, didWin };
};
