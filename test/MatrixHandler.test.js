import { MatrixHandler } from "../src/MatrixHandler.js";

test("Matrix handler generate matrix test", () => {
    const expectedMatrix = [
        ["."],
        ["."]
    ];
    const matrixHandler = new MatrixHandler();
    const newMatrix = matrixHandler.generateNewMatrix(2, 1);
    expect(newMatrix).toEqual(expectedMatrix);
});