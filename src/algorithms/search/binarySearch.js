//BinarySearch

 const binarySearch = (sortArr, item) => {
    let first = 0;
    let last = sortArr.length - 1;
    
    while (first <= last) {
        const middle = Math.floor((first+last)/2)
        if (item === sortArr[middle]) {
            return middle;
        } else if (item < sortArr[middle]) {
            last = middle - 1;
        } else {
            first = middle + 1;
        } 
    }
    return -1
}

module.exports = binarySearch;
