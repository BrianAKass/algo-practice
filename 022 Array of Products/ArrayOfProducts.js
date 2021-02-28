function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
	
	let leftRunningProduct = 1;
	for (let i = 0; i < array.length; i++){
		products[i] = leftRunningProduct;
		leftRunningProduct *= array[i]
	}
	let rightRunningProduct = 1;
	for (let i = array.length - 1; i > -1; i--){
		products[i] *= rightRunningProduct;
		rightRunningProduct *= array[i]
	}
	return products;
}
