# O(n) Time | O(1) space

def isValidSubsequence(array, sequence):
    # Write your code here.
	arrIdx = 0 
	seqIdx = 0 
	while arrIdx < len(array) and seqIdx < len(sequence):
		if array[arrIdx] == sequence[seqIdx]:
			seqIdx += 1
		arrIdx += 1
	return seqIdx == len(sequence)


# O(n) Time | O(1) space

def isValidSubsequence(array, sequence):
    # Write your code here.
    seqIdx = 0 
	for value in array:
		if seqIdx == len(sequence):
			break
		if sequence[seqIdx] == value:
			seqIdx += 1
	return seqIdx == len(sequence)
