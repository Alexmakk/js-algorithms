//search
const binarySearch = require('./src/algorithms/search/binarySearch');
//sort
const quickSort = require('./src/algorithms/sort/quickSort');
const mergeSort = require('./src/algorithms/sort/mergeSort');
const bubbleSort = require('./src/algorithms/sort/bubbleSort');


const arr = [];
for (let i = 0; i < 1000000; i++) {
    arr.push(Math.round(Math.random()*1000000))
}

// console.time('binarySearch');
// console.log(binarySearch([1,2,3,4,5,6,7,8,23,43,41,42,45,53,56], 6));
// console.timeEnd('binarySearch');

console.time('quickSort');
quickSort(arr)
console.timeEnd('quickSort');

console.time('mergeSort');
mergeSort(arr)
console.timeEnd('mergeSort');

console.time('bubbleSort');
bubbleSort(arr)
console.timeEnd('bubbleSort');

console.time('jsSort')
arr.sort(function(a, b) {
  return a - b;
});
// console.log(arr); 
console.timeEnd('jsSort');


