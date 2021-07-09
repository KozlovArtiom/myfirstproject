let arr = [10, 2, 14, 60, 12, 3, 5, 1];


// function sort(item, i) {
//     const middleNum = arr[Math.round(arr.length/2)];
//     if (item <= middleNum) {
//         lower.push(item);            
//     } else {
//         upper.push(item);
//     }
//     console.log(lower);
//     console.log(upper);
// }

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        let index = quickSort(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call
var result = quickSort(arr, 0, arr.length - 1);
console.log(result);