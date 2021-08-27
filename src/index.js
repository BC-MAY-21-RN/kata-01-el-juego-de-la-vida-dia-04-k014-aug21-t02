import { Board } from "./Board.js";
import { Game } from "./Game.js";

let firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];

  const board = new Board(firstGeneration);
  const game = new Game();
  const nextGeneration = game.getNextGeneration(board);
  printGrid(nextGeneration);



  function printGrid(grid) {
    grid.forEach(row => console.log(row.join(" ")));
  }

  