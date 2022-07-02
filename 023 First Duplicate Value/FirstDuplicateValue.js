//O(n) time O(1)space
function firstDuplicateValue(array) {
	for (const value of array){
		const absVal = Math.abs(value);
		if (array[absVal -1] < 0) return absVal;
		array[absVal - 1] *= -1;
	}
	return -1;
}
