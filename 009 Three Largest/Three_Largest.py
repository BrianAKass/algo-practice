def findThreeLargestNumbers(array):
  ## I just want to point out o how easy to do this in python it is 
  # array.sort()
  # return array[-3:]
  ## Now I gotta do it the "real" way
    largest = [None,None,None]
  for x in array:
    updateLargest(largest,x)
  return largest
  
  
def updateLargest(arr,x):
  if arr[2] is None or x > arr[2]:
    shiftAndUpdate(arr,x,2)
  elif arr[1] is None or x > arr[1]:
    shiftAndUpdate(arr,x,1)
  elif arr[0] is None or x > arr[0]:
    shiftAndUpdate(arr,x,0)
    
def shiftAndUpdate(arr, num, idx):
  for i in range(idx+1):
    if i == idx:
      arr[i] = num
    else:
      arr[i] = arr[i + 1]