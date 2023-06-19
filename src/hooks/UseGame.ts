import { useState } from "react";
interface Cell {
  value: "mine" | number;
  isRevealed: boolean;
  isFlagged: boolean;
}
export const UseGame = () => {
  const dimensions = 15;
  const numberOfMines = 10;
  const safeCells = dimensions * dimensions - numberOfMines;
  const initialGrid: Cell[][] = Array(dimensions)
    .fill(null)
    .map(() =>
      Array(dimensions).fill({ value: 0, isRevealed: false, isFlagged: false })
    );

  // Randomly assign mines
  let mineCount = numberOfMines;
  while (mineCount > 0) {
    const row = Math.floor(Math.random() * dimensions);
    const col = Math.floor(Math.random() * dimensions);
    // If the cell is already a mine, we continue with the next iteration
    if (initialGrid[row][col].value === "mine") continue;
    initialGrid[row][col] = { ...initialGrid[row][col], value: "mine" };
    mineCount--;
  }
  // Count neighboring mines for each cell
  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      // If the current cell is a mine, we skip the calculation
      if (initialGrid[i][j].value === "mine") continue; //todo too little mines

      let mineCount = 0;

      const isMineTopLeft =
        i - 1 >= 0 && j - 1 >= 0 && initialGrid[i - 1][j - 1].value === "mine";
      const isMineTop = i - 1 >= 0 && initialGrid[i - 1][j].value === "mine";
      const isMineTopRight =
        i - 1 >= 0 &&
        j + 1 < dimensions &&
        initialGrid[i - 1][j + 1].value === "mine";
      const isMineRight =
        j + 1 < dimensions && initialGrid[i][j + 1].value === "mine";
      const isMineBottomRight =
        i + 1 < dimensions && // corrected here
        j + 1 < dimensions &&
        initialGrid[i + 1][j + 1].value === "mine";
      const isMineBottom =
        i + 1 < dimensions && initialGrid[i + 1][j].value === "mine";
      const isMineBottomLeft =
        i + 1 < dimensions && // corrected here
        j - 1 >= 0 &&
        initialGrid[i + 1][j - 1].value === "mine";
      const isMineLeft = j - 1 >= 0 && initialGrid[i][j - 1].value === "mine";

      if (isMineTopLeft) mineCount++;
      if (isMineTop) mineCount++;
      if (isMineTopRight) mineCount++;
      if (isMineRight) mineCount++;
      if (isMineBottomRight) mineCount++;
      if (isMineBottom) mineCount++;
      if (isMineBottomLeft) mineCount++;
      if (isMineLeft) mineCount++;

      // Assign the count of neighboring mines to the current cell
      initialGrid[i][j] = { ...initialGrid[i][j], value: mineCount };
    }
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
    if (grid[rowIndex][colIndex].value === "mine") {
      //alert("Game over!");
      revrealAll();
      setGameOver(true);
    } else {
      setRevealedCells((prev) => prev + 1);
      console.log(revealedCells);
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
