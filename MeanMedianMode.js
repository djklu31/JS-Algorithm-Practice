function MeanMedianMode(array) {
  this.mean = getMean(array);
  this.median = getMedian(array);
  this.mode = getMode(array);
}

MeanMedianMode.prototype.printAll = function() {
  console.log(
    `Mean is ${this.mean}, Median is ${this.median}, Mode is ${this.mode}`
  );
};

function getMean(array) {
  let total = 0;
  let len = array.length;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / len;
}
//[1,1,1,1,1,1]
function getMedian(array) {
  let sortedArray = array.sort((a, b) => {
    console.log("a:" + a);
    console.log("b:" + b);
    a - b;
  });
  console.log(sortedArray);
  let mid = Math.floor((sortedArray.length - 1) / 2);
  return sortedArray[mid];
}

function getMode(array) {
  let ht = {};
  let greatest = 0;
  let mode = 0;

  for (let i = 0; i < array.length; i++) {
    if (ht[array[i]]) {
      ht[array[i]]++;
      if (ht[array[i]] > greatest) {
        greatest = ht[array[i]];
        mode = array[i];
      }
    } else {
      ht[array[i]] = 1;
      if (1 > greatest) {
        greatest = ht[array[i]];
        mode = array[i];
      }
    }
  }

  return mode;
}

let meanMedianMode = new MeanMedianMode([10, 2, 3, 4, 8, 6, 9, 9, 10, 10]);
meanMedianMode.printAll();
