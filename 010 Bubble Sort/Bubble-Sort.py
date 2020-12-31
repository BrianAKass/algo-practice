# Best - O(n) Time | O(1) Space
# Average - O(n^2) Time | O(1) Space
# Worst - O(n^2) Time | O(1) Sace
def bubbleSort(array):
	isSorted = False
	counter = 0 
	while not isSorted:
		isSorted = True
		for i in range(len(array) - 1 - counter):
			if array[i] > array[i + 1]:
				swap(i, i + 1, array)
				isSorted = False
		counter += 1


# method 2

def bubbleSort(array):
    for x in range(0,len(array)):
		for y in range(0,len(array)-x-1):
			if array[y] > array[y+1]:
				temp = array[y+1]
				array[y+1] = array[y]
				array[y] = temp
	return array
