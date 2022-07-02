# O(log(n)) Time| O(log(n)) space

def binarySearch(array, target):
	return helper(array,target, 0, len(array) - 1)

def helper(array,target, left, right):
	if left > right:
		return -1
	mid = (right + left) // 2
	midVal = array[mid]
	if target == midVal:
		return mid
	elif target < midVal:
		return helper(array, target, left, mid - 1)
	else:
		return helper(array, target, mid + 1, right)

# O(log(n)) Time | O(1) Space

def binarySearch(array, target):
	return helper(array,target, 0, len(array) - 1)

def helper(array,target, left, right):
	while left <= right:
		middle = (left + right) // 2
		potentialMatch = array[middle]
		if target == potentialMatch:
			return middle
		elif target < potentialMatch:
			right = middle - 1
		else:
			left = middle + 1
	return -1