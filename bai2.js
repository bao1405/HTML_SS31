function timSoLonNhat(...mangArrays) {
    if (mangArrays.length === 0) {
        return [];
    }
    const timSoLonNhatTrongMang = (mang) => {
        return mang.reduce((max, current) => (current > max ? current : max), mang[0]);
    };
    const ketQua = mangArrays.map((mang) => timSoLonNhatTrongMang(mang));
    return ketQua;
}
let mang1 = [3, 7, 2, 9];
let mang2 = [5, 1, 8, 4];
let mang3 = [6, 0, 11, 10];
let ketQua = timSoLonNhat(mang1, mang2, mang3);

console.log("Số lớn nhất trong từng mảng:", ketQua);
