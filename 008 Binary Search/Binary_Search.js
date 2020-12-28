// O(log(n)) Time | O(log(n)) Space

function binarySearch(array, target) {
  return helper(array, target, 0, array.length - 1)
}

function helper(array,target,left,right) {
	if (left > right) return -1;
	const middle = Math.floor((left + right) / 2);
	const potentialMatch = array[middle];
	if (target == potentialMatch) {
		return middle;
	} else if (target < potentialMatch) {
		return helper(array,target, left, middle - 1);
	} else {	
		return helper(array,target, middle + 1, right);
	}
}

//O(log(n)) time | O(1) space
function binarySearch(array, target) {
	return helper(array, target, 0, array.length - 1);
}

function helper(array, target, left, right) {
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		const midval = array[middle];
		if(target === midval){
			return middle;
		} else if (target < midval) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

