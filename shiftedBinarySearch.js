// O(log(n)) time and space
function shiftedBinarySearch(array, target) {
  return helper(array, target, 0, array.length - 1);
}

function helper(array, target, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) return -1;
	const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
	const middleNumber = array[middleIndex];
	const leftNumber = array[leftIndex];
	const rightNumber = array[rightIndex];
	if (target === middleNumber) {
		return middleIndex;
	} else if (leftNumber <= middleNumber) {
		if (target < middleNumber && target >= leftNumber) {
			return helper(array, target, leftIndex, middleIndex - 1);
		} else {
			return helper(array, target, middleIndex + 1, rightIndex);
		}
	} else {
		if (target > middleNumber && target <= rightNumber) {
			return helper(array, target, middleIndex + 1, rightIndex);
		} else {
			return helper(array, target, leftIndex, middleIndex - 1);
		}
	}
}

// Do not edit the line below.
exports.shiftedBinarySearch = shiftedBinarySearch;
