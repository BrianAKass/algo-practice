function isMonotonic(array) {
  let isNonIncreasing = true;
  let isNonDecreasing = true;
  for (let i = 1; i <array.length; i++) {
    if (array[i] < array[i-1]) isNonDecreasing = false;
    if (array[i] > array[i-1]) isNonIncreasing = false;
  }
  return isNonIncreasing || isNonDecreasing;
}
