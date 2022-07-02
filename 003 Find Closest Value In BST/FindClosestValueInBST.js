// Average O(log(n)) time | O(log(n)) space
// Worst O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree,target,tree.value);
}

function findClosestValueInBstHelper(tree,target,closest){
	if (tree == null) return closest;
	if (Math.abs(target-closest) > Math.abs(target-tree.value)){
		closest = tree.value
	}
	if (target < tree.value) {
		return findClosestValueInBstHelper(tree.left,target,closest);
	} else if ( target > tree.value){
		return findClosestValueInBstHelper(tree.right,target,closest);
	}
	return closest;
}


// METHOD 2


// Average O(log(n)) time | O(log(n)) space
// Worst O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
	return findClosestValueInBstHelper(tree,target,tree.value);	
}

function findClosestValueInBstHelper(tree,target,closest){
	let currentNode = tree;
	while(currentNode != null){
		if(Math.abs(target-closest) > Math.abs(target-currentNode.value)){
			closest = currentNode.value
		}
		if (target < currentNode.value){
			currentNode = currentNode.left;
		} else if (target > currentNode.value){
			currentNode = currentNode.right;
		}else{
			break;
		}
	}
	return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}