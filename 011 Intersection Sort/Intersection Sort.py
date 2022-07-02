def insertionSort(array):
	for i in range(len(array)):
		j = i
		while j > 0 and array[j] < array[j - 1]:
			swap(j, j - 1, array)
			j -= 1
	return array

def swap(a, b, array):
	array[a], array[b] = array[b], array[a]