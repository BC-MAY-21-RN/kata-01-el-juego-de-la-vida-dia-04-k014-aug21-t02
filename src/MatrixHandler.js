export class MatrixHandler {

    generateNewMatrix(rows, cols) {
        let newMatrix = [];
        for(let row = 0; row < rows; row++) {
            let matrixRow = new Array(cols);
            matrixRow.fill(".");
            newMatrix.push(matrixRow);
        }
        return newMatrix;
    }

}