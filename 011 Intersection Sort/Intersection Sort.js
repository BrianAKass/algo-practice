function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
		let j = i;
		while (j > 0 && array[j] < array[j - 1]){
			swap(j, j-1, array)
			j -= 1;
		}
	}
	return array;
}

function swap(a, b, array) {
	[array[a],array[b]] = [array[b],array[a]]
}