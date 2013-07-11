var setHeader = (function(){
	var exports = {};
	var setup = (function(div){
		$(div).append(header);
	})

	exports.setup=setup;
	return exports;
}());

$(document).ready(function(){
	$(".header").each(function(){
		setHeader.setup(this);
	});
});