class BinaryTree:
	def __init__(self,value):
		self.value = value
		self.left = None
		self.right = None

def branchSums(root):
	sums = []
	calculateBranchSums(node,runningSum, sums):
	if node is None:
		return

	newRunningSum = runningSum + node.value
	if node.left is None and node.right is None:
		sums.append(newRunningSum)
		return 
	calculateBranchSums(node.left, newRunningSum,Sums)
	calculateBranchSums(node.right, newRunningSum,Sums)