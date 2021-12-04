// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// o(n) time | o(1) space
function removeDuplicatesFromLinkedList(linkedList) {
  let currNode = linkedList
	while (currNode != null) {
		let nextUniqueNode = currNode.next;
		while(nextUniqueNode !== null && nextUniqueNode.value === currNode.value ){
			nextUniqueNode = nextUniqueNode.next;
		}
		currNode.next = nextUniqueNode;
		currNode = nextUniqueNode;
	}
	
  return linkedList;
}