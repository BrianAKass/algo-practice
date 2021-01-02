// O(n^2) Time and O(1) Space best, average and worst.

function selectionSort(array) {
	let currentIndex = 0;
	while (currentIndex < array.length - 1) {
		let smallestIndex = currentIndex;
		for (let i = currentIndex + 1; i < array.length; i++ ){
			if (array[smallestIndex] > array[i]) smallestIndex = i;
		}
			swap(currentIndex, smallestIndex, array);
			currentIndex++;
	}
	return array;
}

function swap(a,b,arr){
	[arr[a],arr[b]] = [arr[b],arr[a]]
}