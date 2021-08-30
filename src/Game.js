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
        const hasTwoOrThreeNeighbors = neighbors === 3 || neighbors == 2;
        const hasThreeNeighbors = neighbors === 3;
        const isCellAlive = originalMatrix[rowIndex][colIndex] === States.LIVE;
        if(isCellAlive && !hasTwoOrThreeNeighbors) {
            newMatrix[rowIndex][colIndex] = States.DEAD;
        } else if(!isCellAlive && hasThreeNeighbors) {
            newMatrix[rowIndex][colIndex] = States.LIVE;
        } else {
            newMatrix[rowIndex][colIndex] = originalMatrix[rowIndex][colIndex];
        }
    }

}
