
class Node {
  constructor(row, col, value) {
    this.id = row.toString() + '-' + col.toString();
    this.row = row;
    this.col = col;
    this.value = value;
    this.distanceFromStart = Infinity;
    this.estimatedDistanceToEnd = Infinity;
    this.cameFrom = null;
  }
}

// O(w * h * log(w * h)) time | O(w * h) space - where
// w is the width of the graph and h is the height
function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  const nodes = initializeNodes(graph);
    
  const startNode = nodes[startRow][startCol];
  const endNode = nodes[endRow][endCol];

  startNode.distanceFromStart = 0;
  startNode.estimatedDistanceToEnd = calculateManhattanDistance(startNode, endNode);

  const nodesToVisit = new MinHeap([startNode]);

  while (!nodesToVisit.isEmpty()) {
    const currentMinDistanceNode = nodesToVisit.remove();
        
    if (currentMinDistanceNode === endNode) break;

    const neighbors = getNeighboringNodes(currentMinDistanceNode, nodes);
    for (const neighbor of neighbors) {
      if (neighbor.value == 1) continue;

      const tentativeDistanceToNeighbor = currentMinDistanceNode.distanceFromStart + 1;

      if (tentativeDistanceToNeighbor >= neighbor.distanceFromStart) continue;

      neighbor.cameFrom = currentMinDistanceNode;
      neighbor.distanceFromStart = tentativeDistanceToNeighbor;
      neighbor.estimatedDistanceToEnd = tentativeDistanceToNeighbor + calculateManhattanDistance(neighbor, endNode);

      if (!nodesToVisit.containsNode(neighbor)) {
        nodesToVisit.insert(neighbor);
      } else {
        nodesToVisit.update(neighbor);
      }
    }
  }

  return reconstructPath(endNode);
}

// HELPER FUNCTION 1
function initializeNodes(graph) { 
    const nodes = [];
    
    for (const [i, row] of graph.entries()) {
        nodes.push([]);
        for (const [j, value] of row.entries()) {
            const node = new Node(i, j, value);
            nodes[i].push(node);
        }
    }
    
    return nodes;
}

// HELPER FUNCTION 2
function calculateManhattanDistance(currentNode, endNode) {
    const currentRow = currentNode.row;
    const currentCol = currentNode.col;
    const endRow = endNode.row;
    const endCol = endNode.col;
    
    return Math.abs(currentRow - endRow) + Math.abs(currentCol - endCol)
}

// HELPER FUNCTION 4
function getNeighboringNodes(node, nodes) {
    const neighbors = [];
    
    const numRows = nodes.length;
    const numCols = nodes[0].length;
    const row = node.row;
    const col = node.col;
    
    if (row < numRows - 1) {
        // down
        neighbors.push(nodes[row + 1][col]);
    }
    if (row > 0) {
        // up
        neighbors.push(nodes[row - 1][col]);
    }
    
    if (col < numCols - 1) {
        // right 
        neighbors.push(nodes[row][col + 1]);
    }
    if (col > 0) {
        // left
        neighbors.push(nodes[row][col - 1]);
    }
    
    return neighbors;
}

// HELPER FUNCTION 3 
function reconstructPath(endNode) {
    if(endNode.cameFrom == null) {
        return [];
    }
    
    let currentNode = endNode;
    const path = [];
    
    while (currentNode != null) {
        path.push([currentNode.row, currentNode.col]);
        currentNode = currentNode.cameFrom;
    }
    
    path.reverse();
    
    return path;
}

class MinHeap {
    constructor(array) {
        // Holds the position in the heap that each node is at
        this.nodePositionsInHeap = array.reduce((obj, node, i) => {
            obj[node.id] = i;
            return obj;
        }, {});
        this.heap = this.buildHeap(array);
    }
    
    isEmpty() {
        return this.heap.length == 0;
    }
    
    //O(n) time | O(1) space
    buildHeap(array) {
        const firstParentIndex = Math.floor((array.length - 2) / 2);
        for (let currentIndex = firstParentIndex; currentIndex >= 0; currentIndex--) {
            this.shiftDown(currentIndex,array.length - 1, array);
        }
        return array;
    }
    
    // O(log(n)) time | O(1) space
    siftDown(currentIndex, endIndex, heap) {
        let childOneIndex = currentIndex * 2 + 1;
        while (childOneIndex <= endIndex) {
            const childTwoIndex = currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
            let indexToSwap;
            if(childTwoIndex !== -1 && heap[childTwoIndex].estimatedDistanceToEnd < heap[childOneIndex].estimatedDistanceToEnd) {
                indexToSwap = childTwoIndex;
            } else {
                indexToSwap = childOneIndex;
            }
            if (heap[indexToSwap].estimatedDistanceToEnd < heap[currentIndex].estimatedDistanceToEnd) {
                this.swap(currentIndex, indexToSwap, heap);
                currentIndex = indexToSwap;
                childOneIndex = currentIndex * 2 + 1;
            } else {
                return;
            }
        }
    }
    
    // O(log(n)) time | O(1) space
    siftUp(currentIndex, heap) {
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        while( currentIndex > 0 && heap[currentIndex].estimatedDistanceToEnd < heap[parentIndex].estimatedDistanceToEnd) {
            this.swap(currentIndex, parentIndex, heap);
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }
    
    // O(log(n)) time | O(1) space
    remove() {
        if (this.isEmpty()) return;
        
        this.swap(0, this.heap.length - 1, this.heap);
        const node = this.heap.pop();
        delete this.nodePositionsInHeap[node.id];
        this.siftDown(0, this.heap.length - 1, this.heap);
        return node;
    }
    
  // O(log(n)) time | O(1) space
  insert(node) {
    this.heap.push(node);
    this.nodePositionsInHeap[node.id] = this.heap.length - 1;
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    this.nodePositionsInHeap[this.heap[i].id] = j;
    this.nodePositionsInHeap[this.heap[j].id] = i;
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
  containsNode(node) {
    return node.id in this.nodePositionsInHeap;
  }

  update(node) {
    this.siftUp(this.nodePositionsInHeap[node.id], this.heap);
  }
}



// Do not edit the line below.
exports.aStarAlgorithm = aStarAlgorithm;