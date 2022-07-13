/**
 * Simple recursive function
 * 
 * @param {number} number The number to decrement.
 */
function countDown(number) {
  // Base case
  if (number <= 0) {
    console.log('All done!');
    return;
  }
  console.log(number);
  // Step toward base case
  number--;
  countDown(number);
}

/**
 * Recursive sum function
 * 
 * @param {number} number The number to be sumed and is decremented each step.
 */
function sumRange(number) {
  // Base case
  if (number === 1) return 1;
  // Step toward base case
  return number + sumRange(--number);
}

/**
 * Factorial function recursively
 * 
 * @param {number} number The number to be multiplied and is decremented each step.
 */
function factorial(number) {
  // Base case
  if (number === 1) return 1;
  // Step toward base case
  return number * factorial(--number);
}

/**
 * Function for collection of all even numbers from an array - recursive
 * 
 * @param {array} array An array, whose even values should be returned.
 */
function collectEvenValues(array) {
  // Result array
  let arrayOfEvenValues = [];
  // Helper recursive method for collection
  function helper(array) {
    // Base case - length of 1 and even collected
    if (array.length === 1) return array[0] % 2 === 0 ? arrayOfEvenValues.push(array[0]) : undefined;
    // If it is even, must be collected to the result
    if (array[0] % 2 === 0) arrayOfEvenValues.push(array[0]);
    // Toward base case
    return helper(array.slice(1));
  }
  // Helper function´s invocation
  helper(array);
  // Returning the result
  return arrayOfEvenValues;
}

countDown(10);
console.log(sumRange(3));
console.log(factorial(5));
console.log(collectEvenValues([1, 2, 3, 4]));