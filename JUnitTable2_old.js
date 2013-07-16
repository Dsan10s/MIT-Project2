/*Currently, the table only works with the "find" function*/
var JUnitTable2 = (function(){
	var exports = {};
	var letters=['ph','A','B','C','D','E','F'];

	var setupDiv = function(div){
		var table = $("<table id = 'JUnitTable2' class = 'table table-hover table-bordered'></table>");
	/*Row0*/
		var row0 = $("<tr class = 'row0'></tr>");
		var emptyLabel = $("<td class = 'empty'></td>");
		var findLabel1 = $("<td class = 'col1'>Find(<input id = 'xInput1' class = 'findInput' placeholder = '  x'></input>, <input id = aInput1 class = 'findInput' placeholder = '  a'></input>)</td>");
		var findLabel2 = $("<td class = 'col2'>Find(<input id = 'xInput2' class = 'findInput' placeholder = '  x'></input>, <input id = aInput2 class = 'findInput' placeholder = '  a'></input>)</td>");
		var findLabel3 = $("<td class = 'col3'>Find(<input id = 'xInput3' class = 'findInput' placeholder = '  x'></input>, <input id = aInput3 class = 'findInput' placeholder = '  a'></input>)</td>");

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
					var cellID
					$(".row3 .col").css("border-bottom", "4px solid black")
				}
				if (r == 4){
					$(".row4").css("border-top", "4px solid black")
				}
				/*Labels*/
				if (c == 0){
					 	newCol.append("<div class='btn btn-link view span4' data-row='"+r+"'>view code"+letters[r]+"</div>");
				}else{
					//newCol.append("<img row = 'checkMark' src = 'images/checkMark.png'/>")
				}

				newRow.append(newCol);
			}
			table.append(newRow);
		}
		$(div).append(table);
	}

	var setupClick = function(div){
		//set onclick
		$(".view").on("click", function(){
			var selectedRow = $(this).attr('data-row');
			selectedCell=$('.JUnitTable2 .row'+selectedRow+' .col0');
			viewCode=$('.JUnitTable2 .row'+selectedRow+' .col0 div');
			if(!viewCode.hasClass('hidden')){
				viewCode.text("hide code"+letters[selectedRow]);
				viewCode.addClass('hidden');
			}else{
				viewCode.text("view code"+letters[selectedRow]);
				viewCode.removeClass('hidden');
			}			

			var selectedCode ="<pre class='prettyprint linenums' style='width:350;'>"+code[selectedRow]+"</pre>"

			if(selectedRow<=3){
				selectedCell.popover({ title: 'Code', content: selectedCode, html:true, placement:'bottom'});
			}
			else{
				selectedCell.popover({ title: 'Code', content: selectedCode, html:true, placement:'top' });
			}
		});

	}

	exports.setupDiv = setupDiv;
	exports.setupClick = setupClick;
	return exports;
}());

$(document).ready(function(){
	$(".JUnitTable2").each(function(){
		JUnitTable2.setupDiv(this);
		JUnitTable2.setupClick(this);
	});
});