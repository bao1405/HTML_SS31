function fakeFilter(arr, callback) {
    let ketQua = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            ketQua.push(arr[i]);
        }
    }
    return ketQua;
}
let mangGoc = [1, 2, 3, 4, 5];
let ketQua = fakeFilter(mangGoc, function(element) {
    return element % 2 === 0;
});
let ketQua1 = fakeFilter(mangGoc, function(element) {
    return element % 2 !== 0;
});
console.log(ketQua);
console.log(ketQua1);
