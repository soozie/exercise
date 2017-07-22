var bool = true;

var stampa = function(val) {
	console.log("chiamata", val);
	if (val) {
		var divRosso = document.getElementById('rosso');
		var divBlue = document.getElementById('blu');

		divRosso.style.backgroundColor = 'blue';
		divBlue.style.backgroundColor = 'red';
	} else {
		var divRosso = document.getElementById('rosso');
		var divBlue = document.getElementById('blu');

		divRosso.style.backgroundColor = 'red';
		divBlue.style.backgroundColor = 'blue';
	}
}

stampa(bool);
//
setTimeout(function() {
	bool = false;
	stampa(bool);
}, 1000);
//
setTimeout(function() {
	bool = true;
	stampa(bool);
}, 2000);
//
setTimeout(function() {
	bool = false;
	stampa(bool);
}, 3000);
