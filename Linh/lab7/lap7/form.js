var sanpham = document.getElementById('sanpham');
var dongia = document.getElementById('dongia');

var sanpham_err = document.getElementById('sanpham_err');
var dongia_err = document.getElementById('dongia_err');

function hien_thi(visible) {
    var phivc = document.getElementById("phivc");
    phivc.style.display = visible ? "":"none";

}
function validate() {
   
    var sp = document.getElementById("sanpham");
    if (sp.value.length == 0) {
        alert("Vui lòng nhập tên sản phẩm!");
        return false;
    }
    var gia = document.getElementById("dongia");
    if (gia.value.length == 0) {
        alert("Vui lòng nhập đơn giá!");
        return false;
    }

    else if (parseFloat(gia.value) <= 0) {
        alert("Vui lòng nhập số dương!");
        return false;
    }
    var radios = document.getElementsByName("diachi");
    if (!radios[0].checked && !radios[1].checked) {
        alert("Vui lòng chọn nơi nhận hàng!");
        return false;
    }

    alert("Chúc mừng bạn đã nhập đúng");
    return true;
}