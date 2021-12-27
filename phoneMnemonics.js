// O(4^n*n) number of combinations exponential to n times length of phone number for time 
// and space complexity.
function phoneNumberMnemonics(phoneNumber) {
  const currentMnemonic = new Array(phoneNumber.length).fill("0");
  const mnemonicsFound = [];
	phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
	return mnemonicsFound;
}


function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound){
	if (idx === phoneNumber.length){ 
		const mnemonic = currentMnemonic.join('');
		mnemonicsFound.push(mnemonic)
	} else {
		const digit = phoneNumber[idx];
		const letters = digitLetters[digit];
		for(const letter of letters){
			currentMnemonic[idx] = letter
			phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound)
		}
	}
}
/// [2 3]
/// [0 0]
/// [a 0] appends => [a d] [a e] [a f]
/// [b 0] appends => [b d] [b e] [b f]

const digitLetters = {
	0: ['0'], 1: ['1'], 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
}



