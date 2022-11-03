let readline = require('readline-sync');
let kmin = require('./kmin-lib');

// Tạo mảng số bí mật, mỗi số đc random trong đoạn [min, max]
function taoSoBiMat(min, max) {
    let soBiMat = [];
    for (let i = 1; i <= 5; i++) {
        let x = kmin.getRandomInteger(min, max);
        soBiMat.push(x);
    }
    return soBiMat;
}
// Trả về mảng lưu các số do người dùng nhập
function laySoNguoiDung() {
    let soNguoiDung = [];

    for (let i = 1; i <= 5; i++) {
        let x = readline.question(`Nhap so thu ${i}: `);
        soNguoiDung.push(x);
    }
    return soNguoiDung;
}
// Hàm kiểm tra mảng số bí mật và mảng số người dùng
function kiemTra(soBiMat, soNguoiDung) {
    for (let i = 0; i < soBiMat.length; i++) {
        if (soBiMat[i] != soNguoiDung[i])
            return false;
    }
    return true;
}

function chayManChoi(capDo) {
    // Tạo 5 số ngẫu nhiên và lưu vào mảng
    let soBiMat = taoSoBiMat(10 ** (capDo - 1), 10 ** capDo - 1);

    // Hiển thị 5 con số ngẫu nhiên
    console.log(soBiMat);

    // Sau 1 giây thì xóa 5 số đó đi
    kmin.sleep(1000 * capDo);
    console.clear();

    // Cho nguoi dung nhập
    let soNguoiDung = laySoNguoiDung();

    return [soBiMat, soNguoiDung];
}

function main() {
    for (let i = 1; i <= 5; i++) {
        let data = chayManChoi(i);
        let soBiMat = data[0];
        let soNguoiDung = data[1];

        console.log(soBiMat);
        console.log(soNguoiDung);

        // Xét đúng sai
        if (kiemTra(soBiMat, soNguoiDung) == true) {
            console.log("Ban da doan dung");
            // let data = chayManChoi(2);
            // let soBiMat = data[0];
            // let soNguoiDung = data[1];
        }
        else {
            console.log("Game over");
            break;
        }
    }







}

main();
