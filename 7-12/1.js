var arr = [1,3,4,5,8,10,11];

function find(arr, lookFor) {
    var low = 0;
    var high = arr.length - 1;
    while(low <= high) {
       var middle = Math.round((low + high) / 2);
       if (arr[middle] === lookFor) {
           return middle;
       } else if (arr[middle] < lookFor) {
           low = middle + 1;
       } else {
           high = middle - 1;
       }
    }
    return -1;
}

find(arr, 8);
