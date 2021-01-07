// O(n) Time and space complexity

function caesarCipherEncryptor(string, key) {
  const newLetter = []
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	const newKey = key % 26;
	for (const letter of string){
		newLetter.push(getNewLetter(letter, newKey, alphabet))
	}
	return newLetter.join('');
}
function getNewLetter(letter,key, alphabet){
	const newIndex = alphabet.indexOf(letter) + key;
	return alphabet[newIndex % 26];
}


// simplified

function caesarCipherEncryptor(string, key) {
	const newLetters = [];
	const newKey = key % 26;
	for (const letter of string){
		newLetters.push(getNewLetter(letter, newKey));
	}
  return newLetters.join('');
}
function getNewLetter(letter,key){
	const newLetterCode = letter.charCodeAt(letter)+key;
	return newLetterCode <=122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122)) 
}