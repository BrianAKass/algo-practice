// O(width * height) time and space 
function maximumSumSubmatrix(matrix, size) {
  const sums = createSumMatrix(matrix);
	let maxSubMatrixSum = -Infinity;
	
	for (let row = size - 1; row < matrix.length; row++) {
    for (let col = size - 1; col < matrix[row].length; col++) {
      let total = sums[row][col];
			
			const touchesTopBorder = row - size < 0;
      if (!touchesTopBorder) total -= sums[row - size][col];
			
			const touchesLeftBorder = col - size < 0;
      if (!touchesLeftBorder) total -= sums[row][col - size];
			
      const touchesTopOrLeftBorder = touchesTopBorder || touchesLeftBorder;
      if (!touchesTopOrLeftBorder) total += sums[row - size][col - size];
			
      maxSubMatrixSum = Math.max(maxSubMatrixSum, total);
		}
	}
  return maxSubMatrixSum;
}

function createSumMatrix(matrix) {
	const sums = [];
  for (let row = 0; row < matrix.length; row++) {
    sums.push([]);
    for (let col = 0; col < matrix[row].length; col++) {
      sums[row].push(0);
    }
  }
  sums[0][0] = matrix[0][0];
	
	//fill first row and first col ROW NEEDS THE INDEX
	for (let i = 1; i < matrix[0].length; i++) {
		sums[0][i] = sums[0][i - 1] + matrix[0][i];
	}
	for (let i = 1; i < matrix.length; i++) {
		sums[i][0] = sums[i - 1][0] + matrix[i][0];
	}
	//fill in the rest
	for (let row = 1; row < matrix.length; row++) {
		for (let col = 1; col < matrix[row].length; col++) {
			sums[row][col] = sums[row - 1][col] + sums[row][col - 1] - sums[row - 1][col -1] + matrix[row][col];
		}
	}
	return sums;
}
