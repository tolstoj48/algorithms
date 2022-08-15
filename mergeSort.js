/**
 * Helper function for merging arrays.
 * 
 * @param {firstArray} array To be merged
 * @param {secondArray} array To be merged
 */
function merge(firstArray, secondArray) {
  let resultArray = [];
  let i = 0;
  let j = 0;
  while (i < firstArray.length && j < secondArray.length) {
    if (secondArray[j] > firstArray[i]) {
      resultArray.push(firstArray[i]);
      i++;
    } else {
      resultArray.push(secondArray[j]);
      j++;
    }
  }
  while (i < firstArray.length) {
    resultArray.push(firstArray[i]);
    i++;
  }
  while (j < secondArray.length) {
    resultArray.push(secondArray[j]);
    j++;
  }

  return resultArray;
}

/**
 * 
 * @param {array} array To be sorted.
 * @returns sorted array.
 */
function mergeSort(array) {
  if (array.length == 0 || array.length == 1) {
    return array;
  }
  let firstHalf = array.slice(0, Math.floor(array.length / 2));
  let secondHalf = array.slice(Math.floor(array.length / 2));
  let result = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  return result;
}

console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([10, 21, 7, 3, 4, 5]));
console.log(mergeSort([1, 2, 1, 3, 4, 5]));
console.log(mergeSort([1, 2, 22, 2, 4, 3]));