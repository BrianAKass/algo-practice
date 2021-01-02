# O(n^2) Time and O(1) Space best, average and worst.

def swap(x,y,arr):
	arr[x], arr[y] = arr[y], arr[x]

def selectionSort(array):
	currIdx = 0 
	while currIdx < len(array)-1:
		smallestIdx = currIdx
		for x in range(currIdx+1, len(array)):
			if arr[smallesIdx] > arr[x]:
				smallestIdx = x
		swap(currIdx, smallestIdx,arr)
		currIdx += 1
	return array