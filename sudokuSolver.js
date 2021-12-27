function solveSudoku(board) {
  solvePartialSudoku(0, 0, board);
  return board;
}

function solvePartialSudoku(row, col, board) {
	let currentRow = row;
	let currentCol = col;
	if (currentCol === board[currentRow].length){
		currentRow++;   // when we reach the edge of sudoku grid 
		currentCol = 0; // go down a row and start at the left
		if (currentRow === board.length) return true;
	}
	if (board[currentRow][currentCol] === 0) {
		return tryDigitsAtPosition(currentRow, currentCol, board);
	}
	return solvePartialSudoku(currentRow, currentCol + 1, board);
}

function tryDigitsAtPosition(row, col, board) {
	for (let digit = 1; digit < 10; digit++) {
		if(isValidAtPosition(digit, row ,col, board)) {
			board[row][col] = digit;
			if(solvePartialSudoku(row, col + 1, board)) return true;
		}
	}
	board[row][col] = 0;
	return false;
}

function isValidAtPosition(value, row, col, board){
	const rowIsValid = !board[row].includes(value);
	const colIsValid = !board.map(r => r[col]).includes(value);
	
	if (!rowIsValid || !colIsValid) return false;
	//check subgrid constraint here
	const subgridRowStart = Math.floor(row / 3) * 3;
	const subgridColStart = Math.floor(col / 3) * 3;
	for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
		for (let colIdx = 0; colIdx < 3; colIdx++) {
			const rowToCheck = subgridRowStart + rowIdx; 
			const colToCheck = subgridColStart + colIdx;
			const existingValue = board[rowToCheck][colToCheck];
			
			if (existingValue === value) return false;
		}
	}
	return true;
}