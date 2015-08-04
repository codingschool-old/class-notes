var input = document.getElementById('result');
var holding = document.getElementById('holding');
var equal = document.getElementById('equal');
var clear = document.getElementById('clear');
var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');

var operation;

function addNumberOnclick(numbers, index) {
	numbers[index].onclick = function() {
		input.value = numbers[index].innerHTML;
	}
}

function addOperatorOnclick(operators, index) {
	operators[index].onclick = function() {
		if (input.value === '') {
			alert('error');
			return;
		}
		holding.innerHTML = input.value;
		input.value = '';
		operation = operators[index].innerHTML;
	}
}

for (var i = 0; i < numbers.length; i++) {
	addNumberOnclick(numbers, i);
}

for (var i = 0; i < operators.length; i++) {
	addOperatorOnclick(operators, i);
}


clear.onclick = function() {
	input.value = '';
	holding.innerHTML = '';
}

equals.onclick = function() {
	if (input.value === '' || holding.innerHTML === '') {
		alert('error');
		return;
	}
	var number2 = +input.value;
	var number1 = +holding.innerHTML;
	var result;
	if (operation === '+') { result = number1 + number2; }
	if (operation === '-') { result = number1 - number2; }
	if (operation === '*') { result = number1 * number2; }
	if (operation === '/') { result = number1 / number2; }
	input.value = result;
	holding.innerHTML = '';
}