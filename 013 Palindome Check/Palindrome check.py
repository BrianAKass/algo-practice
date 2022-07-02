# O(n) time | O(n) space
def isPalindrome(string):
    reversedChars = []
	for x in reversed(range(len(string))):
		reversedChars.append(string[x])
	return string == "".join(reversedChars)

# O(n) time | O(n) space
def isPalindrome(string, i=0):
	j = len(string) - 1 - i
	return True if i >= j else string[i] == string[j] and isPalindrome(string, i+1)

# O(n) time | O(1) space
def isPalindrome(string):
	left_index = 0 
	right_index = len(string)-1
	while left_index < right_index:
		if string[left_index] != string[right_index]:
			return False
		left_index += 1
		right_index -= 1
	return True