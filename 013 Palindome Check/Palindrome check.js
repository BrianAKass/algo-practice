// O(n) Time and Space
function isPalindrome(string) {
	const reversedChars = [];
	for (let i = string.length - 1; i >= 0; i--){
		reversedChars.push(string[i]);
	}
	return string === reversedChars.join("");
}

// O(n) Time and Space
function isPalindrome(string, i = 0) {
	const j = string.length - 1 - i;
	return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}



// O(n) Time and O(1) Space
function isPalindrome(string) {
	let leftIdx = 0;
	let rightIdx = string.length - 1;
	while(leftIdx < rightIdx){
		if(string[leftIdx] !== string[rightIdx]) return false;
		leftIdx++;
		rightIdx--;
	}
	return true;
}