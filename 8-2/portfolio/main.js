var submit = document.getElementById('form-submit');
var nameInput = document.getElementById('input-name');
var email = document.getElementById('input-email');
var phone = document.getElementById('input-phone');
var message = document.getElementById('input-message');

submit.onclick = function() {
	var nameParts = nameInput.value.split(' ');
	if (nameParts.length <= 1 || nameParts[0] === '' || nameParts[1] === '') {
		alert('please enter a valid full name');
		return false;
	}
	var emailParts = email.value.split('@');
	if (emailParts.length <= 1 || emailParts[0] === '' || emailParts[1] === '') {
		alert('please enter a valid email');
		return false;
	}
	return false;
}