jQuery(document).ready(function(){
	console.log('il DOM è pronto');
	var i = 0;

	var handleWindowResize = function() {
		console.log(window.innerWidth);
		i = i + 1;
		var divBlue = document.getElementById('blu');
		divBlue.style.top = i+'px';
	};

	window.addEventListener('resize', handleWindowResize, true);
});
