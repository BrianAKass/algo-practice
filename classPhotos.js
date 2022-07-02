function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a,b)=>{return b-a});
  blueShirtHeights.sort((a,b)=>{return b-a});
  let backRow;
  let frontrow;
  if (redShirtHeights[0] < blueShirtHeights[0]){
    backRow = blueShirtHeights;
    frontRow = redShirtHeights;
  } else{
    backRow = redShirtHeights;
    frontRow = blueShirtHeights;
  }
  for (let i=0; i < frontRow.length; i++){
    if (frontRow[i] >= backRow[i]){
    	return false;
    }
  }
  return true;
}
