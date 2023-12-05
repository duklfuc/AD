var hoten = document.getElementById('hoten');
var email = document.getElementById('tel');
var hoten = document.getElementById('dongia');
var hoten = document.getElementById('soluong');
var hoten = document.getElementById('tt');

var hoten_err = document.getElementById('hoten_err');
var email_err = document.getElementById('tel_err');
var email_err = document.getElementById('dongia_err');
var email_err = document.getElementById('soluong_err');
var email_err = document.getElementById('tt_err');

function validate() {
    // kiểm tra hoten không đc để trống
    if (hoten.value.trim() == '') {
        hoten_err.innerHTML = "họ tên không đc để trống ";
        return false;
    } else {
        hoten_err.innerHTML = "";
    }
    
    if (tel.value.trim() == '') {
        tel_err.innerHTML = "số điện thoại k đc để trống";
        return false;
    } else {
        tel_err.innerHTML = "";
    }

    if (dongia.value.trim() == '') {
        dongia_err.innerHTML = "đơn giá k đc để trống";
        return false;
    } else {
        dongia_err.innerHTML = "";
    }
    
    if (soluong.value.trim() == '') {
        soluong_err.innerHTML = "số lượng k đc để trống";
        return false;
    } else {
        soluong_err.innerHTML = "";
    }

    if (tt.value.trim() == '') {
        tt_err.innerHTML = "thành tiền k đc để trống";
        return false;
    } else {
        tt_err.innerHTML = "";
    }
}