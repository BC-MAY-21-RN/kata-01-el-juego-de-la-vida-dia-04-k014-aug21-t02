import { States } from "./Constants.js";

export class Game {

    getNextGeneration(board) {
        const actualGenerationMatrix = board.getActualGenerationMatrix();
        const nextGenerationMatrix = board.getNextGenerationMatrix();

        actualGenerationMatrix.forEach((matrixRow, rowIndex) => {
            matrixRow.forEach((matrixCol, colIndex) => {
                const neighbors = board.getNeighbors(actualGenerationMatrix, rowIndex, colIndex);
                const liveNeighbors = board.countLiveNeighbors(neighbors);
                this.applyRules(actualGenerationMatrix, nextGenerationMatrix, liveNeighbors, rowIndex, colIndex);
            });
        });
        return nextGenerationMatrix;
    }

    applyRules(originalMatrix, newMatrix, neighbors, rowIndex, colIndex) {
        if(originalMatrix[rowIndex][colIndex] == States.LIVE && (neighbors < 2 || neighbors > 3)) {
            newMatrix[rowIndex][colIndex] = States.DEAD;
        } else if(originalMatrix[rowIndex][colIndex] == States.DEAD && neighbors == 3) {
            newMatrix[rowIndex][colIndex] = States.LIVE;
        } else {
            newMatrix[rowIndex][colIndex]=originalMatrix[rowIndex][colIndex];
        }
    }

}
