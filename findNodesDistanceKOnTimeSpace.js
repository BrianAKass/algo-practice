class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time and space n for nodes in tree
function findNodesDistanceK(tree, target, k) {
  const nodesDistanceK = []
	findDistanceFromNodeToTarget(tree, target,k, nodesDistanceK);
  return nodesDistanceK;
}

function findDistanceFromNodeToTarget(node, target, k, nodesDistanceK){
	if (node === null) return -1;
	
	if (node.value === target){
		addSubtreeNodeAtDstanceK(node, 0, k, nodesDistanceK);
		return 1;
	}
	const leftDistance = findDistanceFromNodeToTarget(node.left, target, k, nodesDistanceK);
	const rightDistance = findDistanceFromNodeToTarget(node.right, target, k, nodesDistanceK);
	
	if (leftDistance === k || rightDistance === k) nodesDistanceK.push(node.value);
	if (leftDistance !== -1) {
		addSubtreeNodeAtDstanceK(node.right, leftDistance + 1, k, nodesDistanceK);
		return leftDistance + 1;
	}
	if (rightDistance !== -1) {
		addSubtreeNodeAtDstanceK(node.left, rightDistance + 1, k, nodesDistanceK);
		return rightDistance + 1; 
	}
	return -1;
}

function addSubtreeNodeAtDstanceK(node, distance, k, nodesDistanceK){
	if (node === null) return;
	if (distance === k) nodesDistanceK.push(node.value);
	else {
		addSubtreeNodeAtDstanceK(node.left, distance + 1, k, nodesDistanceK)
		addSubtreeNodeAtDstanceK(node.right, distance + 1, k, nodesDistanceK)
	}
}