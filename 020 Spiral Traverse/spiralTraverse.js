// O(n) time and space

function spiralTraverse(array) {
        const result = [];
        let [startRow, endRow] = [0, array.length - 1];
        let [startCol, endCol] = [0, array[0].length - 1];


        while (startRow <= endRow && startCol <= endCol){
                for (let col = startCol; col <= endCol; col++){
                        result.push(array[startRow][col]);
                }
                for (let row = startRow + 1; row <= endRow; row++){
                        result.push(array[row][endCol]);
                }
                for (let col = endCol - 1; col >= startCol; col--){
                        if(startRow === endRow) break;
                        result.push(array[endRow][col]);
                }
                for (let row = endRow - 1; row > startRow; row--){
                        if(startCol == endCol) break;
                        result.push(array[row][startCol]);
                }
                startRow++;
                endRow--;
                startCol++;
                endCol--;
        }
        return result;
}
