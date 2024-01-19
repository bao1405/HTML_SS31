function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
let mangGoc = [1, 2, 3, 4, 5];
let ketQua = fakeFind(mangGoc, function(element) {
    return element % 2 !== 0;
});
let ketQua1 = fakeFind(mangGoc, function(element) {
    return element % 2 === 0;
});
console.log(ketQua);
console.log(ketQua1);