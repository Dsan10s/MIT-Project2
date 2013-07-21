$(document).ready(function(){
	$("#sumHelp").popover({trigger: "click", animation: true, placement: "right", content: "Input your test cases in the first row. Each case should cover one partition from each group. You can see where groups are divided by a horizontal grey line running through the table"});
	$("#ProdHelp").popover({trigger: "click", animation: true, placement: "right", content: "Input your test cases in the first row.  You must have a test case for each combination of partitions for each group.  If there is a certain case that is impossible, click on the bubble in the list on the right"});
	$("#CRHelp").popover({trigger: "click", animation: true, placement: "right", content: "For the given code on the left, find a test case that refutes the given parameters in the find function shown at the top of the page.  If the code is good, click on it.  Otherwise click the bubble under your test case that refutes that row."});

	$(".delete").css("opacity", 1);
	$(".delete").animate({"opacity": 1}, 2000, function(){
		$(".delete").animate({"opacity": 0}, 200);
	})
})