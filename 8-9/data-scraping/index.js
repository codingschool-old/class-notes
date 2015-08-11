var data = [
	'2223334444',
	'222.333.4444',
	'(222)333.4444',
	'222333.4444',
	'222.3334444',
];

for (var i = 0; i < data.length; i++) {
	var matches = /^\(?(\d{3})\W?(\d{3})\W?(\d{4})$/.exec(data[i]);
		console.log(matches[1] + '-' + matches[2] + '-' + matches[3]);
}