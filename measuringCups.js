// O(low * high * n) time and O(low * high) space. n is number of measuring cups
function ambiguousMeasurements(measuringCups, low, high) {
  const memoization = {};
  return canMeasureInRange(measuringCups, low, high, memoization);
}

function canMeasureInRange(measuringCups, low, high, memoization) {
	const memoizeKey = createHashableKey(low, high); // have to make string because...
	if (memoizeKey in memoization) return memoization[memoizeKey]; // in uses INdex IN string
	
	if(low <= 0 && high <= 0) return false;
	
	let canMeasure = false;
	for (const cup of measuringCups) {
		const [cupLow, cupHigh] = cup
		if (low <= cupLow && cupHigh <= high ) {
			canMeasure = true;
			break;
		}
		
		const newLow = Math.max(0, low - cupLow);
		const newHigh = Math.max(0, high - cupHigh);
		canMeasure = canMeasureInRange(measuringCups, newLow, newHigh, memoization);
		if (canMeasure) break;
	}
	memoization[memoizeKey] = canMeasure;
	return canMeasure;
}

function createHashableKey(low, high) {
	return low.toString() + ':'+ high.toString();
}