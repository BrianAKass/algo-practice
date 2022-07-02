// Best/Average = O(n) time | O(1) space
// Worst = O(n^2) time | O(1) space
function quickselect(array, k) {
  const position = k - 1;
	return quickSelectHelper(array, 0, array.length - 1, position);
}

function quickSelectHelper(array, startIndex, endIndex, position) {
	while (true) {
		if(startIndex > endIndex) {
			throw new Error('How did this happen? Im honestly impressed as I am confused by this.');
		}
		const pivotIndex = startIndex;
		let leftIndex = startIndex + 1;
		let rightIndex = endIndex;
		while (leftIndex <= rightIndex) {
			if (array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]);
				swap(leftIndex, rightIndex, array);
			if (array[leftIndex] <= array[pivotIndex]) {
				leftIndex++;
			}
			if (array[rightIndex] >= array[pivotIndex]) {
				rightIndex--;
			}
		}
		swap(pivotIndex, rightIndex, array);
		if (rightIndex === position) {
			return array[rightIndex];
		} else if (rightIndex < position) {
			startIndex = rightIndex + 1;
		} else {
			endIndex = rightIndex - 1;
		}
	}
}

function swap(i, j, array) {
	[array[i], array[j]] = [array[j], array[i]];
}