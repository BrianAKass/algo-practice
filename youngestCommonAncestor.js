class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// O(d) time | O(1) space d is depth of the tree
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
	const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
	if(depthOne > depthTwo) {
		return backtrackTree(descendantOne, descendantTwo, depthOne - depthTwo);
	} else {
		return backtrackTree(descendantTwo, descendantOne, depthTwo - depthOne);
	}
}

function getDescendantDepth(descendant, topAncestor) {
	let depth = 0;
	while (descendant !== topAncestor){
		depth++
		descendant = descendant.ancestor;
	}
	return depth;
}

function backtrackTree(lowerDescendant, higherDescendant, difference) {
	while (difference > 0) {
		lowerDescendant = lowerDescendant.ancestor
		difference--;
	}
	while (lowerDescendant !== higherDescendant) {
		lowerDescendant = lowerDescendant.ancestor;
		higherDescendant = higherDescendant.ancestor;
	}
	return lowerDescendant
}