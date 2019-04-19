var resultValue = ""; 
var result = 0;
function addValue(value) {

	resultValue+=value;
	
	document.getElementById('result').innerHTML = resultValue;

}

function calValue() {
	result = eval(resultValue);

	document.getElementById('result').innerHTML = result;

	resultValue = result;
}
function delValue() {
	document.getElementById('result').innerHTML = 0;
	resultValue = "";
}