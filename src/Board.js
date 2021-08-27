import { States } from "./Constants.js";

export class Board {

    constructor(firstGeneration){
        const numRows = firstGeneration.length;
        const numCols = firstGeneration[0].length;
        this.actualGeneration = firstGeneration;
        this.nextGeneration = this.generateNewMatrix(numRows, numCols);
    }

    generateNewMatrix(rows, cols) {
        let newMatrix = [];
        for(let row = 0; row < rows; row++) {
            let matrixRow = new Array(cols);
            matrixRow.fill(".");
            newMatrix.push(matrixRow);
        }
        return newMatrix;
    }

    getActualGenerationMatrix() {
        return this.actualGeneration;
    }

    getNextGenerationMatrix() {
        return this.nextGeneration;
    }

    getNeighbors(matrix, row, col) {
        let neighbors = [];
        if(row != 0) {
            const aboveNeighbors = matrix[row - 1].slice(col -1, col + 2);
            neighbors = [...aboveNeighbors];
        }
        if(row != matrix.length - 1) {
            const belowNeighbors = matrix[row + 1].slice(col - 1, col + 2);
            neighbors = [...neighbors, ...belowNeighbors];
        }
        if(col != 0) {
            const leftNeighbor = matrix[row][col - 1];
            neighbors = [...neighbors, leftNeighbor];
        }
        if(col + 1 != matrix[0].length - 1) {
            const rightNeighbor = matrix[row][col + 1];
            neighbors = [...neighbors, rightNeighbor];
        }
        return neighbors;
    }

    countLiveNeighbors(neighbors) {
        neighbors = neighbors.filter(cell => cell == States.LIVE);
        return neighbors.length;
    }

}