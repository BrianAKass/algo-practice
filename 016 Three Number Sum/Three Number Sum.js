// o(n^2) time | o(n) space
function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a - b); // sort 
	const triplets = [];
	for (let i = 0; i < array.length - 2; i++){
		let left = i + 1; // past the starting index by 1
		let right = array.length - 1 // checks the final index 
		while (left < right){
			const currentSum = array[i] + array[left] + array[right]
			if (currentSum === targetSum){
				triplets.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum){
				left++;
			} else if (currentSum > targetSum){
				right--;
			}	
		}
	}
	return triplets;
}
