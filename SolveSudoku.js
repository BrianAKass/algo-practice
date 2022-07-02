// Solve Sudoku
// 0(1) time and space
function solveSudoku(board) {
  solvePartialSudoku(0, 0, board);
  return board;
}

function solvePartialSudoku(row, col, board) {
	let currentRow = row;
	let currentCol = col;
	
	if(currentCol === board[currentRow].length){
		currentRow++;
		currentCol = 0;
		if (currentRow === board.length) return true;
	}
	
	if(board[currentRow][currentCol] === 0) {
		return tryDigitsAtPosition(currentRow, currentCol, board);
	}
	
	return solvePartialSudoku(currentRow, currentCol + 1, board);
}

function tryDigitsAtPosition(row, col, board){
	for (let digit = 1; digit < 10; digit++) {
		if (isValidAtPosition(digit, row, col,board)){
			board[row][col] = digit;
			if (solvePartialSudoku(row, col + 1, board)) return true;
		}
	}
	
	board[row][col] = 0;
	return false;
}

function isValidAtPosition(value, row, col, board){
	const rowIsValid = !board[row].includes(value);
	const colIsValid = !board.map(r => r[col]).includes(value);
	
	if(!rowIsValid || !colIsValid) return false;
	
	// check subgrid constraint
	const subgridRowStart = Math.floor(row / 3) * 3;
	const subgridColStart = Math.floor(col / 3) * 3;
	for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
		for (let colIndex = 0; colIndex < 3; colIndex++) {
			const rowToCheck = subgridRowStart + rowIndex;
			const colToCheck = subgridColStart + colIndex;
			const existingValue = board[rowToCheck][colToCheck];
			
			if (existingValue === value) return false;
		}
	}

	return true;
}