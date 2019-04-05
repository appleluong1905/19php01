// for, while, do while
for (var i = 0; i < 10; i++) {
	document.write(i);
	document.write('<br>');
}
document.write('---------------<br>');
var x = 5;
var y = 5;
++x; // x++
--y; // y--
document.write(x);
document.write('<br>');
document.write(y);

var a = 5, b = 7;
var c;
c = ++a + ++b;
c = a++ + b++;
document.write('<br>');
document.write(c);




document.write('<br>');
document.write('---------------<br>');
var i = 5;
while (i < 10) {
	document.write(i);
	document.write('<br>');
	i++;
}

document.write('<br>');
document.write('---------------<br>');
var i = 5;
do {
	document.write(i);
	document.write('<br>');
	i++;
} while (i < 10);



// Cho mot day so chay tu 2 den 15
// Kiem tra xem so do co phai la ngay trong tuan khong?
// Neu co thi in ra: Hom nay la thu x
// Neu khong thi in ra: So nay khong thuoc ngay trong tuan

for (var i = 2; i <= 15; i++) {
	switch (i) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
				document.write('Hom nay la thu ' + i);
				document.write('<br>');
				break;
		case 8:
		    document.write('Hom nay la chu nhat');
		    document.write('<br>');
				break;
		default:
			  document.write('So nay khong phai la ngay trong tuan');
			  document.write('<br>');
			  break;
	}
}


// Ham trong javascript

function myFunction() {
	var a = 5, b = 6;
	document.write(a + b);
}
document.write('<br>');
myFunction();

//
function sub(x, y) {
	document.write(x + y);
}
document.write('<br>');
sub(6, 7);
document.write('<br>');
sub(9, 6);

// Cho mot day so n chay tu 0 den 10
// Voi n la so nam kinh nghiem
// Tinh luong thuc nhan voi
// Luong co ban la 2.300.000
// So nam kinh nghiem < 3 thi he so luong la 2
// So nam kinh nghiem < 5 thi he so luong la 3
// So nam kinh nghiem = 5 thi he so luong la 4
// So nam kinh nghiem > 5 thi he so luong la 5

//Ex: Luong thuc nhan = Luong co ban x he so luong

//Su dung: Function, if else, for hoac while
document.write('<br>');
var lcb = 2300000;
for (var namKN = 0; namKN <= 10; namKN++) {
	if (namKN < 3) {
		luongThucNhan(lcb, 2);
		document.write('<br>');
	} else if (namKN < 5) {
		luongThucNhan(lcb, 3);
		document.write('<br>');
	} else if (namKN == 5) {
		luongThucNhan(lcb, 4);
		document.write('<br>');
	} else {
		luongThucNhan(lcb, 5);
		document.write('<br>');
	}
}
function luongThucNhan(lbc, hsl) {
	document.write(lbc * hsl);
}