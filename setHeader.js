var setHeader = (function(){
	var exports = {};
	var setup = (function(div){
		var text="<h1>"+header.title+"</h1>"
		+"<pre class='prettyprint linenums'>"+header.code+"</pre>"
		+"<p>"+header.explanation+"</p>";

		$(div).append(text);
	})

	exports.setup=setup;
	return exports;
}());

$(document).ready(function(){
	$(".header").each(function(){
		setHeader.setup(this);
	});
});