//O(n*l) time and O(c) space. n for number of words
// l is length for longest word, c for unique characters
function minimumCharactersForWords(words) {
  const maxCharFrequencies = {};
  
  for (const word of words) {
    const charFrequencies = countCharFreq(word);
    updateMaxFreqs(charFrequencies, maxCharFrequencies);
  }
  return arrayFromCharFreqs(maxCharFrequencies);
}

function countCharFreq(string) {
  const count = {};
  for(const char of string) {
    if (!(char in count)){
      count[char] = 0;
    }
    count[char] += 1;
  }
  return count;
}

function updateMaxFreqs(currHash, maxHash) {
  for (const char in currHash) {
    const frequency = currHash[char];
    if (char in maxHash){
      maxHash[char] = Math.max(currHash[char], maxHash[char]);
    } else {
      maxHash[char] = currHash[char];
    }
  } 
}

function arrayFromCharFreqs(hash){
  const characters = [];
  for (const char in hash) {
    const freq = hash[char];
    for (let i = 0; i < freq; i++){
      characters.push(char);
    }
  }
  return characters;
}