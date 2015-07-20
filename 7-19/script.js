var greeter = document.getElementById('greeter');
var span = greeter.getElementsByTagName('span')[0];
var input = greeter.getElementsByTagName('input')[0];
var button = greeter.getElementsByTagName('button')[0];
button.onclick = function() {
	var name = input.value;
	span.innerHTML = name;
};

var counter = document.getElementById('counter');
var span2 = counter.getElementsByTagName('span')[0];
var button = counter.getElementsByTagName('button')[0];
button.onclick = function() {
	var oldValue = span2.innerHTML;
	oldValue = Number(oldValue);
	var newValue = oldValue + 1;
	span2.innerHTML = newValue;
};

var random = document.getElementById('random');
var button = random.getElementsByTagName('button')[0];
button.onclick = function() {
	var div = document.createElement('div');
	div.innerHTML = 'Here is a random number ' + Math.random();
	random.appendChild(div);
};
