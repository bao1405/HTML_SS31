function truncate(str) {
    let n = prompt("nhap so luong muon rut gon");
    if (str.length > n) {
        return str.slice(0, n) + "...";
    } else {
        return str;
    }
}

let chuoiGoc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let ketQua = truncate(chuoiGoc);

console.log(ketQua);