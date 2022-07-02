# When not memoized O(2^n) Time | O(n) space
#When Memoized O(n) Time and space

def getNthFib(n):
	if (n==2):
		return 1
	elif (n==1):
		return 0
	else:
		return getNthFib(n-1)+getNthFib(n-2)

def memoize:
	cache = {}
	def helper(x):
		if x not in cache:
			cache[x] = f(x)
		return cache[x]
	return helper

###############

def getNthFib(n, memoize = { 1:0, 2:1 }):
	if n in memoize:
		return memoize[n]
	else:
		memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2, memoize)
		return memoize[n]

###############


def getNthFib(n):
    lastTwo = [0,1]
	counter = 3
	while counter <=n:
		nextFib = lastTwo[0] + lastTwo[1]
		lastTwo[0] = lastTwo[1]
		lastTwo[1] = nextFib
		counter+=1
	return lastTwo[1] if n > 1 else lastTwo[0]
