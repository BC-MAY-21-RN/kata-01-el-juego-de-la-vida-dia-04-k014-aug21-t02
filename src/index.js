import { Board } from "./Board.js";

let firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];

  const board = new Board(firstGeneration);
  const neighbors = board.getNeighbors(firstGeneration, 1, 4);
  const count = board.countLiveNeighbors(neighbors);
  console.log(count);
