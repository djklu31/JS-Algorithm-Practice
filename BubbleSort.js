let array = [2, 1, 3, 4, 2, 100, 23];

function bubbleSort(array) {
  if (array.length < 2) {
    return array;
  }
  let count = array.length - 1;

  while (count > 0) {
    for (let i = 0; i < count; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    count--;
  }

  return array;
}

console.log(bubbleSort(array));
