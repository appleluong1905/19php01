var a;
/*
Quy tac dat ten bien:
- Co y nghia
- Bang chu cai hoa hoac thuong, so va dau gach duoi
- Khong bat dau bang so
- Nen dat bang tieng Anh
- Theo quy tac Camel
Ex: userName, myAge, getMyInfo, getElementById

*/
// bt: Dat ten bien cho: ten nguoi dung, email, so dien thoai, ngay sinh
var Name; // HoTen
var Email; 
var Phone; // soDienThoai
var Birthday;

// cac phep toan trong javascript: +, -, * , /
var x = 6, y = 8;
document.write('Tong 2 so x + y la:');
document.write(x + y);
document.write('<br>');
document.write('Hieu 2 so x - y la:');
document.write(x - y);

// cac phep so sanh trong javascript: >, <, >=, <=, ==, !=

// cau dieu kien trong javascript
//if (dieukien) {
		// thuc hien neu dieu kien dung
//}
document.write('<br>');
if (3 > 2) {
	document.write('So 3 lon hon so 2');
}

//if (dieukien) {
		// thuc hien neu dieu kien dung
//} else {
		// thuc hien neu dieu kien sai
// }
document.write('<br>');
var x = 5, y = 7
if (x > y) {
	document.write('So x lon hon so y');
} else {
	document.write('So x nho hon hoac bang so y');
}
//if (dieukien1) {
		// thuc hien neu dieu kien 1 dung
//} else if (dieukien2) {
		// thuc hien neu dieu kien 2 dung
// } else {
	 // thuc hien neu dieu kien 1 va dieu kien 2 sai
//}
document.write('<br>');
var x = 7, y = 7
if (x > y) {
	document.write('So x lon hon so y');
} else if (x < y) {
	document.write('So x nho hon so y');
} else {
	document.write('So x bang so y');
}
document.write('<br>');
// cau lenh switch case
var x = 3;
switch (x) {
	case 2:
			document.write('Hom nay la thu 2');
			break;
	case 3:
			document.write('Hom nay la thu 3');
			break;
	case 4:
			document.write('Hom nay la thu 4');
			break;
	case 5:
			document.write('Hom nay la thu 5');
			break;
	case 6:
			document.write('Hom nay la thu 6');
			break;
	case 7:
			document.write('Hom nay la thu 7');
			break;
	case 8:
			document.write('Hom nay la chu nhat');
			break;
	default:
		  document.write('Day khong phai la thu trong tuan');
			break;
}
//
document.write('<br>');
var x = 3;
switch (x) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
			document.write('Hom nay la thu ' + x);
			break;
	case 8:
			document.write('Hom nay la chu nhat');
			break;
	default:
		  document.write('Day khong phai la thu trong tuan');
			break;
}

// Cho truoc 1 so, kiem tra so do co phai la
// thang trong nam khong? Neu phai, cho biet so ngay trong thang do?
// VD: 2 -> day la thang trong nam, thang 2 co 28 hoac 29 ngay
// su dung switch case de lam
// cho biet: thang 1, 3, 5, 7, 8, 10, 12 co 31 ngay
// thang 4, 6, 9, 11 co 30 nga
// thang 2 co 28 hoac 29 ngay

// them: cho them 1 so la nam
// x la thang, y la nam
// Dua vao y kiem tra nam do la nam nhuan hay k? 
//de in ra dung ngay cua thang 2
document.write('<br>');
var x = 2, y = 2000;
switch (x) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
			document.write('Thang ' + x + ' co 31 ngay');
			break;
	case 4:
	case 6:
	case 9:
	case 11:
			document.write('Thang ' + x + ' co 30 ngay');
			break;
	case 2:
			if ((y % 4 == 0) && (y % 100 != 0)) {
				document.write('Thang ' + x + ' co 29 ngay');
			} else {
					document.write('Thang ' + x + ' co 28 ngay');  
			}
			break;
	default:
		  document.write('Day khong phai la thang trong nam');
			break;
}
