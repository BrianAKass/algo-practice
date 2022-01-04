// O(n^2) time | O(d) space - where n is the number of
// nodes in each array, respectively, and d is the depth
// of the BST that they represent
function sameBsts(arrayOne, arrayTwo) {
  return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBsts(arrayOne, arrayTwo, rootIdxOne, rootIdxTwo, minVal, maxVal) {
	// Edge case if indexes = -1 boolean check both root indexes
	if (rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo;
	// edge case if both root indexs of respective arrays are not identical return false. 
	if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;
	// write helper functions to get the root left and right indexes or each array
	const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal);
	const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal);
	const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(arrayOne, rootIdxOne, maxVal);
	const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(arrayTwo, rootIdxTwo, maxVal);
	// current value is array one's root index
	const currentValue = arrayOne[rootIdxOne];
	// recursive functions on left and rght arrays
	const leftAreSame = areSameBsts(arrayOne, arrayTwo, leftRootIdxOne, leftRootIdxTwo, minVal, currentValue);
	const rightAreSame = areSameBsts(arrayOne, arrayTwo, rightRootIdxOne, rightRootIdxTwo, currentValue, maxVal);
	// return boolean
	return leftAreSame && rightAreSame;
}

function getIdxOfFirstSmaller(array,startingIdx, minVal){
	// For loop starts after starting index
	for (let i = startingIdx + 1; i < array.length; i++){
		// if indexed number is less than the starting index number 
		// and inexed number is greater than min value return that index
		if (array[i] < array[startingIdx] && array[i] >= minVal) return i;
	}
	// otherwise its and edge case and will likely return false
	return -1
}

function getIdxOfFirstBiggerOrEqual(array,startingIdx, maxVal){
	for (let i = startingIdx + 1; i < array.length; i++){
		// if indexed number is greater than the starting index number 
		// and inexed number is less than max value return that index
		if (array[i] >= array[startingIdx] && array[i] <= maxVal) return i;
	}
	// otherwise its and edge case and will likely return false
	return -1
}

