// O(1)  constant time and space due to finite output and input.
function validIPAddresses(string) {
  let ipAddresses = []
	for (let i = 0; i < Math.min(string.length, 4); i++) {
		const currIpParts = ['','','',''];
		
		currIpParts[0] = string.slice(0,i);
		if(!isValid(currIpParts[0])) continue; // i++ this wont work
		
		for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
			currIpParts[1] = string.slice(i,j);
			if(!isValid(currIpParts[1])) continue; // j++ this wont work
			
			for(let k = j + 1; k < j + Math.min(string.length - j, 4); k++ ) {
				currIpParts[2] = string.slice(j,k);
				currIpParts[3] = string.slice(k);
				
				if (isValid(currIpParts[2]) && isValid(currIpParts[3])) {
					ipAddresses.push(currIpParts.join('.'));
				}
			}
		}
	}
  return ipAddresses;
}


function isValid(string){
	const stringToInt = parseInt(string);
	if (stringToInt > 255) return false;
	
	return string.length === stringToInt.toString().length;
}



