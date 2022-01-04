class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time | O(n) space - where n is the number of nodes in the tree
function findNodesDistanceK(tree, target, k) {
  const nodesToParents = {};
  populateNodesToParents(tree, nodesToParents);
  const targetNode = getNodeFromValue(target, tree, nodesToParents);
  return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k);
}
function breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
  // We could use a more legitimate queue structure instead of a standard
  // array if we wanted to optimize our `.shift() operations.`
  const queue = [[targetNode, 0]];
  const seen = new Set([targetNode.value]);
  while (queue.length > 0) {
    const [currentNode, distanceFromTarget] = queue.shift();
    if (distanceFromTarget === k) {
      const nodesDistanceK = queue.map(pair => pair[0].value);
      nodesDistanceK.push(currentNode.value);
      return nodesDistanceK;
    }
    const connectedNodes = [currentNode.left, currentNode.right, nodesToParents[currentNode.value]];
    for (const node of connectedNodes) {
      if (node === null) continue;
      if (seen.has(node.value)) continue;
      seen.add(node.value);
      queue.push([node, distanceFromTarget + 1]);
    }
  }
  return [];
}
function getNodeFromValue(value, tree, nodesToParents) {
  if (tree.value === value) return tree;
  const nodeParent = nodesToParents[value];
  if (nodeParent.left !== null && nodeParent.left.value === value) return nodeParent.left;
  return nodeParent.right;
}
function populateNodesToParents(node, nodesToParents, parent = null) {
  if (node !== null) {
    nodesToParents[node.value] = parent;
    populateNodesToParents(node.left, nodesToParents, node);
    populateNodesToParents(node.right, nodesToParents, node);
  }
}
