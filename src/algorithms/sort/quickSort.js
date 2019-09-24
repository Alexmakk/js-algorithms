// QuickSort

const quickSort = arr => {
    if (arr.length <= 1) {
        return arr;
    } else {
        const leftArray = [];
        const rightArray = [];
        
        const pivotElem = Math.floor(Math.random() * arr.length);
        const pivot = arr[pivotElem]        

        for (let i = 0; i < arr.length ; i++ ) {            
            if (arr[i] <= pivot && i != pivotElem) {
                leftArray.push(arr[i]); 

            } else if (arr[i] > pivot) {
                rightArray.push(arr[i]);
            }            
        }
        return  [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } 

}

module.exports = quickSort;
