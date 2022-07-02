// O(nc) time and space
function knapsackProblem(items, maxWeight){
	// set up a grid. ADD AN EXTRA ROW AND COL TO IT FOR 0 WEIGHT AND VALUE!!!
	const grid = [];
	for(let i = 0; i < items.length + 1; i++){
		const row = new Array(maxWeight + 1).fill(0);
		grid.push( row );
	}
	
	// Traverse the array (nested for loop time)
	
	for (let row = 1; row < items.length + 1; row++){
		//start with i - 1 since i = 1 becauseof empty additional row
		const currWeight = items[row - 1][1];
		const currVal = items[row - 1][0];
		
		for(let col = 0; col < maxWeight + 1; col++ ){
			if(currWeight > col){
				// assign grid section to value directly above it
				grid[row][col] = grid[row - 1][col];
			}else{
				grid[row][col] = Math.max(
					grid[row - 1][col], 
					grid[row - 1][col-currWeight] + currVal
				);
			}
		}
	}
	return [grid[items.length][maxWeight], getItems(grid,items)];
}

function getItems(grid,items) {
	const packedItems = [];
	let row = grid.length - 1;
	let col = grid[0].length - 1;
	while (row > 0){
		if (grid[row][col] === grid[row - 1][col]){
			row -= 1;
		} else {
			packedItems.unshift(row - 1);
			col -= items[row - 1][1];
			row -= 1;
		}
		if (col === 0) break;
	}
	return packedItems;
}
