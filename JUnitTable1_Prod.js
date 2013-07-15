/*Currently, the table only works with the "find" function*/

var JUnitTable1 = (function(){
	

	/*Nulls are placeholders so indexing is easier later*/
	
	var exports = {};

	var setup = function(div){
		/*
		Sort allRows in grouping sequence first
		*/
		allRows=["ph"].concat(allRows.slice(1).sort(function(a,b){return a.group>b.group;}));

		/*
		Define table here
		*/

		/*$(".randomDiv").css("width", (   parseFloat( $("body").css("width") ) - parseFloat( $("#submit1").css("width") )   ))
		$(window).resize(function(){
		    $(".randomDiv").css("width", (   parseFloat( $("body").css("width") ) - parseFloat( $("#submit1").css("width") )   ))
		});*/

		/*var tableContainer = $("<div class = 'tableContainer' style = 'width: 100%'></div>")*/
		var tableFixed = $("<table id = 'tablePartitions' class = 'table table-hover table-bordered' style: 'float: left'></table>");
		var tableContentContainer = $("<div id = 'tableContentCont'></div>");
		var tableContent = $("<table id = 'tableContent' class = 'table table-hover table-bordered' style: 'float: left'></table>")
		var infoTable = $("<table id = 'infoTable' class = 'table table-hover table-bordered' style: 'float: left'></table>")
		tableContentContainer.append(tableContent);

		/*var table = $("<table id = 'JUnitTable1' class = 'table table-hover table-bordered'></table>");*/
		var bottomDiv = $("<div style = 'width: 100%'></div>")
		var submit = $("<button id = 'submit1' class = 'btn btn-success btn-large' style = 'float: left'>Submit</button>")
		var alert = $("<div id = 'mainAlert' class = 'alert alert-error'>Test</div>")
		var success = $("<div id = 'mainSuccess' class = 'alert alert-success'>Test</div>")
		bottomDiv.append(submit, alert, success);

		/*Row0*/
		var row0Fixed = $("<tr class = 'row0'></tr>");
		var row0Content = $("<tr class = 'row0'></tr>")
		var emptyLabel = $("<td class = 'col0'><button class = 'plusButton btn btn-info'>New Column</button></td>");

		row0Fixed.append(emptyLabel);

		/*
		Add input fields
		*/
		for(var i=1;i<=numTestCases;i++){
			/*generate a string for input fields in HTML*/
			var temp="";
			for(var j=1;j<inputs.length-1;j++){
				temp+="<input id = '"+inputs[j].name+"Input"+i+"' class = 'findInput"+j+"' placeholder = '  "+inputs[j].name+"'></input>, ";
				
			}
			temp+="<input id = '"+inputs[inputs.length-1].name+"Input"+i+"' class = 'findInput"+(inputs.length-1)+"' placeholder = '  "+inputs[inputs.length-1].name+"'></input>";

			var findLabel = $("<td class = 'col" + i + "'><span>"+functionName+"("+temp+")</span><button class = 'delete btn btn-danger' style = 'float: right;'>Delete</button></td>");
			row0Content.append(findLabel);
		}

		tableFixed.append(row0Fixed);
		tableContent.append(row0Content);


		/*Table1*/
		for (var r = 1; r <= allRows.length-1; r++){
			var newRow = $("<tr class = 'row" + r + "'></tr>");
			for (var c = 0; c < columnsDisplayed.length; c++){
				var rowClass = ".row" + r;
				var newCol = $("<td style = 'vertical-align: middle' class = 'col" + c + "'></td>");
				
				/*Labels*/
				if (c == 0){
					newCol.append(allRows[r].title);
					newRow.append(newCol);
					tableFixed.append(newRow);
				}/*else if (c !== 0){
					var rowClass2 = ".row" + r;
					var newCol2 = $("<td class = 'col" + c + "'></td>");
					newCol2.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'customRadioFill'></span></span><img class = 'mark checkMark' src = 'images/checkMark.png'/><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span>"));
					newRow.append(newCol2);
					tableContent.append(newRow);
				}*/
				
			}
			
		}

		/*Table 2*/

		for (var r = 1; r <= allRows.length-1; r++){
			var newRow = $("<tr class = 'row" + r + "'></tr>");
			for (var c = 0; c < columnsDisplayed.length; c++){
				var rowClass = ".row" + r;
				var newCol = $("<td class = 'col" + c + "'></td>");
				
				/*Labels*/
				/*if (c == 0){
					newCol.append(allRows[r].title);
					newRow.append(newCol);
					tableFixed.append(newRow);
				}*/if (c !== 0){
					newCol.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'relative'><span class = 'customRadioFill'></span></span></span><span class = 'relative' ><img class = 'mark checkMark' src = 'images/checkMark.png'/></span><span class = 'relative'><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span></span>"));
					newRow.append(newCol);
					tableContent.append(newRow);
				}
				
			}
			
		}

		/*Table 3*/
		var numGroup1 = 0;
		for (var i = 0; i <= allRows.length - 1; i++){
			if (allRows[i].group == 1){
				numGroup1++;
			}
		}
		console.log("numGroup1: " + numGroup1)
		var numGroup2 = 0;
		for (var i = 0; i <= allRows.length - 1; i++){
			if (allRows[i].group == 2){
				numGroup2++;
			}
		}
		console.log("numGroup2: " + numGroup2)
		for (var i = 1; i <= numGroup1; i++){

			console.log("i: " + i);

			var mainCol = $("<tr><td id = 'infoTableLabel" + i + "' colspan = '" + numGroup2 + "' style = 'font-size: 16pt; text-align: center; vertical-align: middle'>"+ allRows[i].title + "</td></tr>")
			infoTable.append(mainCol);
			var subRow = $("<tr id = 'subRow" + i +"'></tr>");
			for (var n = 1; n <= numGroup2; n++){
				var subCol = $("<td id = 'infoSubLabel" + n + "' style = 'vertical-align: middle'>" + allRows[n + numGroup1].title + "</td>");
				subRow.append(subCol)
			}

			infoTable.append(mainCol, subRow);
			console.log("mainCol: " + mainCol.html())
			console.log("subRow: " + subRow.html())
			console.log("numGroup1: " + numGroup1)
		}
		
		

		$(div).append(tableFixed, tableContentContainer, infoTable, bottomDiv);

		

		

		/*Creates Grey bar in middle of table*/

		for (var r = 1; r <= allRows.length-2; r++){
			for (var c = 0; c < columnsDisplayed.length; c++){
				if (allRows[r].group < allRows[r+1].group){
					var cellID = ".row"+r+" .col" + c;
					$(cellID).css("border-bottom", "3px solid grey")

					var cellID = ".row"+(r+1)+" .col" + c;
					$(cellID).css("border-top", "3px solid grey")
				}
			}
		}
		$("#mainSuccess").hide();
		$("#mainAlert").hide();

		/*Allows us to animate backgroundColor (copied from stackOverflow)*/
		(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

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
		
		var radioFill = false;

		/*Adds another column to the table when the plus button is pressed*/
		
		var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
		var newNum = lastNumber + 1;

		$(".customRadioBorder").on("hover", function(){
			$(this).css('cursor', 'pointer');
		})
		for(var c=1;c<=numTestCases;c++){
			$(".col"+c+" .customRadioBorder").on("click", function(){
				var rowClass = $(this).parent('span').parent('td').parent('tr').attr("class");
				var rowIndex = rowClass[3];
				var colClass = $(this).parent('span').parent('td').attr("class");
				var colIndex = colClass.slice(3, colClass.length);

				console.log(radioData[rowIndex][colIndex]);

				if (radioData[rowIndex][colIndex] === false){
					console.log("rowClass: " + rowClass + ", colClass: " + colClass)
					d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 20).duration(200)
					.attr("stroke", "white").duration(200);
					radioFill = true;

				/*Automatically unchecks previously checked circle in the same group*/
					var thisGroup = allRows[rowIndex].group;
					for (var i = 0; i < allRows.length; i++){
						if (allRows[i].group == thisGroup){
							var thisGroupStart = i;
							break;
						}
					}
					for (var i = 0; i < allRows.length; i++){
						if (allRows[i].group == thisGroup + 1){
							var thisGroupEnd = i - 1;
							break;
						}
					}
					for (var i = thisGroupStart; i <= thisGroupEnd; i++){
						if(radioData[i][colIndex] === true){
							radioData[i][colIndex] = false;
							d3.select(".row" + i + " .col" + colIndex + " .circleFill").transition()
							.attr("r", 0).duration(200)
							.attr("stroke", "grey").duration(200);
						}
					}
				/*Fin*/

					radioData[rowIndex][colIndex] = true;

				/*Product Mode Checking*/
					if (thisGroup == 2){
						var otherGroup = 1;
						var thisIndex = rowIndex - numGroup1;
					}else if(thisGroup == 1){
						var otherGroup = 2;
						var thisIndex = rowIndex
					}
					for (var i = 0; i < allRows.length; i++){
						if (allRows[i].group == otherGroup){
							var otherGroupStart = i;
							break;
						}
					}
					for (var i = 0; i < allRows.length; i++){
						if (allRows[i].group == otherGroup + 1){
							var otherGroupEnd = i - 1;
							break;
						}
					}
					console.log("otherGroupStart: " + otherGroupStart)
					console.log("otherGroupEnd: " + otherGroupEnd)
					for (var i = otherGroupStart; i <= otherGroupEnd; i++){
						if(radioData[i][colIndex] === true){
							if (thisGroup == 2){
								var otherIndex = i;
								/*var otherGroup = 1;
								var thisIndex = rowIndex - numGroup1;*/
							}else if(thisGroup == 1){
								var otherIndex = i - numGroup2;
								/*var otherGroup = 2;
								var thisIndex = rowIndex*/
							}
						}
					}
					console.log("thisIndex: " + thisIndex);
					console.log("otherIndex: " + otherIndex);
					if (thisGroup == 1){
						/*$("#subRow" + thisIndex + " #infoSubLabel" + otherIndex).animate({backgroundColor: "#8dd626"}, 300);*/
						for (var i = 1; i <= numGroup1; i++){
							if (radioDataProd[i][otherIndex] === true){
								radioDataProd[i][otherIndex] = false;
							}
						}
						radioDataProd[thisIndex][otherIndex] = true;
						console.log(radioDataProd);
					}else if (thisGroup == 2){
						/*$("#subRow" + otherIndex + " #infoSubLabel" + thisIndex).animate({backgroundColor: "#8dd626"}, 300);*/
						for (var i = 1; i <= numGroup2; i++){
							if (radioDataProd[otherIndex][i] === true){
								radioDataProd[otherIndex][i] = false;
							}
						}
						radioDataProd[otherIndex][thisIndex] = true;
						console.log(radioDataProd);
					}
				/*Fin*/

					/*radioDataProd[rowIndex][] = true */
					/*for ()*/

				}else if(radioData[rowIndex][colIndex] === true){
					d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 0).duration(200)
					.attr("stroke", "grey").duration(200);
					radioFill = false;
					radioData[rowIndex][colIndex] = false;
				}
				
			})
		}


		$(".plusButton").on("click", function(){
			var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
			var newNum = lastNumber + 1;
			for (var r = 0; r <= allRows.length-1; r++){
				
				var rowClass = ".row" + r;
				var newCol = $("<td class = 'col" + newNum + "' style = 'width: 0px'></td>");

				if (r == 0){
					/*generate a string for input fields in HTML*/
					var temp="";
					for(var j=1;j<inputs.length-1;j++){
						temp+="<input id = '"+inputs[j].name+"Input"+newNum+"' class = 'findInput"+j+"' placeholder = '  "+inputs[j].name+"'></input>, ";
						
					}
					temp+="<input id = '"+inputs[inputs.length-1].name+"Input"+newNum+"' class = 'findInput"+(inputs.length-1)+"' placeholder = '  "+inputs[inputs.length-1].name+"'></input>";

					var newFindLabel = $(temp);
					var newDeleteBtn = $("<button class = 'delete btn btn-danger' style = 'float: right;'>Delete</button>")
					newCol.append("<span>Find(", newFindLabel, ")</span>", newDeleteBtn);
				}else{
					newCol.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'customRadioFill'></span></span><img class = 'mark checkMark' src = 'images/checkMark.png'/><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span>"));
				}
				/*$(".col" + newNum).children().css("opacity", 0)
				$(".col" + newNum).children().hide();*/

				$("#tableContent " + rowClass).append(newCol);

				/*var totalPx = parseFloat($("#JUnitTable1").css("width")) - parseFloat($(".col0").css("width"));
				var newWidth = totalPx/(columnsDisplayed.length + 0.5);
				console.log("totalPx: " + totalPx)
				console.log("newWidth: " + newWidth);
				$(".col" + newNum).animate({"width": newWidth}, 2000,function(){
					$(".col" + newNum).children().show();
					$(".col" + newNum).children().animate({"opacity": "1"}, 500, function(){
						$(".col" + newNum).css("width", "");
					});
					
				});*/

				

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


			$(".delete").on("mouseenter", function(){	
				var colClass = $(this).parent("td").attr("class");
				var colNum = parseInt(colClass.slice(3, colClass.length));
				if(colNum > 3){
					$(this).animate({"opacity": "1"}, 200);
					console.log("1:1")	
				}
			});
			$(".delete").on("mouseleave", function(){
				var colClass = $(this).parent("td").attr("class");
				var colNum = parseInt(colClass.slice(3, colClass.length));
				if(colNum  > 3){
					$(this).animate({"opacity": "0"}, 200);
					console.log("0:1")
				}
			})	
			

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
			
			/*Adds new column to columnsDisplayed array, and new unclicked radio Buttons to radioData array*/
			columnsDisplayed.push(newNum);
			console.log("columnsDisplayed: " + columnsDisplayed)
			for (var i = 1; i < radioData.length; i++){
				radioData[i].push(false);
			}
			console.log(radioData)

			var radioFill = false;

			
			$(".col"+newNum+" .customRadioBorder").on("click", function(){
				var rowClass = $(this).parent('span').parent('td').parent('tr').attr("class");
				var rowIndex = rowClass[3];
				var colClass = $(this).parent('span').parent('td').attr("class");
				var colIndex = colClass.slice(3, colClass.length);
				if (radioData[rowIndex][colIndex] === false){
					console.log("button will fill")
					console.log("rowClass: " + rowClass + ", colClass: " + colClass)
					d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 20).duration(200)
					.attr("stroke", "white").duration(200);
					radioFill = true;

				/*Automatically unchecks previously checked circle in the same group*/
					var thisGroup = allRows[rowIndex].group;
					for (var i = 0; i < allRows.length; i++){
						if (allRows[i].group == thisGroup){
							var thisGroupStart = i;
							break;
						}
					}
					for (var i = 0; i < allRows.length; i++){
						if (allRows[i].group == thisGroup + 1){
							var thisGroupEnd = i - 1;
							break;
						}
					}
					console.log("thisGroup: " + thisGroup);
					console.log("thisGroupStart: " + thisGroupStart);
					console.log("thisGroupEnd: " + thisGroupEnd);

					for (var i = thisGroupStart; i <= thisGroupEnd; i++){
						if(radioData[i][colIndex] == true){

							d3.select(".row" + i + " .col" + colIndex + " .circleFill").transition()
							.attr("r", 0).duration(200)
							.attr("stroke", "grey").duration(200);
							radioData[i][colIndex] == false;
						}
					}

					radioData[rowIndex][colIndex] = true;
					var g2StartIndex = 1+numGroup1;
					/*radioDataProd[rowIndex][] = true */
					/*for ()*/
				}else if(radioData[rowIndex][colIndex] === true){
					d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 0).duration(200)
					.attr("stroke", "grey").duration(200);
					radioFill = false;
					radioData[rowIndex][colIndex] = false;
					/*for ()*/
				}
				
			})
			console.log("radiobutton clicked")
			$(".delete").on("click", function(){
				console.log("delete clicked")
				var deleteCol = $(this).parent("td").attr("class");
				var deleteColNum = deleteCol.slice(3, deleteCol.length);
				console.log("deleteCol: " + deleteCol)
				
				if(parseInt(deleteColNum)>numTestCases){
					$("." + deleteCol).remove();
					if(columnsDisplayed.indexOf(parseInt(deleteColNum))!=-1){
						columnsDisplayed.splice(columnsDisplayed.indexOf(parseInt(deleteColNum)), 1);
					}
				}
				console.log(columnsDisplayed);
			})
		});

		$(".delete").on("click", function(){
			console.log("delete clicked")
			var deleteCol = $(this).parent("td").attr("class");
			var deleteColNum = deleteCol.slice(3, deleteCol.length);
			console.log("deleteCol: " + deleteCol)
			if(parseInt(deleteColNum)<=numTestCases){
				$("." + deleteCol).remove();
				if(columnsDisplayed.indexOf(parseInt(deleteColNum))!=-1){
					columnsDisplayed.splice(columnsDisplayed.indexOf(parseInt(deleteColNum)), 1);				
				}
			}

			console.log(columnsDisplayed);
		});

		$(".delete").on("mouseenter", function(){			
			var colClass = $(this).parent("td").attr("class");
			var colNum = parseInt(colClass.slice(3, colClass.length));
			if(colNum <= numTestCases){
				$(this).animate({"opacity": "1"}, 200);	
				console.log("1:2")
			}
		});
		$(".delete").on("mouseleave", function(){
			var colClass = $(this).parent("td").attr("class");
			var colNum = parseInt(colClass.slice(3, colClass.length));
			if(colNum  <= numTestCases){
				$(this).animate({"opacity": "0"}, 200);
				console.log("0:2")
			}
		})	


		/*Find method returns number of times a number was found in an array*/

//Temp just for debuging
$("#xInput1").val(1)
$("#xInput2").val(1)
$("#xInput3").val(1)
$("#aInput1").val("[]")
$("#aInput2").val("[1]")
$("#aInput3").val("[1,1]")

		/*Checks the user inputs when the submit button is pressed*/
		$("#submit1").on("click", function(){
			console.log("radioData: " , radioData);
			console.log("radioDataProd: " , radioDataProd)
			$("#mainAlert").hide();
			$("#mainSuccess").hide();

			$("#mainAlert").animate({"opacity": "0"}, 200);
			$("#mainSuccess").animate({"opacity": "0"}, 200);

			$(".checkMark").animate({"opacity": "0"}, 200);
			$(".errorMark").animate({"opacity": "0"}, 200);

			$("td").animate({backgroundColor: "white"}, 200);

			for(var i=1;i<=allRows.length-1;i++){
				$(".row"+i).animate({backgroundColor:"white"},200);
			}

			try{
				for (var x = 1; x <= numGroup1; x++){
					var counter = 0
					for (var y = 1; y <= numGroup2; y++){
						if (radioDataProd[x][y] === true){
							$("#subRow" + x + " #infoSubLabel" + y).animate({backgroundColor: "#8dd626"}, 300);
							counter++;
						}
						if (counter == numGroup2){
							$("infoTableLable").animate({backgroundColor: "#8dd626"}, 300);
						}
					}
				}
				/*Displays check and error marks based on user input*/
				for (var c = columnsDisplayed[1]; c <= columnsDisplayed[columnsDisplayed.length - 1]; c++){
					console.log("c: " + c)
					/*for loop stops when it reaches a number in columnsDisplayed that doesn't exist*/
					if (columnsDisplayed.indexOf(c) == -1){
						console.log("column does not exist, moving to next column")
					}else{

						var inputArray =[]; 
						for(var j=1;j<=inputs.length-1;j++){
							inputArray.push(JSON.parse($("#"+inputs[j].name+"Input" + c).val()));
						}
						for(var r=1;r<=allRows.length-2;r++){
							console.log("checkError marks animate: r: " + r);
							if(allRows[r].checkMembership.apply(null,inputArray)&& radioData[r][c] == true){
								console.log("TRUE: r: " + r)
								$(".row"+r+" .col"+c+" .checkMark").animate({"opacity":"1"},200);
								$(".row"+r+" .col"+c+" .errorMark").animate({"opacity":"0"},200);
							}
							if(!(allRows[r].checkMembership.apply(null,inputArray))&& radioData[r][c] == true){

								$(".row"+r+" .col"+c+" .checkMark").animate({"opacity": "0"}, 200);
								$(".row"+r+" .col"+c+" .errorMark").animate({"opacity": "1"}, 200);
							}
						}
					}
					console.log("columnsDisplayed Length: " + columnsDisplayed[columnsDisplayed.length - 1]) 
				}	
				
				/*
				Helper function
				*/
				function find(x, a){
					var instances = 0;
					for (var i = 0; i < a.length; i++){
						if (x == a[i]){
							instances++;
						}
					}
					return instances;
				}

				/*
				Type checking
				*/
				var hasShown =false; // whether an error msg has shown.
				for(var i=1;i<=inputs.length-1;i++){
					$(".findInput"+i).each(function(){
						if(typeof(JSON.parse(this.value))!=inputs[i].type){
							if(inputs[i].type!="object"||!inputs[i].checkObject(JSON.parse(this.value)))
							{
								$("#mainAlert").show();
								$("#mainAlert").animate({"opacity": "1"}, 200);
								$("#mainAlert").html(inputs[i].name+" has to be "+inputs[i].display);
								console.log(this.value,inputs[i].name,i)
								hasShown=true;
							}
						}
					});
				};

				/*Turns a row red if there is no button clicked*/
				if(!hasShown){
					for(var r=1;r<=allRows.length-1;r++){
						if(find(true,radioData[r])<1){
							$(".row"+r).animate({backgroundColor: "#ffc4c4"}, 200);
							$("#mainAlert").show();
							$("#mainAlert").animate({"opacity": "1"}, 200);
							$("#mainAlert").html("Make sure you have an answer for every row")
						}
					}
				}
				
				/*Checks if all answers are correct*/
				/*for(var i = 1; i <= radioData.length; i++){
				}*/
			}catch(e){
				console.log("error: "+e);				

				/*Some error checking*/
				var hasShown=false;
				var errmsg="The input fields don't make sense.\n";
				for(var i=1;i<=inputs.length-1;i++){
					$(".findInput"+i).each(function(){
						if(this.value==""){
							$("#mainAlert").show();
							$("#mainAlert").animate({"opacity": "1"}, 200);
							$("#mainAlert").html("You must enter every field.");
							hasShown=true;
						}
						
					});
					errmsg+=inputs[i].name+" has to be "+inputs[i].display+".\n";
				};
				if(!hasShown){
					$("#mainAlert").show();
					$("#mainAlert").animate({"opacity": "1"}, 200);
					$("#mainAlert").html(errmsg);
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
	
	$("#tablePartitions tr").height($("#tableContent .row1").height());
	$(".row0").height($(".row0 .col1").height());
	for (var i = 1; i <= allRows.length - 2; i++){
		if (allRows[i].group < allRows[i+1].group){
			$("#tablePartitions .row" + String(i)).height($("#tableContent .row3").height());
			$("#tablePartitions .row" + String(i+1)).height($("#tableContent .row4").height());
		}
	}
	

	$("#tableContentCont").width( ( parseFloat($("body").width()) - parseFloat( $("#infoTable").width() )- parseFloat( $("#tablePartitions").width() ) - 8) );
	$(window).resize(function(){
		$("#tableContentCont").width( ( parseFloat($("body").width()) - parseFloat( $("#infoTable").width() ) - parseFloat( $("#tablePartitions").width() ) - 8) )
	});
	$("#infoTable").height(  $("#tableContentCont").height()  )
}); 
