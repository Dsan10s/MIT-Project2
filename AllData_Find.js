//====================================================================================

//Helper functions for checkMembership
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

/*For verifying good and bad codes*/
var A= function(x,a){
	for(i=0;i<a.length;i++){
		if(x==a[i]){
			return i;
		}
	}
	return -1;
}

var B= function(x,a){
	var i=0;
	while (i<a.length){
		if(x!=a[i]){
			i++;
		}else{
			return i;
		}
	}
	return -1;
}

var C=function(x,a){
	var i=0;
	while(i<a.length && x !=a[i]){
		i++;
	}
	return i;
}

var D = function(x,a){
	for(var i = a.length-1;i>-1;i--){
		return i;

	}
	return -1;
}

var E = function(x,a){
	var i = a.length-1;
	while (i>=0 && x!=a[0]){
		i--;
	}
	return i;
}

var F = function (x,a) {
	if(a.length==0){
		return -1;
	}else if (x!=a[0]){
		var copyA = a.slice(1);
		return 1+find(x,copyA); 
	}else{
		return 0;
	}
}
var G = function (x,a){
	if(a.length==0){
		return -1;
	}else if(x==a[0]){
		return 0;
	}
}

//====================================================================================

/*
Allows you to set the initial number of test cases
*/

var numTestCases = 3;

/*
Header part for the page
*/
var header = {title:"Find Function",
			code:"/**\n* Find the first occurrence of x in sorted array a.\n* @param x int value to find\n* @param a array of integers to search for x\n* @return lowest i such that a[i]==x, or -1 if x not found in a. \n*/\npublic static int Find(int x, int[] a) {\n  for (int i = 0; i < a.length; i++) {\n    if (x == a[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n",
			explanation:"What we'll be doing here is attempting to exhaust our test cases given a function, <b>find</b>.  You'll see the code for find above." 
			+ "</p>\n<p>Below you will see 3 tables.  Each table has it's own way of testing test cases.  For information on how each table works, you can click on the question mark next to that respective table, or if you need more info, check out the help section above."};

/*
All rows with their properties.
(Used mode when instructor give input partions)
*/
var allRows = ["ph",
		{group:1,title:"<b>a</b> empty",checkMembership:function (x,a){return a.length==0}, index: 1},
		{group:1,title:"Length of <b>a</b> = 1",checkMembership:function (x,a){return a.length==1}, index: 2},
		{group:1,title:"Length of <b>a</b> > 1",checkMembership:function (x,a){return a.length>1}, index: 3},
		{group:2,title:"<b>x</b> not in <b>a</b>",checkMembership:function(x,a){return find(x,a)==0}, index: 1},
		{group:2,title:"<b>x</b> in <b>a</b> once",checkMembership:function(x,a){return find(x,a)==1}, index: 2},
		{group:2,title:"<b>x</b> in <b>a</b> more than once",checkMembership:function(x,a){return find(x,a)>1}, index: 3}/*,
		{group:3,title:"Impossible"}*/
		];

/*impossibleCases array: number at index 1 corresponds to index within group 1, number at index 2 corresponds to index within group 2, ect.*/
var impossibleCases = [["ph", 1,2], ["ph", 1, 3], ["ph", 2, 3]];
/*
Function Name for the input fields
*/
var functionName="Find";

/*
Input name and type : string, number, object - add a checkType function to test whether it is an array or associative array or any datatype you want.
*/
var inputs=["ph",
			{name:"x",type:"number",display:"a number"},
			{name:"a",type:"object",display:"an array", checkObject:function(object){return Object.prototype.toString.call( object ) === '[object Array]';}}]


/*
Implementations for the second table's rows, and checking function.
*/
var code =["ph", 
			{jv:"public static int find(int x, int[] a) {\n  for (int i = 0; i < a.length; i++) {\n    if (x == a[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n",js:A,isGood: true}, 
			{jv:"public static int find(int x, int[] a){\n  int i=0;\n  while (i < a.length){\n    if(x != a[i]){\n      i++;\n    }else{\n      return i;\n    }\n  }\n  return -1;\n}\n",js:B, isGood:true}, 
			{jv:"public static int find(int x, int[] a){\n  int i=0;\n  while (i < a.length && x != a[i]){\n    i++;\n  }\n  return i;\n}\n",js:C, isGood : false}, 
			{jv:"public static int find(int x, int[] a) {\nfor (int i = a.length-1; i >-1 ; i--) {\n  if (x == a[i]) {\n    return i;\n  }\n}\n  return -1;\n}\n",js:D, isGood:false}, 
			{jv:"public static int find(int x, int[] a){\n  int i=a.length-1;\n  while (i>=0 && x != a[i]){\n    i--;\n  }\n  return i;\n}\n",js:E, isGood:false}, 
			{jv:"public static int find(int x, int[] a){\n  if(a.length==0){\n    return -1;\n  }else if(x!=a[0]){\n    int[] copyA = new int[a.length-1];\n    System.arraycopy(a,1,copyA,0,a.length-1);\n    return 1+find(x,copyA);\n  }else{\n    return 0;\n  }\n}\n",js:F,isGood: false}, 
			{jv:"public static int find(int x,int[] a){\n  if(a.length==0){\n    return -1;\n  }else if(x==a[0]){\n    return 0;\n  }\n}\n",js:G, isGood :false}];
//A good code that we want to compare answers with.
var goodFunction = A;

/*For verifying good and bad codes*/
var A= function(x,a){
	for(i=0;i<a.length;i++){
		if(x==a[i]){
			return i;
		}
	}
	return -1;
}

var B= function(x,a){
	var i=0;
	while (i<a.length){
		if(x!=a[i]){
			i++;
		}else{
			return i;
		}
	}
	return -1;
}

var C=function(x,a){
	var i=0;
	while(i<a.length && x !=a[i]){
		i++;
	}
	return i;
}

var D = function(x,a){
	for(var i = a.length-1;i>-1;i--){
		return i;

	}
	return -1;
}

var E = function(x,a){
	var i = a.length-1;
	while (i>=0 && x!=a[0]){
		i--;
	}
	return i;
}

var F = function (x,a) {
	if(a.length==0){
		return -1;
	}else if (x!=a[0]){
		var copyA = a.slice(1);
		return 1+find(x,copyA); 
	}else{
		return 0;
	}
}
var G = function (x,a){
	if(a.length==0){
		return -1;
	}else if(x==a[0]){
		return 0;
	}
}

