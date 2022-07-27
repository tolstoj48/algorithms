/**
 * Helper function
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
 * Bubble sort function
 * 
 * @param {array} array To be searched.
 */
function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
      for(let j = 0; j < array.length - 1; j++) {
          if (array[j] > array[j+1]) swap(array, j, j + 1)
      }
  }
  return array;
}

console.log(bubbleSort([3,8,11,4,1]));
console.log(bubbleSort([3,0,4,1]));
console.log(bubbleSort([3,3,4,1]));
console.log(bubbleSort([3,3]));