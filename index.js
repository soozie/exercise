jQuery(document).ready(function(){
	console.log('Dom is ready');
	var i = 0;

	var handleWindowResize = function() {
		i = i + 1;
		var divBlue = document.getElementById('blu');
		// divBlue.style.top = i+'px';
	};

	window.addEventListener('resize', handleWindowResize, true);
});
