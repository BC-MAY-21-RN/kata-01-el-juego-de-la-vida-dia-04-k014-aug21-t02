import { Board } from "../src/Board.js";

test("Generate matrix test", () => {
    const testMatrixRows = 2;
    const testMatrixCols = 2;
    const testMatrix = [[".", "."], [".", "."]];
    const board = new Board(testMatrix);
    expect(board.generateNewMatrix(testMatrixRows, testMatrixCols)).toEqual(testMatrix);
});