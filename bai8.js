function fakeReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
let mangGoc = [1, 2, 3, 4, 5];
let ketQua = fakeReduce(mangGoc, function(acc, curr) {
    return acc + curr;
}, 0);
console.log(ketQua);