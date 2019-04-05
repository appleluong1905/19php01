function sumNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('result').innerHTML = parseInt(number1) + parseInt(number2);
}