//MergeSort

const merge = (firstArr, secondArr) => {
    const arrSort = [];
    let i = 0;
    let j = 0;      

   while ( i < firstArr.length && j < secondArr.length) {        
       
        if (firstArr[i] < secondArr[j]) {
            arrSort.push(firstArr[i++]);            
        } else {
            arrSort.push(secondArr[j++]);
        }            
        // можно использовать тернарник
        // arrSort.push(
        //     (firstArr[i] < secondArr[j]) ? firstArr[i++] : secondArr[j++]
        // );   
    }    
    return [...arrSort, ...firstArr.slice(i), ...secondArr.slice(j)]
}

const mergeSort = (arr) => {
    if (arr.length < 2 ) {
        return arr
    }
    const middle = Math.floor(arr.length/2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

module.exports = mergeSort;