//MergeSort

const merge = (firstArr, secondArr) => {
    const arrSort = [];
    let i = 0;
    let j = 0;

    while ( i < firstArr.length && j < secondArr.length) {
        // console.log(i, j)
        arrSort.push(
            (firstArr[i] < secondArr[j]) ? firstArr[i++] : secondArr[j++]
        );
        console.log('firstArr: ', firstArr[i++])         
        console.log('secondArr: ', secondArr[i++])         
    }
    
    return [...arrSort, ...firstArr.slice(i), ...secondArr.slice(j)]
}


const mergeSort = (arr) => {
    if (arr.lenght < 2 ){
        return arr
    }

    console.log(arr)

}

module.exports = merge;