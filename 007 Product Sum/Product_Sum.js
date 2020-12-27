// O(n) Time | O(d) space n = elements d = depth


function productSum(array, multipler = 1){ 
	let sum = 0
	for (const element of array){
		if (Array.isArray(element)){
			sum += productSum(element, multipler + 1)
		} else {
			sum += element;
		}
	}
	return sum * multipler;
}