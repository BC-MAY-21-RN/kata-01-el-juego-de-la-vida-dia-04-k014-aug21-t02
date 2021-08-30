import { Board } from "./Board.js";
import { Game } from "./Game.js";
import { MatrixHandler } from "./MatrixHandler.js";

let firstGeneration = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ];

  const board = new Board(firstGeneration);
  const game = new Game();
  const matrixHandler = new MatrixHandler();

  const nextGeneration = game.getNextGeneration(board);
  matrixHandler.printMatrix(nextGeneration);


  