import { Board } from "../src/Board.js";

test("Generate matrix test", () => {
    const testMatrixRows = 2;
    const testMatrixCols = 2;
    const testMatrix = [[".", "."], [".", "."]];
    const board = new Board(testMatrix);
    expect(board.generateNewMatrix(testMatrixRows, testMatrixCols)).toEqual(testMatrix);
});

test("Get neighbors test", () => {
    const testMatrix = [[".", ".", "*"], [".", "*", "."]];
    const board = new Board(testMatrix);
    const expectedNeighbors = ["*", ".", ".", undefined];
    expect(board.getNeighbors(testMatrix, 0, 2)).toEqual(expectedNeighbors);
});

test("Count alive neighbors test", () => {
    const testMatrix = [[".", ".", "*"], [".", "*", "."]];
    const board = new Board(testMatrix);
    const neighbors = board.getNeighbors(testMatrix, 0, 2);
    expect(board.countLiveNeighbors(neighbors)).toBe(1);
});

test("Get matrix test", () => {
    const testMatrix = [[".", ".", "*"], [".", "*", "."]];
    const expectedMatrix = [[".", ".", "."], [".", ".", "."]];
    const board = new Board(testMatrix);
    expect(board.getNextGenerationMatrix()).toEqual(expectedMatrix);    
});