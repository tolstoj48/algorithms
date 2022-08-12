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
 * @param {array} array To be sorted.
 */
function selectionSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    let minimum = j;
    for(let i = j + 1; i < array.length; i++) {  
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