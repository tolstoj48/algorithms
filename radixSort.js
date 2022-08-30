/**
 * Helper function for getting digit on specific place.
 * 
 * @param {wholeNumber} wholeNumber To be get the digit.
 * @param {place} place The place we want to get digit from.
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Helper function for getting the number of digits in a number.
 * 
 * @param {num} num Examined number´s length.
 */
function digitCount(num) {
  return num.toString().length;
}

/**
 * Helper function for getting the longest number from array.
 * 
 * @param {arr} arr Array of numbers we choose from.
 */
function mostDigits(arr) {
  let maxDigits = 0;
  arr.forEach(number => {
    if (digitCount(number) > maxDigits) maxDigits = digitCount(number);
  });
  return maxDigits;
}

/**
 * Radix sort algorithm.
 * @param {arr} arr 
 * @returns Sorted arr.
 */

function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let arrayOfArrays = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      arrayOfArrays[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...arrayOfArrays);
  }
  return arr;
}

console.log(radixSort([123, 12, 3, 579]));