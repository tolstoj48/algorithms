/**
 * Helper function for switching and getting pivot value.
 * 
 * @param {arr} arr To be changed.
 * @param {start} start The starting element index.
 * @param {end} end The last element index.
 */
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

/**
 * Quick sort function.
 * 
 * @param {arr} arr To be sorted.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 4, 3, 1, 6, 7, 2]))