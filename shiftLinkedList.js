// O(n) Time | O(1) space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  let listTail = head;
	let listLength = 1;
	while (listTail.next != null) {
		listTail = listTail.next;
		listLength++;
	}
	
	let offset = Math.abs(k) % listLength;
	if (offset === 0) return head;
	
	const newTailPosition = (k > 0) ? listLength - offset : offset; 
	let newTail = head;
	for (let i = 1; i < newTailPosition; i++) {
		newTail = newTail.next;
	}
	
	const newHead = newTail.next;
	newTail.next = null;
	listTail.next = head;
	return newHead;
}

