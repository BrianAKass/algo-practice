// You are given a nested list of intervals 2 digits long.
// (EXAMPLE [[1,2],[3,5],[4,7],[6,8],[9,10]] ) the nested lists
// will be called intervals. we want to return this list of 
// intervals after merging overlapping ones.
//
// Example 
// [1,2] DOES NOT overlap [3,5]
// [3,5] overlaps [4,7] and [6,8]
// Why?
// Because of the range of numbers in the intervals!
// [3,5] =   3,4,5
// [4,7] =     4,5,6,7
// [6,8] = OverLap 6,7,8
// so we merge these three intervals into [3,8]
// Our nested List returns into [[1,2],[3,8],[9,10]]

//o(nLog(n)) time | o(n) space
function mergeOverlappingIntervals(array) {
  let sortedInt = array.sort((a,b)=> a[0] - b[0]);
  let currInt = sortedInt[0];  
  let merged = [currInt];
  
  for(const x of sortedInt){
    const [_ , currEnd] = currInt;
    const [nextStart, nextEnd] = x;
    if(currEnd >= nextStart) currInt[1] = Math.max(currEnd,nextEnd);
    else{
      currInt=x;
      merged.push(currInt);
    }
  }
  return merged;
}


