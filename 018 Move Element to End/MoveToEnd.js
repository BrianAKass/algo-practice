//O(n) time and O(1) space
// trick: assign variables to start and end indexes and use swap helper function to move any matches to the end, increment and decrement indexes untin i !< j

function moveElementToEnd(array, toMove) {
	let i = 0;
	let j = array.length -1;
	while (i < j){
		while( i < j && array[j] === toMove ) j--;
		if( array[i] === toMove ) swap(i, j, array);
		i++
	}
	return array;
}
function swap(i,j,arr){
	const temp = arr[j];
	arr[j] = arr[i]
	arr[i] = temp;
}
