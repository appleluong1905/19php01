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