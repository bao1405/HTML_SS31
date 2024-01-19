function chunkArrayInGroups(arr, n) {
    const soLuongMangCon = Math.ceil(arr.length / n);
    let mangKetQua = [];
    for (let i = 0; i < soLuongMangCon; i++) {
        let batDau = i * n;
        let ketThuc = batDau + n;
        mangKetQua.push(arr.slice(batDau, ketThuc));
    }
    return mangKetQua;
}
let mangGoc = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ketQua = chunkArrayInGroups(mangGoc, 4);

console.log(ketQua);