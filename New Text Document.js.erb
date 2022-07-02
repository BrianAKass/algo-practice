// O(w^2*h) time | O(w) space 
function waterfallStreams(array, source) {
  let rowAbove = [...array[0]]
	rowAbove[source] = -1;
	
	for (let row = 1; row < array.length; row++) {
		const currentRow = [...array[row]];
		
		for (let index = 0; index < rowAbove.length; index++) {
			const valueAbove = rowAbove[index];
			
			const hasWaterAbove = valueAbove < 0; 
			const hasBlock = currentRow[index] === 1;
			
			if (!hasWaterAbove) {
				continue;
			}
			if (!hasBlock) {
				currentRow[index] += valueAbove;
				continue;
			}
			const splitWater = valueAbove / 2;
			
			// move water to right
			let rightIndex = index;
			while (rightIndex + 1 < rowAbove.length) {
				rightIndex++;
				if (rowAbove[rightIndex] === 1) {
					// block in way
					break;
				}
				if(currentRow[rightIndex] !== 1) {
					// no block
					currentRow[rightIndex] += splitWater;
					break;
				}
			}
			// move water to left
			let leftIndex = index;
			while (leftIndex - 1 < rowAbove.length) {
				leftIndex--;
				if (rowAbove[leftIndex] === 1) {
					// block in way
					break;
				}
				if(currentRow[leftIndex] !== 1) {
					// no block
					currentRow[leftIndex] += splitWater;
					break;
				}
			}
		}
		rowAbove = currentRow;
	}
	//convert negatives to pos
	const finalPercentages = rowAbove.map(num=> (num < 0 ? num * -100 : num));
	
	return finalPercentages;
}