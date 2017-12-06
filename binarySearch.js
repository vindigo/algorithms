function binarySearch(arr, key){
    var midIndex = Math.floor(arr.length / 2),
        midElement = arr[midIndex];

        if (midElement === key){
            return true;
        }

        if (midElement < key && arr.length > 1){
            return binarySearch(arr.splice(midIndex, arr.length),key);
        } else if (midElement > key && arr.length > 1){
            return binarySearch(arr.splice(0, midIndex), key);
        } else {
            return false;
        }
}

var arr = [5, 7, 12, 16, 36, 39, 42, 56, 71];

console.log(binarySearch(arr, 56));