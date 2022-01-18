// O(n^2) time | O(n) space
function lineThroughPoints(points) {
  let maxNumPointsOnLine = 1;
	
	for( let index1 = 0; index1 < points.length; index1++) {
		const p1 = points[index1];
		const slopes = {};
		for (let index2 = index1 + 1; index2 < points.length; index2++) {
			const p2 = points[index2];
			const [rise, run] = getSlopeOfLineBetweenPoints(p1, p2);
			const slopeKey = createHashableKeyForRational(rise, run);
			if (!(slopeKey in slopes)) slopes[slopeKey] = 1;
			
			slopes[slopeKey]++;
		}
		
		const currentMaxPointsOnLine = Object.values(slopes).reduce((a, b) => Math.max(a, b), 0);
		maxNumPointsOnLine = Math.max(maxNumPointsOnLine, currentMaxPointsOnLine);
	}
  return maxNumPointsOnLine;
}

function getSlopeOfLineBetweenPoints(p1, p2) {
	const [p1x, p1y] = p1;
	const [p2x, p2y] = p2;
	let slope = [1, 0]; // slope of vertical lines
	
	if (p1x !== p2x) {
		// if line is not vertical
		let xDiff = p1x - p2x;
		let yDiff = p1y - p2y;
		let gcd = getGreatestCommonDivisor(Math.abs(xDiff), Math.abs(yDiff));
		xDiff = Math.floor(xDiff / gcd);
		yDiff = Math.floor(yDiff / gcd);
		if (xDiff < 0) {
			xDiff *= -1;
			yDiff *= -1;
		}
		slope = [yDiff, xDiff];
	}
	return slope;
}

function createHashableKeyForRational(numerator, denomonator) {
	return numerator.toString() + ":" + denomonator.toString();
}

function getGreatestCommonDivisor(num1, num2) {
	let a = num1;
	let b = num2;
	while (true) {
		if (a === 0) return b;
		if (b === 0) return a;
		
		const tempA = a;
		a = b;
		b = tempA % b;
	}
}