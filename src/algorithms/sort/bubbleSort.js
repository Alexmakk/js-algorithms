//BubbleSort

const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let check = false;
        for (let j = 0; j < len - i; j++) {
            if(arr[j] > arr[j+1]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
                check = true;
            }
        }
        if (!check) break;   
    }
    return arr;
}

module.exports = bubbleSort;