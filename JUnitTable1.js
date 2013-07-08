/*Currently, the table only works with the "find" function*/
var JUnitTable1 = (function(){
	var exports = {};
	var setup = function(div){
		var table = $("<table id = 'JUnitTable1' class = 'table table-hover table-bordered'></table>");
		var submit = $("<button id = 'submit1' class = 'btn btn-success btn-large'>Submit</button>")
	/*Row0*/
		var row0 = $("<tr class = 'row0'></tr>");
		var emptyLabel = $("<td class = 'empty'></td>");
		var findLabel1 = $("<td class = 'col1'>Find(<input id = 'xInput1' class = 'findInput1' placeholder = '  x'></input>, <input id = aInput1 class = 'findInput2' placeholder = '  a'></input>)</td>");
		var findLabel2 = $("<td class = 'col2'>Find(<input id = 'xInput2' class = 'findInput1' placeholder = '  x'></input>, <input id = aInput2 class = 'findInput2' placeholder = '  a'></input>)</td>");
		var findLabel3 = $("<td class = 'col3'>Find(<input id = 'xInput3' class = 'findInput1' placeholder = '  x'></input>, <input id = aInput3 class = 'findInput2' placeholder = '  a'></input>)</td>");

		row0.append(emptyLabel, findLabel1, findLabel2, findLabel3);
		table.append(row0);
	/*Column Labels*/

	/*Table Content*/
		for (var r = 1; r <= 6; r++){
			var newRow = $("<tr class = 'row" + r + "'></tr>");
			for (var c = 0; c <= 3; c++){
				var rowClass = ".row" + r;
				var newCol = $("<td class = 'col" + c + "'></td>");
				/*CSS*/
				if (r == 3){
					var cellID = ".row3 .col" + c;
					$(cellID).css("border-bottom", "4px solid black")
				}
				if (r == 4){
					var cellID = ".row4 .col" + c;
					$(cellID).css("border-top", "4px solid black")
				}
				/*Labels*/
				if (c == 0){
					 if (r == 1){
					 	newCol.append("<div><b>a</b> empty</div>");
					 }else if(r == 2){
					 	newCol.append("<div>Length of <b>a</b> = 1</div>");
					 }else if(r == 3){
					 	newCol.append("<div>Length of <b>a</b> > 1</div>");
					 }else if(r == 4){
					 	newCol.append("<div><b>x</b> not in <b>a</b></div>");
					 }else if(r == 5){
					 	newCol.append("<div><b>x</b> in <b>a</b> once</div>");
					 }else if(r == 6){
					 	newCol.append("<div><b>x</b> in <b>a</b> more than once</div>");
					 }
				}else{
					newCol.append("<img id = 'checkMark' src = 'images/checkMark.png'/>")
				}
				newRow.append(newCol);
			}
			table.append(newRow);
		}
		$(div).append(table, submit);
	}
	exports.setup = setup;
	return exports;
}());

$(document).ready(function(){
	$(".JUnitTable1").each(function(){
		JUnitTable1.setup(this);
	});

	/*Creates Grey bar in middle of table*/
	for (var r = 1; r <= 6; r++){
		var newRow = $("<tr class = 'row" + r + "'></tr>");
		for (var c = 0; c <= 3; c++){
			var rowClass = ".row" + r;
			var newCol = $("<td class = 'col" + c + "'></td>");
			if (r == 3){
				var cellID = ".row3 .col" + c;
				$(cellID).css("border-bottom", "3px solid grey")
			}
			if (r == 4){
				var cellID = ".row4 .col" + c;
				$(cellID).css("border-top", "3px solid grey")
			}
		}
	}

	/*Checks the user inputs when the submit button is pressed*/
	$("#submit1").on("click", function(){
		$(".findInput1")
	})
});