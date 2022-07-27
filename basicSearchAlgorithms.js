/**
 * Linear search function
 * 
 * @param {array} array To be searched - linear search.
 * @param {value} value Value to be searched.
 */
 function linearSearch(array, value) {
  let result = -1;
  for (let index = 0; index < array.length; index++) {
    array[index] === value ? result = index : result;
  }
  return result;
}

/**
 * Binary search function
 * 
 * @param {array} array To be searched.
 * @param {value} value Value to be searched.
 */
function binarySearch(array, value) {
  let startPointer = 0;
  let endPointer = array.length - 1;
  let middlePointer = Math.floor((startPointer + endPointer) / 2);
  while (array[middlePointer] !== value && startPointer <= endPointer) {
    if (value > array[middlePointer]) startPointer = middlePointer + 1
    if (value < array[middlePointer]) endPointer = middlePointer - 1
    middlePointer = Math.floor((startPointer + endPointer) / 2);
  }
  return array[middlePointer] === value ? middlePointer : -1;
}

console.log(linearSearch([2, 2, 6, 5, 8], 1));
console.log(linearSearch([2, 2, 6, 5, 8], 6));
console.log(linearSearch([2, 2, 6, 5, 8], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));