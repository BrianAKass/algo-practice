

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) Time and space n is number of nodes in binary tree
function branchSums(root) {
	const sums =[];
	calculateBranchSums(root, 0 , sums);
	return sums;
}

function calculateBranchSums(node,runningSum, sums){
	if(!node) return;
	
	const newRunningSum = runningSum +node.value;
	if (!node.left && !node.right){
		sums.push(newRunningSum)
		return;
	}
	calculateBranchSums(node.left, newRunningSum, sums);
	calculateBranchSums(node.right, newRunningSum, sums);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
