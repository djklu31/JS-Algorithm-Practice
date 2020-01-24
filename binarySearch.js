function binarySearch(array, target, low, high) {
  mid = Math.floor((high + low) / 2);
  console.log(
    `high is ${high}, mid is ${mid}, low is ${low}, target is ${target}`
  );

  if (low > high) {
    return false;
  }

  if (target === array[mid]) {
    return true;
  } else if (target > array[mid]) {
    // console.log("GO HERE");
    low = mid + 1;
    return binarySearch(array, target, low, high);
  } else if (target < array[mid]) {
    // console.log("GO right");
    high = mid - 1;
    return binarySearch(array, target, low, high);
  }
}

let sortedArray = [1, 2, 3, 4, 5, 6];
let low = 0;
let high = sortedArray.length - 1;
let mid = (sortedArray.length - 1) / 2;
// let sortedArray = array.sort();

console.log(binarySearch(sortedArray, 7, low, high));
