/*Currently, the table only works with the "find" function*/

var JUnitTable1Prod = (function(){
	/*var debugLog = function(varName){
		var varName = varName;
		var obj = {};
		obj.varName = varName;
		for (var name in obj){
			var debugString = name;
			var debugValue = obj[name];
			console.log(debugString + ": " + debugValue);
		}

	}*/
	var columnsDisplayed = [];
	var radioData = [];
	var radioDataProd = [];
	var impossibleArray = [];
	var groupsArray = ["ph"];
	for (var i = 0; i <= numTestCases; i++){
		columnsDisplayed.push(i);
	}

	var numGroups = 1;
	for (var i = 1; i <= allRows.length - 2; i++){
		if (allRows[i + 1].group == allRows[i].group + 1){
			numGroups++;
		}
	}
	console.log("numGroups: " + numGroups);

	for (var i = 1; i <= numGroups; i++){
		for (var j = 1; j <= allRows.length - 1; j++){
			var counter = 0;
			if (allRows[j].group == i){
				counter++;
			}
		}
		groupsArray.push(counter);
	}

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

	/*Product Mode radioData*/
	/*groupArray = [3, 3, 3];*/

	/*radioData = ['ph',  [ [], ['ph', val, val, val], [], [] ],  [],  []  ];*/
	/*var newArray = [];
	for (var i = 1; i <= groupArray.length - 1; i++){
		if (radioDataProd.length == 0){
			var oldArray = radioDataProd;
			oldArray.push("ph");
			for (var j = 1; j <= groupArray[1]; j++){
				oldArray.push(newArray);
			}
		}else{
			var oldArray = newArray;
			var newArray = 
			for (var j = 1; j <= subArray.length; j++){

			}
		}
	}*/

	for (var i = 0; i <= numGroup1; i++){
		if(i == 0){
			radioDataProd.push(["ph"]);
			impossibleArray.push(["ph"]);
		}else{
			var newData = ["ph"];
			for (var n = 1; n <= numGroup2; n++){
				newData.push(false);
			}
			radioDataProd.push(newData);
			impossibleArray.push(newData);
		}
	}

	/*Sum Mode RadioData*/

	for (var i = 0; i < allRows.length; i++){
		if(i == 0){
			radioData.push(["ph"]);
		}else{
			var newData = ["ph"];
			for (var x = 1; x <= numTestCases; x++){
				newData.push(false);
			}
			radioData.push(newData);
		}
	}
	console.log(radioData);

	/*"ph"s are placeholders so indexing is easier later*/
	
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
		var infoDiv = $("<div id = 'infoDiv' class = 'table table-hover table-bordered' style: 'float: left'><legend><h3 style = 'text-align: center' >Test Cases to Check</h3></legend></div>")
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

			var findLabel = $("<td id = 'inputs' class = 'col" + i + "'><span>"+functionName+"("+temp+")</span><button class = 'delete btn btn-danger' style = 'float: right;'>&times;</button></td>");
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
	/*End*/

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
	/*End*/

	/*Table 3*/
		var numGroup1 = 0;
		for (var i = 0; i <= allRows.length - 1; i++){
			if (allRows[i].group == 1){
				numGroup1++;
			}
		}		
		var numGroup2 = 0;
		for (var i = 0; i <= allRows.length - 1; i++){
			if (allRows[i].group == 2){
				numGroup2++;
			}
		}		
		var infoList = $("<div><ul id = 'infoList'></ul></div>");
		var markImpossible = $("<div class = 'markImpossible'><span><i class = 'icon-arrow-down style = 'float: left'></i></span><span><h4 class = 'impossibleText'>Mark as Impossible</h4></span></div>");
		infoList.append(markImpossible);
		for (var i = 1; i <= numGroup1; i++){
			

			/*var mainCol = $("<li id = 'infoDivLabel" + i + "' colspan = '" + numGroup2 + "' style = 'font-size: 16pt; text-align: center; vertical-align: middle'>"+ allRows[i].title + "<li>")
			infoDiv.append(mainCol);*/
			var subRow = $("<tr id = 'subRow" + i +"'></tr>");
			for (var n = 1; n <= numGroup2; n++){
				var newListItem = $(
					"<div id = 'mainDivPartition' class = 'mainDivPartition" + i + "'>"
						+ "<span class = 'subDivPartition" + n + "'>"
							+ "<span = style = ' float: left; margin-right: 40px;' class = 'relative'>"
								+ "<img class = 'mark checkMark' style = 'height: 30px; margin-top: 4px' src = 'images/checkMark.png'/>"
							+ "</span>"
							+ "<span style = ' float: left;' class = 'relative'>"
								+ "<img class = 'mark errorMark' style = 'height: 30px; margin-top: 4px' src = 'images/ErrorMark.png'/>"
							+ "</span>"
							+ "<span style = 'margin-left: 40' class = 'cellContentMini'>"
								+ "<span class = 'customRadioBorderMini'>"
									+ "<span class = 'relative'>"
										+ "<span class = 'customRadioFillMini'></span>"
									+ "</span>"
								+ "</span>"
							+ "</span>"
							+ "<span id = 'mainPartition" + i + "' class = 'subPartition" + n + " testCases' style = 'font-size: 14pt; margin-bottom: 3px; margin-left: 10px;'>"
								+ allRows[i].title + ", " + allRows[n + numGroup1].title 
							+ "</span>"
						+ "</span>"
					+ "</div>")
				/*var subCol = $("<td class = 'subLabel' id = 'infoSubLabel" + n + "' style = 'vertical-align: middle; font-size: 14pt'>" + allRows[n + numGroup1].title + "</td>");*/
				infoList.append(newListItem)
			}

			infoDiv.append(infoList);
		}
	/*End*/
		
		$(div).append(tableFixed, tableContentContainer, infoDiv, bottomDiv);

	/*Creates Grey bar in middle of table*/
		for (var r = 1; r <= allRows.length-2; r++){
			for (var c = 0; c < columnsDisplayed.length; c++){
				if (allRows[r].group < allRows[r+1].group){
					var cellID = ".row"+r+" .col" + columnsDisplayed[c];
					$(cellID).css("border-bottom", "3px solid grey")

					var cellID = ".row"+(r+1)+" .col" + columnsDisplayed[c];
					$(cellID).css("border-top", "3px solid grey")
				}
			}
		}
	/*End*/

		$("#mainSuccess").hide();
		$("#mainAlert").hide();

	/*Allows us to animate backgroundColor (copied from stackOverflow)*/

		(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);
	/*End*/

	/*Big radio buttons*/	
		var customRadioBorder = d3.selectAll(".customRadioBorder").append("svg")
		.attr("class", "customRadio")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("cx", 19).attr("cy", 19).attr("r", 18).attr("stroke", "grey").attr("stroke-width", "1px").attr("fill", "white");

		var customRadioFill = d3.selectAll(".customRadioFill").append("svg")
		.attr("class", "customRadioFill")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("class", "circleFill").attr("cx", 20).attr("cy", 20).attr("r", 0).attr("fill", "#8bede5");
	/*End*/

	/*Little Radio Buttons*/
		var customRadioBorderMini = d3.selectAll(".customRadioBorderMini").append("svg")
		.attr("class", "customRadioMini")
		.attr("width", "22px")
		.attr("height", "22px")
		.append("circle").attr("cx", 12).attr("cy", 12).attr("r", 9).attr("stroke", "grey").attr("stroke-width", "1px").attr("fill", "white");

		var customRadioFillMini = d3.selectAll(".customRadioFillMini").append("svg")
		.attr("class", "customRadioFillMini")
		.attr("width", "20px")
		.attr("height", "20px")
		.append("circle").attr("class", "circleFillMini").attr("cx", 10).attr("cy", 10).attr("r", 0).attr("fill", "#e87878");	
	/*End*/

		var radioFill = false;
		
		var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
		var newNum = lastNumber + 1;

	/*Radio button hover leads to cursor change*/	
		$(".customRadioBorder").on("hover", function(){
			$(this).css('cursor', 'pointer');
		})
		$(".customRadioBorderMini").on("hover", function(){
			$(this).css('cursor', 'pointer');
		})
	/*End*/
		
	/*Code from Previous infoTable*/	
		var subLabelClicked = [["ph"], ["ph", false, false, false], ["ph", false, false, false], ["ph", false, false, false]];
		$(".subLabel").on("click", function(){
			var mainRowId = $(this).parent("tr").attr("id");
			var mainRowNum = parseInt(mainRowId.slice(6, mainRowId.length));
			var subColId = $(this).attr("id");
			var subColNum = parseInt(subColId.slice(12, subColId.length));

			if (subLabelClicked[mainRowNum][subColNum] === false){
				subLabelClicked[mainRowNum][subColNum] = true				
				$(this).html("Impossible");
				$(this).animate({backgroundColor: "#8cfbff"}, 200);
			}else if(subLabelClicked[mainRowNum][subColNum] === true){
				subLabelClicked[mainRowNum][subColNum] = false				
				var subColId = $(this).attr("id");
				var subColNum = parseInt(subColId.slice(12, subColId.length));
				$(this).html(allRows[subColNum + numGroup1].title);
				$(this).animate({backgroundColor: "#FFFFFF"}, 200);
			}
		})
		$(".subLabel").on("mouseenter", function(){
			var mainRowId = $(this).parent("tr").attr("id");
			var mainRowNum = parseInt(mainRowId.slice(6, mainRowId.length));
			var subColId = $(this).attr("id");
			var subColNum = parseInt(subColId.slice(12, subColId.length));
			if (subLabelClicked[mainRowNum][subColNum] === false){
				$(this).html("Impossible");
				$(this).css('cursor', 'pointer');
				$(this).animate({backgroundColor: "#c1fffc"}, 200);
			}
		});
		$(".subLabel").on("mouseleave", function(){
			var mainRowId = $(this).parent("tr").attr("id");
			var mainRowNum = parseInt(mainRowId.slice(6, mainRowId.length));
			var subColId = $(this).attr("id");
			var subColNum = parseInt(subColId.slice(12, subColId.length));
			if (subLabelClicked[mainRowNum][subColNum] === false){
				$(this).html(allRows[subColNum + numGroup1].title);
				$(this).animate({backgroundColor: "#FFFFFF"}, 200);
			}	
		});
	/*End*/
		
		$(".customRadioBorderMini").on("mouseenter", function(){
			var miniMainClass = $(this).parent("span").parent("span").parent("div").attr("class");
			var miniMainIndex = miniMainClass.slice(16, miniMainClass.length);
			var miniSubClass = $(this).parent("span").parent("span").attr("class");
			var miniSubIndex = miniSubClass.slice(15, miniSubClass.length);
			$(".mainDivPartition" + miniMainIndex + " .subPartition" + miniSubIndex).html("Mark as impossible");
		})
		$(".customRadioBorderMini").on("mouseleave", function(){
			var miniMainClass = $(this).parent("span").parent("span").parent("div").attr("class");
			var miniMainIndex = miniMainClass.slice(16, miniMainClass.length);
			var miniSubClass = $(this).parent("span").parent("span").attr("class");
			var miniSubIndex = miniSubClass.slice(15, miniSubClass.length);
			$(".mainDivPartition" + miniMainIndex + " .subPartition" + miniSubIndex).html(allRows[miniMainIndex].title + ", " + allRows[parseInt(miniSubIndex) + parseInt(numGroup1)].title);
		})
		$(".customRadioBorderMini").on("click", function(){
			var miniMainClass = $(this).parent("span").parent("span").parent("div").attr("class");
			var miniMainIndex = miniMainClass.slice(16, miniMainClass.length);
			var miniSubClass = $(this).parent("span").parent("span").attr("class");
			var miniSubIndex = miniSubClass.slice(15, miniSubClass.length);
			console.log("miniMainIndex: " + miniMainIndex);
			console.log("miniSubIndex: " + miniSubIndex);
			console.log(impossibleArray)

			if(radioDataProd[miniMainIndex][miniSubIndex] === true){
				
			/*Checks for the column that contains data for radioDataProd*/

				for (var c = 1; c <= columnsDisplayed[columnsDisplayed.length - 1]; c++){
					var clickedData = ["ph"];
					for (var r = 1; r <= allRows.length - 1; r++){

						if (radioData[r][c] == true){
							clickedData.push(allRows[r].index);
						}
					}
					if (clickedData.length == numGroups + 1){
						$("#mainAlert").html("You marked this case as possible");
						$("#mainAlert").show();
						$("#mainAlert").animate({"opacity": 1}, 200, function(){
							$("#mainAlert").animate({"opacity": 1}, 5000, function(){
								$("#mainAlert").animate({"opacity": 0}, 200);
							})
						})
						
						/*for (var i = 0; i < impossibleCases.length; i++){
							if (impossibleCases[i] == clickedData){
								console.log("You marked this case as possible");
								for (var r = 1; r <= allRows.length - 1; r++){
									if (radioData[r][c] == true){
										radioData[r][c] = false;
										d3.select(".row" + r + " " + ".col" + c + " .circleFill").transition()
										.attr("r", 0).duration(200)
										.attr("stroke", "grey").duration(200);
									}
								}
							}
						}*/
					}				
				}

				/*radioDataProd[miniMainIndex][miniSubIndex] = false;
				$(this).parent("span").parent("span").parent("div").animate({backgroundColor: "#f2f7f6"}, 200)*/
			}else if(impossibleArray[miniMainIndex][miniSubIndex] === false){
				console.log("mini clicked")
				d3.select(".mainDivPartition" + miniMainIndex + " .subDivPartition" + miniSubIndex + " .circleFillMini").transition()
				.attr("r", 10).duration(200)
				.attr("stroke", "#ffcece").duration(200);
				
				/*for (var c = 1; c <= columnsDisplayed[columnsDisplayed.length - 1]; c++){
					var clickedData = ["ph"];
					for (var r = 1; r <= allRows.length - 1; r++){

						if (radioData[r][c] == true){
							clickedData.push(allRows[r].index);
						}
					}
					if (clickedData.length == numGroups){
						for (var i = 0; i < impossibleCases.length; i++){
							if (impossibleCases[i] == clickedData){
								for (var r = 1; r <= allRows.length - 1; r++){
									if (radioData[r][c] == true){
										radioData[r][c] = false;
										d3.select(".row" + r + " " + ".col" + c + " .circleFill").transition()
										.attr("r", 0).duration(200)
										.attr("stroke", "grey").duration(200);
									}
								}
							}
						}
					}			
				}*/
				impossibleArray[miniMainIndex][miniSubIndex] = "impossible";

				$(this).parent("span").parent("span").parent("div").animate({backgroundColor: "#ffcece"}, 200);
			}else if(impossibleArray[miniMainIndex][miniSubIndex] == "impossible"){
				console.log("mini clicked")
				d3.select(".mainDivPartition" + miniMainIndex + " .subDivPartition" + miniSubIndex + " .circleFillMini").transition()
				.attr("r", 0).duration(200)
				.attr("stroke", "grey").duration(200);

				impossibleArray[miniMainIndex][miniSubIndex] = false;
				$(this).parent("span").parent("span").parent("div").animate({backgroundColor: "#f2f7f6"}, 200)
			}
			console.log(radioDataProd);
		})
	/*Clicking on main radio buttons*/
		for(var c=1;c<=numTestCases;c++){

			$(".col"+c+" .customRadioBorder").on("click", function(){

				var rowClass = $(this).parent('span').parent('td').parent('tr').attr("class");
				var rowIndex = rowClass[3];
				var colClass = $(this).parent('span').parent('td').attr("class");
				var colIndex = colClass.slice(3, colClass.length);
				

				if (radioData[rowIndex][colIndex] === false){
					/*for (var r = 1; r < allRows.length; r++){
						var thisGroup = allRows[r].group;
					}*/
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
					if (thisGroup == 1){
						var thisGroupEnd = thisGroupStart + numGroup1 - 1;
					}
					if (thisGroup == 2){
						var thisGroupEnd = thisGroupStart + numGroup2 - 1;
					}
										
					for (var i = thisGroupStart; i <= thisGroupEnd; i++){
						if(radioData[i][colIndex] === true){
							radioData[i][colIndex] = false;
							d3.select(".row" + i + " .col" + colIndex + " .circleFill").transition()
							.attr("r", 0).duration(200)
							.attr("stroke", "grey").duration(200);
						}
					}
				/*End*/

					radioData[rowIndex][colIndex] = true;

				}else if(radioData[rowIndex][colIndex] === true){
					d3.select("." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 0).duration(200)
					.attr("stroke", "grey").duration(200);
					radioFill = false;
					radioData[rowIndex][colIndex] = false;
				}

			/*Product Mode Checking*/	
				radioDataProd = [];
				for (var i = 0; i <= numGroup1; i++){
					if(i == 0){
						radioDataProd.push(["ph"]);
					}else{
						var newData = ["ph"];
						for (var n = 1; n <= numGroup2; n++){
							newData.push(false);
						}
						radioDataProd.push(newData);
					}
				}

			
				for(var c = 1; c<= columnsDisplayed.length-1; c++){
					var temp1=false, temp2=false;
					for(var r = 1; r<=numGroup1;r++){
						if(radioData[r][c]==true){
							var inputArray = [];
							for(var j=1; j<inputs.length;j++){
								inputArray.push(JSON.parse($("#"+inputs[j].name+"Input"+columnsDisplayed[c]).val()));
							}
							temp1=allRows[r].checkMembership.apply("ph",inputArray);
							ind1= r;							
							break;
						}
					}	

					for(var r = numGroup1+1; r <= numGroup1+numGroup2; r++){
						if(radioData[r][c]==true){
							var inputArray = [];
							for(var j=1; j<inputs.length;j++){
								inputArray.push(JSON.parse($("#"+inputs[j].name+"Input"+columnsDisplayed[c]).val()));
							}
							temp2=allRows[r].checkMembership.apply("ph",inputArray);
							ind2=r-numGroup1;							
							break;
						}
					}
					if(temp1&&temp2){
						radioDataProd[ind1][ind2]=true;
					}
				}
				console.log("radioDataProd: " + JSON.stringify(radioDataProd));
			/*End*/

				/*for(var i = 1;i<=columnsDisplayed.length-1;i++){
					for(var c = 1; c<= numGroup1+numGroup2;c++)						
				}*/
								
			})
		}
	/*End*/
	/*Adding a new column*/
		$(".plusButton").on("click", function(){
			var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
			var newNum = lastNumber + 1;
			for (var r = 0; r <= allRows.length-1; r++){
				
				var rowClass = ".row" + r;
				var newCol = $("<td id = 'inputs' class = 'col" + newNum + "' style = 'width: 0px'></td>");

				if (r == 0){
					/*generate a string for input fields in HTML*/
					var temp="";
					for(var j=1;j<inputs.length-1;j++){
						temp+="<input id = '"+inputs[j].name+"Input"+newNum+"' class = 'findInput"+j+"' placeholder = '  "+inputs[j].name+"'></input>, ";
						
					}
					temp+="<input id = '"+inputs[inputs.length-1].name+"Input"+newNum+"' class = 'findInput"+(inputs.length-1)+"' placeholder = '  "+inputs[inputs.length-1].name+"'></input>";

					var newFindLabel = $(temp);
					var newDeleteBtn = $("<button class = 'delete btn btn-danger' style = 'float: right;'>&times;</button>")
					newCol.append("<span>Find(", newFindLabel, ")</span>", newDeleteBtn);
				}else{
					newCol.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'relative'><span class = 'customRadioFill'></span></span></span><span class = 'relative'><img class = 'mark checkMark' src = 'images/checkMark.png'/></span><span class = 'relative'><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span></span>"));
				}
				/*$(".col" + newNum).children().css("opacity", 0)
				$(".col" + newNum).children().hide();*/

				$("#tableContent " + rowClass).append(newCol);

				/*var totalPx = parseFloat($("#JUnitTable1").css("width")) - parseFloat($(".col0").css("width"));
				var newWidth = totalPx/(columnsDisplayed.length + 0.5);								
				$(".col" + newNum).animate({"width": newWidth}, 2000,function(){
					$(".col" + newNum).children().show();
					$(".col" + newNum).children().animate({"opacity": "1"}, 500, function(){
						$(".col" + newNum).css("width", "");
					});
					
				});*/

				
				/*Labels*/	
			}


			$(".delete").on("mouseenter", function(){	
				var colClass = $(this).parent("td").attr("class");
				var colNum = parseInt(colClass.slice(3, colClass.length));
				if(colNum > 3){
					$(this).animate({"opacity": "1"}, 200);					
				}
			});
			$(".delete").on("mouseleave", function(){
				var colClass = $(this).parent("td").attr("class");
				var colNum = parseInt(colClass.slice(3, colClass.length));
				if(colNum  > 3){
					$(this).animate({"opacity": "0"}, 200);					
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
			.append("circle").attr("class", "circleFill").attr("cx", 20).attr("cy", 20).attr("r", 0).attr("fill", "#8bede5");


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

			for (var r = 1; r <= allRows.length-2; r++){
				for (var c = 0; c < columnsDisplayed.length; c++){
					if (allRows[r].group < allRows[r+1].group){
						var cellID = ".row"+r+" .col" + columnsDisplayed[c];
						$(cellID).css("border-bottom", "3px solid grey")

						var cellID = ".row"+(r+1)+" .col" + columnsDisplayed[c];
						$(cellID).css("border-top", "3px solid grey")
					}
				}
			}

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
					if (thisGroup == 1){
						var thisGroupEnd = thisGroupStart + numGroup1 - 1;
					}
					if (thisGroup == 2){
						var thisGroupEnd = thisGroupStart + numGroup2 - 1;
					}
					/*for (var i = 0; i < allRows.length - 1; i++){
						if (allRows[i + 1].group == thisGroup + 1 || allRows[i + 1].group === undefined){
							var thisGroupEnd = i;
							break;
						}
					}*/
					console.log("thisGroupStart: " + thisGroupStart);
					console.log("thisGroupEnd: " + thisGroupEnd);
					for (var i = thisGroupStart; i <= thisGroupEnd; i++){
						if(radioData[i][colIndex] === true){
							radioData[i][colIndex] = false;
							d3.select(".row" + i + " .col" + colIndex + " .circleFill").transition()
							.attr("r", 0).duration(200)
							.attr("stroke", "grey").duration(200);
						}
					}
				/*End*/
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

			/*Product Mode Checking*/	
				radioDataProd = [];
				for (var i = 0; i <= numGroup1; i++){
					if(i == 0){
						radioDataProd.push(["ph"]);
					}else{
						var newData = ["ph"];
						for (var n = 1; n <= numGroup2; n++){
							newData.push(false);
						}
						radioDataProd.push(newData);
					}
				}
			
				for(var c = 1; c<= columnsDisplayed.length-1; c++){
					var temp1=false, temp2=false;
					for(var r = 1; r<=numGroup1;r++){
						if(radioData[r][c]==true){
							var inputArray = [];
							for(var j=1; j<inputs.length;j++){
								inputArray.push(JSON.parse($("#"+inputs[j].name+"Input"+columnsDisplayed[c]).val()));
							}
							temp1=allRows[r].checkMembership.apply("ph",inputArray);
							ind1= r;
							console.log("temp1 = "+temp1+", ind1 = "+ind1);
							break;
						}
					}	

					for(var r = numGroup1+1; r <= numGroup1+numGroup2; r++){
						if(radioData[r][c]==true){
							var inputArray = [];
							for(var j=1; j<inputs.length;j++){
								inputArray.push(JSON.parse($("#"+inputs[j].name+"Input"+columnsDisplayed[c]).val()));
							}
							temp2=allRows[r].checkMembership.apply("ph",inputArray);
							ind2=r-numGroup1;
							console.log("temp2 = "+temp2+", ind2 = "+ind2);
							break;
						}
					}
					if(temp1&&temp2){
						radioDataProd[ind1][ind2]=true;
					}
				}
			/*End*/

				
			})			
			$(".delete").on("click", function(){				
				var deleteCol = $(this).parent("td").attr("class");
				var deleteColNum = deleteCol.slice(3, deleteCol.length);				
				
				if(parseInt(deleteColNum)>numTestCases){
					$("." + deleteCol).remove();
					if(columnsDisplayed.indexOf(parseInt(deleteColNum))!=-1){
						columnsDisplayed.splice(columnsDisplayed.indexOf(parseInt(deleteColNum)), 1);
					}
				}				
				$("#infoDiv").height(  $("#tableContentCont").height()  )
			})

			$("#infoDiv").height(  $("#tableContentCont").height()  )
		});
	/*End*/
		$(".delete").on("click", function(){			
			var deleteCol = $(this).parent("td").attr("class");
			var deleteColNum = deleteCol.slice(3, deleteCol.length);			
			if(parseInt(deleteColNum)<=numTestCases){
				$("." + deleteCol).remove();
				if(columnsDisplayed.indexOf(parseInt(deleteColNum))!=-1){
					columnsDisplayed.splice(columnsDisplayed.indexOf(parseInt(deleteColNum)), 1);				
				}
			}
			
			$("#infoDiv").height(  $("#tableContentCont").height()  )
		});

		$(".delete").on("mouseenter", function(){		
			var colClass = $(this).parent("td").attr("class");
			var colNum = parseInt(colClass.slice(3, colClass.length));
			console.log("colNum: " + colNum);
			console.log("numTestCases: " + numTestCases);
			if(colNum <= numTestCases){
				console.log("opacity: " + $(this).css("opacity"));
				$(this).animate({"opacity": "1"}, 200);					
			}
		});
		$(".delete").on("mouseleave", function(){
			var colClass = $(this).parent("td").attr("class");
			var colNum = parseInt(colClass.slice(3, colClass.length));
			if(colNum  <= numTestCases){
				$(this).animate({"opacity": "0"}, 200);				
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
			/*Code for previous table*/
				for (var x = 1; x <= numGroup1; x++){
					var counter = 0
					for (var y = 1; y <= numGroup2; y++){
						if (radioDataProd[x][y] === true){
							$("#subRow" + x + " #infoSubLabel" + y).animate({backgroundColor: "#8dd626"}, 300);
							counter++;
						}
						if (counter == numGroup2){
							$("#infoDivLabel" + x).animate({backgroundColor: "#8dd626"}, 300);
						}
					}
				}
			/*End*/

			/*Displays check and error marks based on user input*/
				for (var c = columnsDisplayed[1]; c <= columnsDisplayed[columnsDisplayed.length - 1]; c++){					
					/*for loop stops when it reaches a number in columnsDisplayed that doesn't exist*/
					if (columnsDisplayed.indexOf(c) == -1){
						console.log("column does not exist, moving to next column")
					}else{

						var inputArray =[]; 
						for(var j=1;j<=inputs.length-1;j++){
							inputArray.push(JSON.parse($("#"+inputs[j].name+"Input" + c).val()));
						}
						for(var r=1;r<=allRows.length-1;r++){							
							if(allRows[r].checkMembership.apply("ph",inputArray)&& radioData[r][c] == true){								
								$(".row"+r+" .col"+c+" .checkMark").animate({"opacity":"1"},200);
								$(".row"+r+" .col"+c+" .errorMark").animate({"opacity":"0"},200);
							}
							if(!(allRows[r].checkMembership.apply("ph",inputArray))&& radioData[r][c] == true){

								$(".row"+r+" .col"+c+" .checkMark").animate({"opacity": "0"}, 200);
								$(".row"+r+" .col"+c+" .errorMark").animate({"opacity": "1"}, 200);
							}
						}
					}					
				}
			/*End*/	

			/*Displays check and error marks in the info Div*/
				loop1:
				for (var i = 1; i < impossibleArray.length; i++){

					loop2:
					for (var j = 1; j < impossibleArray[i].length; j++){
						
						if (impossibleArray[i][j] == "impossible"){
							var dataCheck = ["ph", i, j];
							console.log("dataCheck: " + dataCheck);
							var rowCorrect = false;
							loop3:
							for (var n = 0; n < impossibleCases.length; n++){
								console.log(impossibleCases[n]);
								if (JSON.stringify(impossibleCases[n]) == JSON.stringify(dataCheck)){
									$(".mainDivPartition" + i + " .subDivPartition" + j + " .cellContentMini").parent("span").parent("div").animate({backgroundColor: "#b0fc71"}, 200)
									$(".mainDivPartition" + i + " .subDivPartition" + j + " .checkMark").animate({"opacity": "1"}, 200);
									d3.select(".mainDivPartition" + i + " .subDivPartition" + j + " .circleFillMini").transition()
									.attr("fill", "#00c403").attr("stroke", "#b0fc71");
									rowCorrect = true;
									break loop3;
								}

							}
							if (rowCorrect == false){
								$(".mainDivPartition" + i + " .subDivPartition" + j + " .errorMark").animate({"opacity": "1"}, 200);
							}
						}
					}
				}
			/*End*/
				
			/*Highlights table depending on radio buttons in main table	*/
				for (var i = 1; i < radioDataProd.length; i++){
					for (var j = 1; j < radioDataProd[i].length; j++){
						if (radioDataProd[i][j] == true && impossibleArray[i][j] !== "impossible"){
							$(".mainDivPartition" + i + " .subDivPartition" + j).parent("div").animate({backgroundColor: "#b0fc71"}, 300);
						}else if(radioDataProd[i][j] == false && impossibleArray[i][j] !== "impossible"){
							$(".mainDivPartition" + i + " .subDivPartition" + j).parent("div").animate({backgroundColor: "#e87878"}, 300);
						}
					}
				}
			/*End*/
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
								hasShown=true;
							}
						}
					});
				};

				/*Turns a row red if there is no button clicked*/
				/*if(!hasShown){
					for(var r=1;r<=allRows.length-1;r++){
						if(find(true,radioData[r])<1){
							$(".row"+r).animate({backgroundColor: "#ffc4c4"}, 200);
							$("#mainAlert").show();
							$("#mainAlert").animate({"opacity": "1"}, 200);
							$("#mainAlert").html("Make sure you have an answer for every row")
						}
					}
				}*/
				
				/*Checks if all answers are correct*/
				/*for(var i = 1; i <= radioData.length; i++){
				}*/
			}catch(e){				

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
	$(".JUnitTable1Prod").each(function(){
		JUnitTable1Prod.setup(this);
	});
	
	$("#tablePartitions tr").height($("#tableContent .row1").height());
	$(".row0").height($(".row0 .col1").height());
	for (var i = 1; i <= allRows.length - 2; i++){
		if (allRows[i].group < allRows[i+1].group){
			$("#tablePartitions .row" + String(i)).height($("#tableContent .row3").height());
			$("#tablePartitions .row" + String(i+1)).height($("#tableContent .row4").height());
		}
	}
	

	$("#tableContentCont").width( ( parseFloat($("body").width()) - parseFloat( $("#infoDiv").width() )- parseFloat( $("#tablePartitions").width() ) - 8) );
	$(window).resize(function(){
		$("#tableContentCont").width( ( parseFloat($("body").width()) - parseFloat( $("#infoDiv").width() ) - parseFloat( $("#tablePartitions").width() ) - 8) )
	});
	$("#infoDiv").height(  $("#tableContentCont").height()  )
}); 
