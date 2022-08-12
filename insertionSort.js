/**
* Insertion sort function
* 
* @param {array} array To be sorted.
*/
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while ((j >= 0) && (current < array[j])) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort([3, 8, 11, 4, 1]));
console.log(insertionSort([3,0,4,1]));
console.log(insertionSort([3,3,4,1]));
console.log(insertionSort([3,3]));