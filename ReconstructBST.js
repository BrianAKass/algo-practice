
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
	constructor(rootIndex) {
		this.rootIndex = rootIndex;
	}
}
// O(n) time and space n = length of input array
function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0); 
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo) {
	if (currentSubtreeInfo.rootIndex === preOrderTraversalValues.length) return null;
	
	const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIndex];
	if(rootValue < lowerBound || rootValue >= upperBound) return null;
	
	currentSubtreeInfo.rootIndex++;
	const leftSubTree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
	const rightSubTree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
	return new BST(rootValue, leftSubTree, rightSubTree); 
}









           		