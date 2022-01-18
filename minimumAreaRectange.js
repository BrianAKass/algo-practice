// O(n^2) time | O(n) Space
function minimumAreaRectangle(points) {
  const pointSet = createPointSet(points);
	let minimumAreaFound = Infinity;
	
	for (let currentIndex = 0; currentIndex < points.length; currentIndex++) {
		const  [p2x, p2y] = points[currentIndex];
		for (let previousIndex = 0; previousIndex < currentIndex; previousIndex++) {
			const [p1x, p1y] = points[previousIndex];
			const pointsShareValue =  p1x === p2x || p1y === p2y;
			
			if (pointsShareValue) continue;
			
			const point1DiagonalExists = pointSet.has(convertPointToString(p1x, p2y));
			const point2DiagonalExists = pointSet.has(convertPointToString(p2x, p1y));
			
			if (point1DiagonalExists && point2DiagonalExists) {
				const currentArea = Math.abs(p2x - p1x) * Math.abs(p2y - p1y);
				minimumAreaFound = Math.min(minimumAreaFound, currentArea);
			}
		}
	}
	return minimumAreaFound !== Infinity ? minimumAreaFound : 0; 
}

function createPointSet(points) {
	const pointSet = new Set();
	for (const point of points) {
		const [x,y] = point;
		const pointString = convertPointToString(x, y)
		pointSet.add(pointString);		
	}
	return pointSet;
}

function convertPointToString(x, y) {
	return x.toString() + ':' + y.toString();
}





