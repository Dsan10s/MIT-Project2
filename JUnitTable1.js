/*Currently, the table only works with the "find" function*/

var JUnitTable1 = (function(){
	var columnsDisplayed = [0, 1, 2, 3];

	/*Nulls are placeholders so indexing is easier later*/
	var radioData = [[null], [null, false, false, false], [null, false, false, false], [null, false, false, false], [null, false, false, false], [null, false, false, false], [null, false, false, false]];
	var exports = {};
	var setup = function(div){
		var table = $("<table id = 'JUnitTable1' class = 'table table-hover table-bordered'></table>");
		var bottomDiv = $("<div style = 'width: 100%'></div>")
		var submit = $("<button id = 'submit1' class = 'btn btn-success btn-large' style = 'float: left'>Submit</button>")
		var alert = $("<div id = 'mainAlert' class = 'alert alert-error'>Test</div>")
		var success = $("<div id = 'mainSuccess' class = 'alert alert-success'>Test</div>")
		bottomDiv.append(submit, alert, success);

	/*Row0*/
		var row0 = $("<tr class = 'row0'></tr>");
		var emptyLabel = $("<td class = 'col0'><button class = 'plusButton btn btn-info'><b style = 'font-size: 20pt'>+</b></button></td>");
		var findLabel1 = $("<td class = 'col1'>Find(<input id = 'xInput1' class = 'findInput1' placeholder = '  x'></input>, <input id = aInput1 class = 'findInput2' placeholder = '  a'></input>)</td>");
		var findLabel2 = $("<td class = 'col2'>Find(<input id = 'xInput2' class = 'findInput1' placeholder = '  x'></input>, <input id = aInput2 class = 'findInput2' placeholder = '  a'></input>)</td>");
		var findLabel3 = $("<td class = 'col3'>Find(<input id = 'xInput3' class = 'findInput1' placeholder = '  x'></input>, <input id = aInput3 class = 'findInput2' placeholder = '  a'></input>)</td>");

		row0.append(emptyLabel, findLabel1, findLabel2, findLabel3);
		table.append(row0);
	/*Column Labels*/

	/*Table Content*/
		for (var r = 1; r <= 6; r++){
			var newRow = $("<tr class = 'row" + r + "'></tr>");
			for (var c = 0; c < columnsDisplayed.length; c++){
				var rowClass = ".row" + r;
				var newCol = $("<td class = 'col" + c + "'></td>");
				
				/*Labels*/
				if (c == 0){
					newCol.append(rowNames[r].title);
				}else{
					newCol.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'customRadioFill'></span></span><img class = 'mark checkMark' src = 'images/checkMark.png'/><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span>"));
				}
				newRow.append(newCol);
			}
			table.append(newRow);
		}
		$(div).append(table, bottomDiv);

		/*Creates Grey bar in middle of table*/
		for (var r = 1; r <= 6; r++){
			var newRow = $("<tr class = 'row" + r + "'></tr>");
			for (var c = 0; c < columnsDisplayed.length; c++){
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
		var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
		var newNum = lastNumber + 1;

		var customRadioBorder = d3.selectAll(".col" + newNum +  " .customRadioBorder").append("svg")
		.attr("class", "customRadio")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("cx", 19).attr("cy", 19).attr("r", 18).attr("stroke", "grey").attr("stroke-width", "1px").attr("fill", "white");

		var customRadioFill = d3.selectAll(".col" + newNum + " .customRadioFill").append("svg")
		.attr("class", "customRadioFill")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("class", "circleFill").attr("cx", 20).attr("cy", 20).attr("r", 0).attr("fill", "#91cfff");

		$(".customRadioBorder").on("hover", function(){
			$(this).css('cursor', 'pointer');
		})

		/*$(".customRadioBorder").on("click", function(){
			var rowClass = $(this).parent('span').parent('td').parent('tr').attr("class");
			var rowIndex = rowClass[3];
			var colClass = $(this).parent('span').parent('td').attr("class");
			var colIndex = colClass[3];
			if (radioData[rowIndex][colIndex] === false){
				console.log("rowClass: " + rowClass + ", colClass: " + colClass)
				d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
				.attr("r", 20).duration(200)
				.attr("stroke", "white").duration(200);
				radioFill = true;
				radioData[rowIndex][colIndex] = true;
			}else if(radioData[rowIndex][colIndex] === true){
				d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
				.attr("r", 0).duration(200)
				.attr("stroke", "grey").duration(200);
				radioFill = false;
				radioData[rowIndex][colIndex] = false;
			}
			
		})*/

		$(".plusButton").on("click", function(){
			var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
			var newNum = lastNumber + 1;
			for (var r = 0; r <= 6; r++){
				
				var rowClass = ".row" + r;
				var newCol = $("<td class = 'col" + newNum + "'></td>");
				if (r == 0){
					var newFindLabel = $("<input id = 'xInput1' class = 'findInput1' placeholder = '  x'></input>, <input id = aInput1 class = 'findInput2' placeholder = '  a'></input>");
					newCol.append("Find(", newFindLabel, ")");
				}else{
					newCol.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'customRadioFill'></span></span><img class = 'mark checkMark' src = 'images/checkMark.png'/><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span>"));
				}
				
				$(rowClass).append(newCol);
				/*CSS*/
				if (r == 3){
					var cellID = ".row3 .col" + newNum;
					$(cellID).css("border-bottom", "3px solid grey")
				}
				if (r == 4){
					var cellID = ".row4 .col" + newNum;
					$(cellID).css("border-top", "3px solid grey")
				}
				/*Labels*/	
			}
			

			var customRadioBorder = d3.selectAll(".col" + newNum +  " .customRadioBorder").append("svg")
			.attr("class", "customRadio")
			.attr("width", "40px")
			.attr("height", "40px")
			.append("circle").attr("cx", 19).attr("cy", 19).attr("r", 18).attr("stroke", "grey").attr("stroke-width", "1px").attr("fill", "white");

			var customRadioFill = d3.selectAll(".col" + newNum + " .customRadioFill").append("svg")
			.attr("class", "customRadioFill")
			.attr("width", "40px")
			.attr("height", "40px")
			.append("circle").attr("class", "circleFill").attr("cx", 20).attr("cy", 20).attr("r", 0).attr("fill", "#91cfff");

			$(".customRadioBorder").on("hover", function(){
				$(this).css('cursor', 'pointer');
			})
			
			columnsDisplayed.push(newNum);
			for (var i = 1; i < radioData.length; i++){
				radioData[i].push(false);
			}
			console.log(radioData)

			var radioFill = false;

			
			
			

			$(".customRadioBorder").on("click", function(){
				var rowClass = $(this).parent('span').parent('td').parent('tr').attr("class");
				var rowIndex = rowClass[3];
				var colClass = $(this).parent('span').parent('td').attr("class");
				var colIndex = colClass[3];
				if (radioData[rowIndex][colIndex] === false){
					console.log("button will fill")
					console.log("rowClass: " + rowClass + ", colClass: " + colClass)
					d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 20).duration(200)
					.attr("stroke", "white").duration(200);
					radioFill = true;
					radioData[rowIndex][colIndex] = true;
				}else if(radioData[rowIndex][colIndex] === true){
					d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 0).duration(200)
					.attr("stroke", "grey").duration(200);
					radioFill = false;
					radioData[rowIndex][colIndex] = false;
				}
				
			})
		});
		$("#mainSuccess").hide();
		$("#mainAlert").hide();

		/*Allows us to animate backgroundColor (copied from stackOverflow)*/
		(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

		/*Find method returns number of times a number was found in an array*/

		function find(x, a){
			var instances = 0;
			for (var i = 0; i < a.length; i++){
				if (x == a[i]){
					instances++;
				}
			}
			return instances;
		}
		
		/*Adds another column to the table when the plus button is pressed*/
		
		

		var customRadioBorder = d3.selectAll(".customRadioBorder").append("svg")
		.attr("class", "customRadio")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("cx", 19).attr("cy", 19).attr("r", 18).attr("stroke", "grey").attr("stroke-width", "1px").attr("fill", "white");

		var customRadioFill = d3.selectAll(".customRadioFill").append("svg")
		.attr("class", "customRadioFill")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("class", "circleFill").attr("cx", 20).attr("cy", 20).attr("r", 0).attr("fill", "#91cfff");

		/*Checks the user inputs when the submit button is pressed*/
		$("#submit1").on("click", function(){
			// Row checks temporarily commented out for testing
			// Delete if unnecessary
			
			/*var row1checks = [];
			var row2checks = [];
			var row3checks = [];
			var row4checks = [];
			var row5checks = [];
			var row6checks = [];*/


			$("#mainAlert").hide();
			$("#mainSuccess").hide();

			$("#mainAlert").animate({"opacity": "0"}, 200);
			$("#mainSuccess").animate({"opacity": "0"}, 200);

			$(".checkMark").animate({"opacity": "0"}, 200);
			$(".errorMark").animate({"opacity": "0"}, 200);

			$(".row1").animate({backgroundColor: "white"}, 200);
			$(".row2").animate({backgroundColor: "white"}, 200);
			$(".row3").animate({backgroundColor: "white"}, 200);
			$(".row4").animate({backgroundColor: "white"}, 200);
			$(".row5").animate({backgroundColor: "white"}, 200);
			$(".row6").animate({backgroundColor: "white"}, 200);

			try{
				var x1 = JSON.parse($("#xInput1").val());
				var a1 = JSON.parse($("#aInput1").val());
				var x2 = JSON.parse($("#xInput2").val());
				var a2 = JSON.parse($("#aInput2").val());
				var x3 = JSON.parse($("#xInput3").val());
				var a3 = JSON.parse($("#aInput3").val());

				/*Some error checking*/

				if($(".findInput2").val()[0] !== "["){
					console.log("not a matrix");
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("Make sure that <b>a</b> is a matrix");
				}
				if(find(true, radioData[1]) > 2 || find(true, radioData[2]) > 2 || find(true, radioData[3]) > 2){

					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("You can only select one option from each half of the table");

				}
				for (var c = 1; c <= 3; c++){
					var entries = [];
					for (var r = 1; r <= 6; r++){
						if(radioData[r][c] in entries){
							$("#mainAlert").show();
							$("#mainAlert").animate({"opacity": "1"}, 200);
							$("#mainAlert").html("You can only select one option from each half of the table per column");
						}
						entries.push(radioData[r][c]);
					}
				}

				/*Column 1*/
			// Check Marks
				if(a1.length == 0 && radioData[1][1] == true){
					$(".row1 .col1 .checkMark").animate({"opacity": "1"}, 200);
					$(".row1 .col1 .errorMark").animate({"opacity": "0"}, 200);
					// row1checks.push(1);
				}else if(a1.length == 1 && radioData[2][1] == true){
					$(".row2 .col1 .checkMark").animate({"opacity": "1"}, 200);
					$(".row2 .col1 .errorMark").animate({"opacity": "0"}, 200);
					// row2checks.push(1);
				}else if(a1.length > 1 && radioData[3][1] == true){
					$(".row3 .col1 .checkMark").animate({"opacity": "1"}, 200);
					$(".row3 .col1 .errorMark").animate({"opacity": "0"}, 200);
					// row3checks.push(1);
				}
				if(find(x1, a1) == 0 && radioData[4][1] == true){
					$(".row4 .col1 .checkMark").animate({"opacity": "1"}, 200);
					$(".row4 .col1 .errorMark").animate({"opacity": "0"}, 200);
					// row4checks.push(1);
				}else if(find(x1, a1) == 1 && radioData[5][1] == true){
					$(".row5 .col1 .checkMark").animate({"opacity": "1"}, 200);
					$(".row5 .col1 .errorMark").animate({"opacity": "0"}, 200);
					// row5checks.push(1);
				}else if(find(x1, a1) > 1 && radioData[6][1] == true){
					$(".row6 .col1 .checkMark").animate({"opacity": "1"}, 200);
					$(".row6 .col1 .errorMark").animate({"opacity": "0"}, 200);
					// row6checks.push(1);
				}
			// Error Marks
				if(a1.length !== 0 && radioData[1][1] == true){
					$(".row1 .col1 .checkMark").animate({"opacity": "0"}, 200);
					$(".row1 .col1 .errorMark").animate({"opacity": "1"}, 200);
					// row1checks.push(1);
				}else if(a1.length !== 1 && radioData[2][1] == true){
					$(".row2 .col1 .checkMark").animate({"opacity": "0"}, 200);
					$(".row2 .col1 .errorMark").animate({"opacity": "1"}, 200);
					// row2checks.push(1);
				}else if(a1.length <= 1 && radioData[3][1] == true){
					$(".row3 .col1 .checkMark").animate({"opacity": "0"}, 200);
					$(".row3 .col1 .errorMark").animate({"opacity": "1"}, 200);
					// row3checks.push(1);
				}
				if(find(x1, a1) !== 0 && radioData[4][1] == true){
					$(".row4 .col1 .checkMark").animate({"opacity": "0"}, 200);
					$(".row4 .col1 .errorMark").animate({"opacity": "1"}, 200);
					// row4checks.push(1);
				}else if(find(x1, a1) !== 1 && radioData[5][1] == true){
					$(".row5 .col1 .checkMark").animate({"opacity": "0"}, 200);
					$(".row5 .col1 .errorMark").animate({"opacity": "1"}, 200);
					// row5checks.push(1);
				}else if(find(x1, a1) <= 1 && radioData[6][1] == true){
					$(".row6 .col1 .checkMark").animate({"opacity": "0"}, 200);
					$(".row6 .col1 .errorMark").animate({"opacity": "1"}, 200);
					// row6checks.push(1);
				}

				/*Column 2*/
			// Check Marks
				if(a2.length == 0 && radioData[1][2] == true){
					$(".row1 .col2 .checkMark").animate({"opacity": "1"}, 200);
					$(".row1 .col2 .errorMark").animate({"opacity": "0"}, 200);
					// row1checks.push(1);
				}else if(a2.length == 1 && radioData[2][2] == true){
					$(".row2 .col2 .checkMark").animate({"opacity": "1"}, 200);
					$(".row2 .col2 .errorMark").animate({"opacity": "0"}, 200);
					// row2checks.push(1);
				}else if(a2.length > 1 && radioData[3][2] == true){
					$(".row3 .col2 .checkMark").animate({"opacity": "1"}, 200);
					$(".row3 .col2 .errorMark").animate({"opacity": "0"}, 200);
					// row3checks.push(1);
				}
				if(find(x2, a2) == 0 && radioData[4][2] == true){
					$(".row4 .col2 .checkMark").animate({"opacity": "1"}, 200);
					$(".row4 .col2 .errorMark").animate({"opacity": "0"}, 200);
					// row4checks.push(1);
				}else if(find(x2, a2) == 1 && radioData[5][2] == true){
					$(".row5 .col2 .checkMark").animate({"opacity": "1"}, 200);
					$(".row5 .col2 .errorMark").animate({"opacity": "0"}, 200);
					// row5checks.push(1);
				}else if(find(x2, a2) > 1 && radioData[6][2] == true){
					$(".row6 .col2 .checkMark").animate({"opacity": "1"}, 200);
					$(".row6 .col2 .errorMark").animate({"opacity": "0"}, 200);
					// row6checks.push(1);
				}
			// Error Marks
				if(a2.length !== 0 && radioData[1][2] == true){
					$(".row1 .col2 .checkMark").animate({"opacity": "0"}, 200);
					$(".row1 .col2 .errorMark").animate({"opacity": "1"}, 200);
					// row1checks.push(1);
				}else if(a2.length !== 1 && radioData[2][2] == true){
					$(".row2 .col2 .checkMark").animate({"opacity": "0"}, 200);
					$(".row2 .col2 .errorMark").animate({"opacity": "1"}, 200);
					// row2checks.push(1);
				}else if(a2.length <= 1 && radioData[3][2] == true){
					$(".row3 .col2 .checkMark").animate({"opacity": "0"}, 200);
					$(".row3 .col2 .errorMark").animate({"opacity": "1"}, 200);
					// row3checks.push(1);
				}
				if(find(x2, a2) !== 0 && radioData[4][2] == true){
					$(".row4 .col2 .checkMark").animate({"opacity": "0"}, 200);
					$(".row4 .col2 .errorMark").animate({"opacity": "1"}, 200);
					// row4checks.push(1);
				}else if(find(x2, a2) !== 1 && radioData[5][2] == true){
					$(".row5 .col2 .checkMark").animate({"opacity": "0"}, 200);
					$(".row5 .col2 .errorMark").animate({"opacity": "1"}, 200);
					// row5checks.push(1);
				}else if(find(x2, a2) <= 1 && radioData[6][2] == true){
					$(".row6 .col2 .checkMark").animate({"opacity": "0"}, 200);
					$(".row6 .col2 .errorMark").animate({"opacity": "1"}, 200);
					// row6checks.push(1);
				}

				/*Column 3*/
			// Check Marks
				if(a3.length == 0 && radioData[1][3] == true){
					$(".row1 .col3 .checkMark").animate({"opacity": "1"}, 200);
					$(".row1 .col3 .errorMark").animate({"opacity": "0"}, 200);
					// row1checks.push(1);
				}else if(a3.length == 1 && radioData[2][3] == true){
					$(".row2 .col3 .checkMark").animate({"opacity": "1"}, 200);
					$(".row2 .col3 .errorMark").animate({"opacity": "0"}, 200);
					// row2checks.push(1);
				}else if(a3.length > 1 && radioData[3][3] == true){
					$(".row3 .col3 .checkMark").animate({"opacity": "1"}, 200);
					$(".row3 .col3 .errorMark").animate({"opacity": "0"}, 200);
					// row3checks.push(1);
				}
				if(find(x3, a3) == 0 && radioData[4][3] == true){
					$(".row4 .col3 .checkMark").animate({"opacity": "1"}, 200);
					$(".row4 .col3 .errorMark").animate({"opacity": "0"}, 200);
					// row4checks.push(1);
				}else if(find(x3, a3) == 1 && radioData[5][3] == true){
					$(".row5 .col3 .checkMark").animate({"opacity": "1"}, 200);
					$(".row5 .col3 .errorMark").animate({"opacity": "0"}, 200);
					// row5checks.push(1);
				}else if(find(x3, a3) > 1 && radioData[6][3] == true){
					$(".row6 .col3 .checkMark").animate({"opacity": "1"}, 200);
					$(".row6 .col3 .errorMark").animate({"opacity": "0"}, 200);
					// row6checks.push(1);
				}
			// Error Marks
				if(a3.length !== 0 && radioData[1][3] == true){
					$(".row1 .col3 .checkMark").animate({"opacity": "0"}, 200);
					$(".row1 .col3 .errorMark").animate({"opacity": "1"}, 200);
					// row1checks.push(1);
				}else if(a3.length !== 1 && radioData[2][3] == true){
					$(".row2 .col3 .checkMark").animate({"opacity": "0"}, 200);
					$(".row2 .col3 .errorMark").animate({"opacity": "1"}, 200);
					// row2checks.push(1);
				}else if(a3.length <= 1 && radioData[3][3] == true){
					$(".row3 .col3 .checkMark").animate({"opacity": "0"}, 200);
					$(".row3 .col3 .errorMark").animate({"opacity": "1"}, 200);
					// row3checks.push(1);
				}
				if(find(x3, a3) !== 0 && radioData[4][3] == true){
					$(".row4 .col3 .checkMark").animate({"opacity": "0"}, 200);
					$(".row4 .col3 .errorMark").animate({"opacity": "1"}, 200);
					// row4checks.push(1);
				}else if(find(x3, a3) !== 1 && radioData[5][3] == true){
					$(".row5 .col3 .checkMark").animate({"opacity": "0"}, 200);
					$(".row5 .col3 .errorMark").animate({"opacity": "1"}, 200);
					// row5checks.push(1);
				}else if(find(x3, a3) <= 1 && radioData[6][3] == true){
					$(".row6 .col3 .checkMark").animate({"opacity": "0"}, 200);
					$(".row6 .col3 .errorMark").animate({"opacity": "1"}, 200);
					// row6checks.push(1);
				}

				/*Turns a row red if there is more than one button clicked*/

				if(find(true, radioData[1]) < 1){
					console.log("Rows not filled")
					$(".row1").animate({backgroundColor: "#ffc4c4"}, 200);
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("Make sure you have an answer for every row")
				}	
				if(find(true, radioData[2]) < 1){
					console.log("Rows not filled")
					$(".row2").animate({backgroundColor: "#ffc4c4"}, 200);
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("Make sure you have an answer for every row")
				}
				if(find(true, radioData[3]) < 1){
					console.log("Rows not filled")
					$(".row3").animate({backgroundColor: "#ffc4c4"}, 200);
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("Make sure you have an answer for every row")
				}
				if(find(true, radioData[4]) < 1){
					console.log("Rows not filled")
					$(".row4").animate({backgroundColor: "#ffc4c4"}, 200);
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("Make sure you have an answer for every row")
				}
				if(find(true, radioData[5]) < 1){
					console.log("Rows not filled")
					$(".row5").animate({backgroundColor: "#ffc4c4"}, 200);
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("Make sure you have an answer for every row")
				}
				if(find(true, radioData[6]) < 1){
					console.log("Rows not filled")
					$(".row6").animate({backgroundColor: "#ffc4c4"}, 200);
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("Make sure you have an answer for every row")
				}

				/*Checks if all answers are correct*/
				/*for(var i = 1; i <= radioData.length; i++){

				}*/


			}catch(e){
				if($(".findInput1").val() === "" || $(".findInput2").val() === ""){
					console.log("You must have an input in every field");
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html("You must have an input in every field");
				}	
			}		
		})
	}
	exports.setup = setup;
	return exports;
}());

$(document).ready(function(){
	$(".JUnitTable1").each(function(){
		JUnitTable1.setup(this);
	});



});