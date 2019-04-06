function checkMyName() {
	var name = document.getElementById('name').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your name!';
	} else {
		document.getElementById('errorName').innerHTML = '';
		// khi nay moi xu ly
		var spaceFirstName = name.indexOf(' ');
		var spaceLastName = name.lastIndexOf(' ');
		var FirstName = name.substring(0, spaceFirstName);
		var MidName = name.substring(spaceFirstName, spaceLastName);
		var LastName = name.substring(spaceLastName, name.length);
		document.getElementById('ex1').innerHTML = 'Ho la: '+ 
			FirstName + ' <br> Ten dem la: '
			+ MidName + '<br> Ten la: ' + LastName;

		// Kiem tra ky tu n trong ten
		var checkNinName = name.indexOf('n');
		if (checkNinName != -1) {
			document.getElementById('ex2').innerHTML = 'Co ky tu n trong ten cua ban';
		}	 else {
			document.getElementById('ex2').innerHTML = 'K co ky tu n trong ten cua ban';
		}
		document.getElementById('ex4').innerHTML =
		 FirstName + MidName + LastName.toUpperCase();
		document.getElementById('ex5').innerHTML =
		name.replace(MidName, ' 19PHP01');

		// Cau 2: 
		// Cach 1: Dem tung ky tu
		// Truong hop khong phan biet n hoa hoac n thuong
		var newName = name.toLowerCase();
		var countN = 0;
		for (var i = 0; i < newName.length; i++) {
			if (newName[i] == 'n')
			{
				countN++;
			}
		}
		document.getElementById('ex2').innerHTML =
		 'Trong ten ban co ' + countN + ' chu n khong phan biet hoa thuong';
		// Cach 2: Cat chuoi ten ra tung phan
		var countN2 = 0;
		while(newName.indexOf('n') != -1) {
			countN2++;
			newName = newName.substring(newName.indexOf('n') + 1, newName.length);
		}
		document.getElementById('ex2').innerHTML =
		 'Trong ten ban co ' + countN2 + ' chu n khong phan biet hoa thuong (cach 2)';

	}


}