/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let countOftriangles = 0;

  for (let i = 0; i < preferences.length; i++) {
    let spichonee = preferences[i];
    let nextSpichonee = preferences[spichonee - 1];
    let prevSpichonee = preferences[nextSpichonee - 1];
    
    //check repetition of combinations and the link
    if ( i < spichonee - 1 && i < nextSpichonee - 1 && i === prevSpichonee - 1) {
      countOftriangles++; 
    } 
  }
  return countOftriangles;
};
