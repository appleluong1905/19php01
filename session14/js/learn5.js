function checkRegister() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var checkRegisterSuccess = true;

	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your name';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (email == '') {
		document.getElementById('errorEmail').innerHTML = 'Please input your email';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorEmail').innerHTML = '';
	}
	if (password == '') {
		document.getElementById('errorPass').innerHTML = 'Please input your password';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorPass').innerHTML = '';
	}

	if (checkRegisterSuccess) {
		document.getElementById('registerSuccess').innerHTML = 'Register success!';
	} else {
		document.getElementById('registerSuccess').innerHTML = '';
	}
}

///
// BT1: Bình có 27 quyển sách, Bình có số sách gấp 3 lần số sách của Minh. 
// Hỏi Bình phải chuyển cho 
// Minh bao nhiêu quyển sách để số sách của Bình gấp đôi số sách của Minh?
var BinhBook = 27;
var MinhBook;
MinhBook = BinhBook/3;
var SoLanChuyen = 0;
while (BinhBook != MinhBook*2) {
	BinhBook--;
	MinhBook++;
	SoLanChuyen++;
}

document.write('<br>');
document.write("So sach Binh chuyen cho Minh la: " + SoLanChuyen);

// BT2: Cho ban 2000 vnđ đi mua kẹo .Biết :
// 1 viên kẹo giá 200 vnđ.
// cứ 2 vỏ kẹo đổi được 1 viên.
// Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ?

var soTien = 2000;
var soKeo = 0;
var soVoKeo = 0;
while (soTien >= 200 ) {
	soTien-=200;
	soKeo++;
	soVoKeo++;

	while (soVoKeo >= 2) {
		soVoKeo-=2;
		soKeo++;
		soVoKeo++;
	}

}

document.write('<br>');
document.write("So keo mua duoc la: " + soKeo);


