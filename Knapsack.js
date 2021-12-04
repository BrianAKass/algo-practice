// O(nc) time and space
function knapsackProblem(items, maxWeight) {
  // Setup nested array grid and build our sequence
	const grid = []
  for (let i = 0; i < items.length + 1; i++){
		const row = new Array(maxWeight + 1).fill(0);
		grid.push(row);
	}
	// traverse the array
	for (let i = 1; i< items.length + 1; i++) {
		// start with i - 1 since i = 1 because of empty additional row
		const currWeight = items[i - 1][1];
		const currVal = items[i - 1][0];
		for(let c = 0; c < maxWeight + 1; c++){
			if (currWeight > c) {
				grid[i][c] = grid[i - 1][c];
			} else {
				grid[i][c] = Math.max(
					grid[i - 1][c],
					grid[i - 1][c - currWeight] + currVal
				);
			}
		}
	}
	return [grid[items.length][maxWeight], getItems(grid,items)];
}

function getItems(grid,items) {
	const sequence = [];
	let i = grid.length - 1;
	let c = grid[0].length - 1;
	while (i > 0){
		if (grid[i][c] === grid[i - 1][c]){
			i -= 1;
		} else {
			sequence.unshift(i - 1);
			c -= items[i - 1][1];
			i -= 1;
		}
		if (c === 0) break;
	}
	return sequence;
}