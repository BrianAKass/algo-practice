function longestPeak(array){
	let longestPeakLength = 0;
	let i = 1;
	while (i < array.length - 1) {
		let isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
		if(!isPeak){
			i++;
			continue
		}
		let leftIndex = i - 2;
		while(leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1] ){
			leftIndex--;
		}
		let rightIndex = i + 2;
		while(rightIndex < array.length && array[rightIndex] < array[rightIndex - 1] ){
			rightIndex++;
		}
		const currentLength = rightIndex - leftIndex - 1;
		longestPeakLength = Math.max(longestPeakLength, currentLength);
		i = rightIndex
	}
	return longestPeakLength;
}
