var data = { //nơi này lưu dữ liệu để check đăng nhập 
    userName:hehehe,
    passwork:hehehe123
}
function login() {

//có dữ liệu rồi, bước tiếp theo là check xem cái nhập vào có giông với dữ liệu không 
var name = document.getElementById('name').value;
var pass = document.getElementById('pass').value;
var checkLogin = data.some(value => value.userName === name && value.passwork === pass) // so sánh sự giống nhau của data nhập vào vào array 
if(checkLogin) {                                                                               //so sánh xong sẽ trả về true or false
       return  alert('đăng nhập thành công');
} else {
   return  alert('vui lòng kiểm tra lại tài khoản')
}
}