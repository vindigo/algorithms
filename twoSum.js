function twoSum(arr, sum){
    var pairs = [],
        hashTable = [],    
        currentNum, counterPart;

    for (var i = 0; i < arr.length; i++){
        currentNum = arr[i];
        counterPart = sum - currentNum;

        if (hashTable.indexOf(counterPart) !== -1){
            pairs.push([currentNum, counterPart]);
        } 

        hashTable.push(currentNum);
    }

    return pairs;
}

var arr = [1, 6, 4, 5, 3, 3];

console.log( twoSum(arr, 7) );