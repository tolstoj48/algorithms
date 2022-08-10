/**
 * Helper function for switching elements.
 * 
 * @param {array} array To be changed.
 * @param {idx1} idx1 for the swap.
 * @param {idx2} idx2 for the swap.
 */
 function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
 }

 /**
 * Selection sort function
 * 
 * @param {array} array To be searched.
 */
function selectionSort(array) {
  // From 1 to the end
  for (let j = 0; j < array.length - 1; j++) {
    let minimum = j;
  // Must compare the ith element with all the smaller
    for(let i = j + 1; i < array.length; i++) {  
  // Musí pokaždé najít nejmenší a vložit na začátek pole
      if (array[minimum] > array[i]) minimum = i;
      }
    if (minimum != j) swap(array, minimum, j)
  }
  return array;
}

console.log(selectionSort([3,8,11,4,1]));
console.log(selectionSort([3,0,4,1]));
console.log(selectionSort([3,3,4,1]));
console.log(selectionSort([3,3]));