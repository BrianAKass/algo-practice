#o(n) time and space

def arrayOfProducts(array):
    # Create a list of ones.
    products = [1 for _ in range(len(array))]

    leftRunningProduct = 1
    # for loop the array length
    for i in range(len(array)):
        products[i] = leftRunningProduct
        leftRunningProduct *= array[i]

    rightRunningProduct = 1
    for i in reversed(range(len(array))):
        products[i] *= rightRunningProduct
        rightRunningProduct *= array[i]

    return products
