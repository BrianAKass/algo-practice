// upper bound O(!n) time and O(n) space. n is input number.
function nonAttackingQueens(n) {
  const blockedCols = new Set();
	const blockedUpDiags = new Set();
	const blockedDownDiags = new Set();
	return getNumOfNonAttackPlacements(0, blockedCols, blockedUpDiags, blockedDownDiags, n);
}

function getNumOfNonAttackPlacements(
		row,
		blockedCols,
		blockedUpDiags,
		blockedDownDiags,
		boardSize
) {
	if (row === boardSize) return 1;
	let validPlacements = 0;
	for (let col = 0; col < boardSize; col++){
		if(checkPlacement(row, col, blockedCols, blockedUpDiags, blockedDownDiags)){
			placeQueen(row, col, blockedCols, blockedUpDiags, blockedDownDiags);
			validPlacements += getNumOfNonAttackPlacements( 
				row + 1,
				blockedCols,
				blockedUpDiags,
				blockedDownDiags,
				boardSize
			);
			removeQueen(row, col, blockedCols, blockedUpDiags, blockedDownDiags)
		}
	}
	return validPlacements;
}

// always O(1) time operation
function checkPlacement(row, col, blockedCols, blockedUpDiags, blockedDownDiags) {
	if (blockedCols.has(col)) return false;
	if (blockedUpDiags.has(row + col)) return false;
	if (blockedDownDiags.has(row - col)) return false;
	
	return true;
}

function placeQueen(row, col, blockedCols, blockedUpDiags, blockedDownDiags) {
	blockedCols.add(col);
	blockedUpDiags.add(row + col);
	blockedDownDiags.add(row - col);
}

function removeQueen(row, col, blockedCols, blockedUpDiags, blockedDownDiags) {
	blockedCols.delete(col);
	blockedUpDiags.delete(row + col);
	blockedDownDiags.delete(row - col);
}
