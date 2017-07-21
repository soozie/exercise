jQuery(document).ready(function(){
	console.log('Dom is ready!');
	var i = 0;

	var handleWindowResize = function() {
		console.log("Resizing...");
	};

	window.addEventListener('resize', handleWindowResize, true);
});
