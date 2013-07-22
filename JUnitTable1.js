/*Currently, the table only works with the "find" function*/

var JUnitTable1 = (function(){
	var columnsDisplayed = [0, 1, 2, 3];

	/*Nulls are placeholders so indexing is easier later*/
	var radioData = [[null]];
	for(var i =0;i<allRows.length-1;i++){
		radioData.push([null, false, false, false]);
	}

	var exports = {};

//========================================================================================
//==Helper Function=======================================================================
//========================================================================================
	/*Creates Grey bar in middle of table*/
	function createBar(){
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
	}
//========================================================================================
	
	var setup = function(div){
		/*
		Sort allRows in grouping sequence first
		*/
		allRows=["ph"].concat(allRows.slice(1).sort(function(a,b){return a.group>b.group;}));

		/*
		Define table here
		*/
		var tableFixed = $("<table id = 'tableFixed' class = 'table table-hover table-bordered' style = 'float: left'></table>");
 		var tableContent = $("<table id = 'tableContent' class = 'table table-hover table-bordered' style = 'float: left'></table>");
 		var tableContentDiv = $('<div id = "tableContentDiv"></div>');
		var bottomDiv = $("<div style = 'width: 100%'></div>")
		var submit = $("<button id = 'submit1' class = 'btn btn-success btn-large' style = ''>Submit</button>")
		var alert = $("<div id = 'mainAlert' class = 'alert alert-error' style = 'float: right'>Test</div>")
		var success = $("<div id = 'mainSuccess' class = 'alert alert-success'>Test</div>")
		bottomDiv.append(submit, alert, success);
		tableContentDiv.append(tableContent);

		/*Row0*/
		var plusRow = $("<tr class = 'row0' style = 'height: 30px;'></tr>");
		var emptyLabel = $("<td class = 'col0'><button class = 'plusButton btn btn-info'>New Column</button></td>");

		plusRow.append(emptyLabel);
		tableFixed.append(plusRow);

		/*
		Add input fields
		*/
		var row0=$("<tr class = 'row0'></tr>");                        
		for(var i=1;i<=3;i++){
			/*generate a string for input fields in HTML*/
			var temp="";
			for(var j=1;j<inputs.length-1;j++){
				temp+="<input id = '"+inputs[j].name+"Input"+i+"' class = 'inputField"+j+"' placeholder = '  "+inputs[j].name+"'></input>, ";
				
			}
			temp+="<input id = '"+inputs[inputs.length-1].name+"Input"+i+"' class = 'inputField"+(inputs.length-1)+"' placeholder = '  "+inputs[inputs.length-1].name+"'></input>";

			var findLabel = $("<td id = 'inputs' class = 'col" + i + "'><span>"+functionName+"("+temp+")</span><button class = 'delete btn btn-danger' style = 'float: right;'>&times;</button></td>");
			row0.append(findLabel);
		}

		tableContent.append(row0);


		/*Table Content*/
		for (var r = 1; r <= allRows.length-1; r++){
			var newRow = $("<tr class = 'row" + r + "'></tr>");
			for (var c = 1; c < columnsDisplayed.length; c++){
				var rowClass = ".row" + r;
				var newCol = $("<td class = 'col" + columnsDisplayed[c] + "'></td>");
				
				/*Labels*/
				newCol.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'customRadioFill'></span></span><span class = relative><img class = 'mark checkMark' src = 'images/CheckMark.png'/><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span></span>"));
			
				newRow.append(newCol);
			}
			var newRowInfo = $("<tr class = 'row" + r + "'></tr>");
			var newColInfo = $("<td class = 'col" + 0 + "'></td>");
			newColInfo.append("<div>"+allRows[r].title+"</div>");
			newRowInfo.append(newColInfo);

			tableContent.append(newRow);
			tableFixed.append(newRowInfo);
		}
		
		$(div).append(tableFixed,tableContentDiv, bottomDiv);
		
		createBar();
		
		$(".JUnitTable1 #mainSuccess").hide();
		$(".JUnitTable1 #mainAlert").hide();

		/*Allows us to animate backgroundColor (copied from stackOverflow)*/
		(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

		var customRadioBorder = d3.selectAll(".JUnitTable1 .customRadioBorder").append("svg")
		.attr("class", "customRadio")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("cx", 19).attr("cy", 19).attr("r", 18).attr("stroke", "grey").attr("stroke-width", "1px").attr("fill", "white");

		var customRadioFill = d3.selectAll(".JUnitTable1 .customRadioFill").append("svg")
		.attr("class", "customRadioFill")
		.attr("width", "40px")
		.attr("height", "40px")
		.append("circle").attr("class", "circleFill").attr("cx", 20).attr("cy", 20).attr("r", 0).attr("fill", "#91cfff");
		
		/*Adds another column to the table when the plus button is pressed*/
		var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
		var newNum = lastNumber + 1;

		$(".JUnitTable1 .customRadioBorder").on("hover", function(){
			$(this).css('cursor', 'pointer');
		})
		for(var c=1;c<=3;c++){
			$(".JUnitTable1 .col"+c+" .customRadioBorder").on("click", function(){
				var rowClass = $(this).parent('span').parent('td').parent('tr').attr("class");
				var rowIndex = rowClass[3];
				var colClass = $(this).parent('span').parent('td').attr("class");
				var colIndex = colClass.slice(3, colClass.length);;

				if (radioData[rowIndex][colIndex] === false){
					d3.select(".JUnitTable1 ." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 20).duration(200)
					.attr("stroke", "white").duration(200);
					radioData[rowIndex][colIndex] = true;

					/*
					Uncheck the previous one in the same group
					*/
					for(var i=1;i<=allRows.length-1;i++){
						if(i!=rowIndex&&radioData[i][colIndex]&&allRows[i].group==allRows[rowIndex].group){
							d3.select(".JUnitTable1 .row"+i + " " + "." + colClass + " .circleFill").transition()
							.attr("r", 0).duration(200)
							.attr("stroke", "grey").duration(200);
							radioData[i][colIndex] = false;
						}
					}
				}else if(radioData[rowIndex][colIndex] === true){
					d3.select(".JUnitTable1 ." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 0).duration(200)
					.attr("stroke", "grey").duration(200);
					radioData[rowIndex][colIndex] = false;
				}
				
			})
		}

		/*
		plus button listener
		*/
		$(".JUnitTable1 .plusButton").on("click", function(){
			var lastNumber = columnsDisplayed[columnsDisplayed.length - 1];
			var newNum = lastNumber + 1;

			/*
			Adding a new column
			*/
			for (var r = 0; r <= allRows.length-1; r++){
				
				var rowClass = ".JUnitTable1 #tableContent .row" + r;
				var newCol = $("<td id = 'inputs' class = 'col" + newNum + "' style = 'width: 0px'></td>");

				if (r == 0){
					/*generate a string for input fields in HTML*/
					var temp="";
					for(var j=1;j<inputs.length-1;j++){
						temp+="<input id = '"+inputs[j].name+"Input"+newNum+"' class = 'inputField"+j+"' placeholder = '  "+inputs[j].name+"'></input>, ";
						
					}
					temp+="<input id = '"+inputs[inputs.length-1].name+"Input"+newNum+"' class = 'inputField"+(inputs.length-1)+"' placeholder = '  "+inputs[inputs.length-1].name+"'></input>";

					var newFindLabel = $(temp);
					var newDeleteBtn = $("<button class = 'delete btn btn-danger' style = 'float: right;'>&times;</button>")
					newCol.append("<span>"+functionName+"(", newFindLabel, ")</span>", newDeleteBtn);
				}else{
					newCol.append($("<span class = 'cellContent'><span class = 'customRadioBorder'><span class = 'customRadioFill'></span></span><span class='relative'><img class = 'mark checkMark' src = 'images/CheckMark.png'/><img class = 'mark errorMark' src = 'images/ErrorMark.png'/></span></span>"));
				}

				$(rowClass).append(newCol);
			}

			/*
			Show delete button for new columns
			*/
			$(".JUnitTable1 .delete").on("mouseenter", function(){	
				var colClass = $(this).parent("td").attr("class");
				var colNum = parseInt(colClass.slice(3, colClass.length));
				if(colNum > 3){
					$(this).animate({"opacity": "1"}, 200);
				}
			});
			/*
			Hide delete button for new columns
			*/
			$(".JUnitTable1 .delete").on("mouseleave", function(){
				var colClass = $(this).parent("td").attr("class");
				var colNum = parseInt(colClass.slice(3, colClass.length));
				if(colNum  > 3){
					$(this).animate({"opacity": "0"}, 200);
				}
			})	
			

			var customRadioBorder = d3.selectAll(".JUnitTable1 .col" + newNum +  " .customRadioBorder").append("svg")
			.attr("class", "customRadio")
			.attr("width", "40px")
			.attr("height", "40px")
			.append("circle").attr("cx", 19).attr("cy", 19).attr("r", 18).attr("stroke", "grey").attr("stroke-width", "1px").attr("fill", "white");

			var customRadioFill = d3.selectAll(".JUnitTable1 .col" + newNum + " .customRadioFill").append("svg")
			.attr("class", "customRadioFill")
			.attr("width", "40px")
			.attr("height", "40px")
			.append("circle").attr("class", "circleFill").attr("cx", 20).attr("cy", 20).attr("r", 0).attr("fill", "#91cfff");

			$(".JUnitTable1 .customRadioBorder").on("hover", function(){
				$(this).css('cursor', 'pointer');
			})
			
			/*Adds new column to columnsDisplayed array, and new unclicked radio Buttons to radioData array*/
			columnsDisplayed.push(newNum);
			for (var i = 1; i < radioData.length; i++){
				radioData[i].push(false);
			}

			$(".JUnitTable1 .col"+newNum+" .customRadioBorder").on("click", function(){
				var rowClass = $(this).parent('span').parent('td').parent('tr').attr("class");
				var rowIndex = rowClass[3];
				var colClass = $(this).parent('span').parent('td').attr("class");
				var colIndex = colClass.slice(3, colClass.length);
				if (!radioData[rowIndex][colIndex]){
					d3.select(".JUnitTable1 ." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 20).duration(200)
					.attr("stroke", "white").duration(200);
					radioData[rowIndex][colIndex] = true;

					/*
					Uncheck the previous one in the same group
					*/
					for(var i=1;i<=allRows.length-1;i++){
						if(i!=rowIndex&&radioData[i][colIndex]&&allRows[i].group==allRows[rowIndex].group){
							d3.select(".JUnitTable1 .row"+i + " " + "." + colClass + " .circleFill").transition()
							.attr("r", 0).duration(200)
							.attr("stroke", "grey").duration(200);
							radioData[i][colIndex] = false;
						}
					}
				}else{
					d3.select(".JUnitTable1 ." + rowClass + " " + "." + colClass + " .circleFill").transition()
					.attr("r", 0).duration(200)
					.attr("stroke", "grey").duration(200);
					radioData[rowIndex][colIndex] = false;
				}
				
			})

			/*
			Turn on delete button for new columns
			*/
			$(".JUnitTable1 .delete").on("click", function(){
				var deleteCol = $(this).parent("td").attr("class");
				var deleteColNum = deleteCol.slice(3, deleteCol.length);
				
				if(parseInt(deleteColNum)>3){
					$(".JUnitTable1 ." + deleteCol).remove();
					if(columnsDisplayed.indexOf(parseInt(deleteColNum))!=-1){
						columnsDisplayed.splice(columnsDisplayed.indexOf(parseInt(deleteColNum)), 1);
					}
				}
			})
			createBar();
		});


		/*
		Delete button listener
		*/
		$(".JUnitTable1 .delete").on("click", function(){
			var deleteCol = $(this).parent("td").attr("class");
			var deleteColNum = deleteCol.slice(3, deleteCol.length);
			if(parseInt(deleteColNum)<=3){
				$(".JUnitTable1 ." + deleteCol).remove();
				if(columnsDisplayed.indexOf(parseInt(deleteColNum))!=-1){
					columnsDisplayed.splice(columnsDisplayed.indexOf(parseInt(deleteColNum)), 1);				
				}
			}
		});

		/*apper only when mouse hovering over*/
		$(".JUnitTable1 .delete").on("mouseenter", function(){			
			var colClass = $(this).parent("td").attr("class");
			var colNum = parseInt(colClass.slice(3, colClass.length));
			if(colNum <= 3){
				$(this).animate({"opacity": "1"}, 200);	
			}
		});

		/*disappear when mouse leaves*/
		$(".JUnitTable1 .delete").on("mouseleave", function(){
			var colClass = $(this).parent("td").attr("class");
			var colNum = parseInt(colClass.slice(3, colClass.length));
			if(colNum  <= 3){
				$(this).animate({"opacity": "0"}, 200);
			}
		})	

		/*Checks the user inputs when the submit button is pressed*/
		$(".JUnitTable1 #submit1").on("click", function(){

			$(".JUnitTable1 #mainAlert").hide();
			$(".JUnitTable1 #mainSuccess").hide();

			$(".JUnitTable1 #mainAlert").animate({"opacity": "0"}, 200);
			$(".JUnitTable1 #mainSuccess").animate({"opacity": "0"}, 200);

			$(".JUnitTable1 .checkMark").animate({"opacity": "0"}, 200);
			$(".JUnitTable1 .errorMark").animate({"opacity": "0"}, 200);

			for(var i=1;i<=allRows.length-1;i++){
				$(".JUnitTable1 .row"+i).animate({backgroundColor:"white"},200);
			}

			try{
				/*Displays check and error marks based on user input*/
				for (var c = columnsDisplayed[1]; c <= columnsDisplayed[columnsDisplayed.length - 1]; c++){
					/*for loop stops when it reaches a number in columnsDisplayed that doesn't exist*/
					if (columnsDisplayed.indexOf(c) == -1){
					}else{

						var inputArray =[]; 
						for(var j=1;j<=inputs.length-1;j++){
							inputArray.push(JSON.parse($("#"+inputs[j].name+"Input" + c).val()));
						}
						for(var r=1;r<=allRows.length-1;r++){
							if(allRows[r].checkMembership.apply(null,inputArray)&& radioData[r][c] == true){
								$(".JUnitTable1 .row"+r+" .col"+c+" .checkMark").animate({"opacity":"1"},200);
								$(".JUnitTable1 .row"+r+" .col"+c+" .errorMark").animate({"opacity":"0"},200);
							}
							if(!(allRows[r].checkMembership.apply(null,inputArray))&& radioData[r][c] == true){

								$(".JUnitTable1 .row"+r+" .col"+c+" .checkMark").animate({"opacity": "0"}, 200);
								$(".JUnitTable1 .row"+r+" .col"+c+" .errorMark").animate({"opacity": "1"}, 200);
							}
						}
					}
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
					$(".JUnitTable1 .inputField"+i).each(function(){
						if(typeof(JSON.parse(this.value))!=inputs[i].type){
							if(inputs[i].type!="object"||!inputs[i].checkObject(JSON.parse(this.value)))
							{
								$(".JUnitTable1 #mainAlert").show();
								$(".JUnitTable1 #mainAlert").animate({"opacity": "1"}, 200);
								$(".JUnitTable1 #mainAlert").html(inputs[i].name+" has to be "+inputs[i].display);
								hasShown=true;
							}
						}
					});
				};

				/*Turns a row red if there is no button clicked*/
				if(!hasShown){
					for(var r=1;r<=allRows.length-1;r++){
						if(find(true,radioData[r])<1){
							$(".JUnitTable1 .row"+r).animate({backgroundColor: "#ffc4c4"}, 200);
							$(".JUnitTable1 #mainAlert").show();
							$(".JUnitTable1 #mainAlert").animate({"opacity": "1"}, 200);
							$(".JUnitTable1 #mainAlert").html("Make sure you have an answer for every row")
						}
					}
				}
				
				/*Checks if all answers are correct*/
				/*for(var i = 1; i <= radioData.length; i++){
				}*/
			}catch(e){
				console.log("error"+e);				

				/*Some error checking*/
				var hasShown=false;
				var errmsg="The input fields don't make sense.\n";
				for(var i=1;i<=inputs.length-1;i++){
					$(".JUnitTable1 .inputField"+i).each(function(){
						if(this.value==""){
							$(".JUnitTable1 #mainAlert").show();
							$(".JUnitTable1 #mainAlert").animate({"opacity": "1"}, 200);
							$(".JUnitTable1 #mainAlert").html("You must enter every field.");
							hasShown=true;
						}
						
					});
					errmsg+=inputs[i].name+" has to be "+inputs[i].display+".\n";
				};
				if(!hasShown){
					$(".JUnitTable1 #mainAlert").show();
					$(".JUnitTable1 #mainAlert").animate({"opacity": "1"}, 200);
					$(".JUnitTable1 #mainAlert").html(errmsg);
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
		$(this).css("border", "3px solid grey").css("border-radius", "10px");
	});

	//Resize the table

	$(".JUnitTable1 #tableFixed tr").height($(".JUnitTable1 #tableContent .row1").height());
	$(".JUnitTable1 .row0").height($(".JUnitTable1 .row0 .col1").height());
	for (var i = 1; i <= allRows.length - 2; i++){
		if (allRows[i].group < allRows[i+1].group){
			$(".JUnitTable1 #tableFixed .row" + String(i)).height($(".JUnitTable1 #tableContent .row3").height());
			$(".JUnitTable1 #tableFixed .row" + String(i+1)).height($(".JUnitTable1 #tableContent .row4").height());
		}
	}

	$(".JUnitTable1 #tableContentDiv").width( ( parseFloat($(".JUnitTable1").parent().width()) - parseFloat( $(".JUnitTable1 #tableFixed").width() ) - 8) );
	$(window).resize(function(){
		$(".JUnitTable1 #tableContentDiv").width( ( parseFloat($(".JUnitTable1").parent().width())  - parseFloat( $(".JUnitTable1 #tableFixed").width() ) - 8) )
	});
	$(".JUnitTable1 #tableFixed").height($(".JUnitTable1 #tableContent").height())
});