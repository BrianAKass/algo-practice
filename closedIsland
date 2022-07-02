var closedIsland = function(grid) {
	let row = grid.length;
	let col = grid[0].length;

	let count = 0;
	for (let i = 0; i < row - 1; i++) {
		for (let j = 0; j < col - 1; j++) {
			if(grid[i][j] === 0){
				if(dfs(i,j,row,col,grid)) count++;
			}
		}
	}
	return count;
};

let dfs = function(i, j, row, col, grid) {
	if (i < 0 || i >= row || j < 0 || j >= col) return false;
	if (grid[i][j] === 1) return true;
	grid[i][j] = 1;

	if(dfs(i-1,j,row,col,grid) && dfs(i+1, j, row, col, grid) && dfs(i, j-1, row, col, grid) && dfs(i, j+1, row, col, grid)) {
		return true;
	} else {
		grid[i][j] = 0;
		return false;
	}
}