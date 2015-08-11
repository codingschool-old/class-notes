var form = document.getElementById('the-form');


var validators = {
	'input-name': /\w+\s\w+/,
	'input-email': /^\w+@\w+\.\w{2,}$/,
	'input-phone': /^\(?\d{3}\W?\d{3}\W?\d{4}$/,
	'input-message': /\S/
}

form.onsubmit = function() {
	var inputs = form.getElementsByClassName('form-control');

	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		var validator = validators[input.id];
		if (validator.test(input.value) === false) {
			alert('error in ' + input.id);
			return false;
		}
	}
}
