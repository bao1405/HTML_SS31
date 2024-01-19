function timTuDaiNhat(chuoi) {
    let tuList = chuoi.split(/\s+/);
    let tuDaiNhat = tuList.reduce((tuMax, tuHienTai) => tuHienTai.length > tuMax.length ? tuHienTai : tuMax, "");
    let tuDaiNhatKhac = tuList.filter(tu => tu.length === tuDaiNhat.length);
    if (tuDaiNhatKhac.length > 1) {
        return { tu: tuDaiNhatKhac[0], doDai: tuDaiNhatKhac[0].length };
    } else {
        return { tu: tuDaiNhat, doDai: tuDaiNhat.length };
    }
}
let chuoiInput = "The quick brown fox jumped over the lazy dog";
let ketQua = timTuDaiNhat(chuoiInput);
console.log(`Từ dài nhất là '${ketQua.tu}' với độ dài ${ketQua.doDai}`);
