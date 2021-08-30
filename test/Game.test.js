import { Game } from "../src/Game.js";
import { Board } from "../src/Board.js";
import { States } from "../src/Constants.js";

test("Get next generation test", () => {
    const firstGeneration = [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", "*", ".", ".", "."],
        [".", ".", ".", "*", "*", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
      ];  
    const nextGeneration = [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "*", "*", ".", ".", "."],
        [".", ".", ".", "*", "*", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
      ];       
    const board = new Board(firstGeneration);
    const game = new Game();
    const nextGen = game.getNextGeneration(board);
    expect(nextGen).toEqual(nextGeneration);
});

test("Apply rules test", () => {
    const testMatrix = [
        [".", "*", "*"],
        [".", ".", "*"]
    ];
    const nextMatrix = [
        [".", ".", "."],
        [".", ".", "."]
    ];
    const numNeighbors = 3;
    const cellRow = 1;
    const cellCol = 1;
    const game = new Game();
    game.applyRules(testMatrix, nextMatrix, numNeighbors, cellRow, cellCol);
    expect((nextMatrix[cellRow][cellCol])).toBe(States.LIVE);
});