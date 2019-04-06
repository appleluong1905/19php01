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
	}


}