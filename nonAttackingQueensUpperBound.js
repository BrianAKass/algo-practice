// lower bound O(!n) time | O(n) space. n is input number
function nonAttackingQueens(n) {
  // each index of colPlacements represents a row of the chessboard,
	// and the value at each index is the column (on the relevant row) where
	// a queen is currently placed. 
  const colPlacements = new Array(n).fill(0);
	return getNumOfNonAttackingQueenPlacements(0, colPlacements, n);
}

function getNumOfNonAttackingQueenPlacements(row, colPlacements, boardSize){
	if (row === boardSize) return 1;
	let validPlacements = 0;
	for (let col = 0; col < boardSize; col++) {
		if(placementOkay(row,col,colPlacements)) {
			colPlacements[row] = col;
			validPlacements += getNumOfNonAttackingQueenPlacements(row + 1, colPlacements, boardSize);
		}
	}
	return validPlacements;
}

function placementOkay(row, col, colPlacements) {
	for (let prevRow = 0; prevRow < row; prevRow++) {
		const checkCol = colPlacements[prevRow];
		const sameCol = checkCol === col;
		const onDiagonal = Math.abs(checkCol - col) === row - prevRow;
		if (sameCol || onDiagonal) return false;
	}
	return true;-
}