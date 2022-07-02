  // O(width * height) time and space 
function minimumPassesOfMatrix(matrix) {
  const passes = convertNegatives(matrix);
  return !containsNegative(matrix) ?  passes - 1 : -1;
}

function convertNegatives(matrix) {
	let nextPassQueue = getAllPositivePositions(matrix);
	let passes = 0;
	
	while (nextPassQueue.length > 0) {
		const currentPassQueue = nextPassQueue;
		nextPassQueue = [];
		
		while (currentPassQueue.length > 0) {
			const [currentRow, currentCol] = currentPassQueue.shift();
			const adjacentPositions = getAdjacentPositions(currentRow, currentCol, matrix);
			for (const position of adjacentPositions) {
				const [row, col] = position; 
				const value = matrix[row][col];
				if (value < 0) {
					matrix[row][col] *= -1;
					nextPassQueue.push([row, col]);
				}
			}
		}
		passes++;
	}
	return passes;
}

function getAllPositivePositions(matrix) {
  const positivePositions = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const value = matrix[row][col];
      if (value > 0) positivePositions.push([row, col]);
    }
  }
  return positivePositions;             
}

function getAdjacentPositions(row, col, matrix) {
 const adjacentPositions = [];
	
	if (row > 0) adjacentPositions.push([row - 1, col]);
  if (row < matrix.length - 1) adjacentPositions.push([row + 1, col]);
  if (col > 0) adjacentPositions.push([row, col - 1]);
  if (col < matrix[0].length - 1) adjacentPositions.push([row, col + 1]);
	return adjacentPositions;
}

function containsNegative(matrix) {
	for (const row of matrix) {
		for (const value of row) {
			if (value < 0) return true;
		}
	}
	return false;
}