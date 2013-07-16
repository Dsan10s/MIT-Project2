/*
Allows you to set the initial number of test cases
*/

var numTestCases = 3;

/*
Header part for the page
*/
var header = {title:"Find Function",
			code:"/**\n* Find the first occurrence of x in sorted array a.\n* @param x int value to find\n* @param a array of integers to search for x\n* @return lowest i such that a[i]==x, or -1 if x not found in a. \n*/\npublic static int Find(int x, int[] a) {\n  for (int i = 0; i < a.length; i++) {\n    if (x == a[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n",
			explanation:"What we'll be doing here is attempting to exhaust our test cases given a function, <b>find</b>.  You'll see the code for find above.  </p>\n<p>On the left, as a label for every row, you'll see labels that define <b>key test cases</b>. You want to be sure that when you test your function, you test each of these cases.</p>\n<p>Input values for <b>x</b> and <b>a</b> into the top of each column, such that every row gets checked off."};

/*
All rows with their properties.
(Used mode when instructor give input partions)
*/
var allRows = ["ph",
		{group:1,title:"<b>a</b> empty",checkMembership:function (x,a){return a.length==0}},
		{group:1,title:"Length of <b>a</b> = 1",checkMembership:function (x,a){return a.length==1}},
		{group:1,title:"Length of <b>a</b> > 1",checkMembership:function (x,a){return a.length>1}},
		{group:2,title:"<b>x</b> not in <b>a</b>",checkMembership:function(x,a){return find(x,a)==0}},
		{group:2,title:"<b>x</b> in <b>a</b> once",checkMembership:function(x,a){return find(x,a)==1}},
		{group:2,title:"<b>x</b> in <b>a</b> more than once",checkMembership:function(x,a){return find(x,a)>1}}/*,
		{group:3,title:"Impossible"}*/
		];

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
Implementations for the second table's rows. 
*/
var code =["ph", "public static int find(int x, int[] a) {\n  for (int i = 0; i < a.length; i++) {\n    if (x == a[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n", "public static int find(int x, int[] a){\n  int i=0;\n  while (i<a.length){\n    if(x != a[i]){\n      i++;\n    }else{\n      return i;\n    }\n  }\n  return -1;\n}\n", "public static int find(int x, int[] a){\n  int i=0;\n  while (i<a.length && x != a[i]){\n    i++;\n  }\n  return i;\n}\n", "public static int find(int x, int[] a) {\nfor (int i = a.length-1; i >-1 ; i--) {\n  if (x == a[i]) {\n    return i;\n  }\n}\n  return -1;\n}\n", "public static int find(int x, int[] a){\n  int i=a.length-1;\n  while (i>=0 && x != a[i]){\n    i--;\n  }\n  return i;\n}\n", "public static int find(int x, int[] a){\n  if(a.length==0){\n    return -1;\n  }else if(x!=a[0]){\n    //A copied version of a without the first element\n    int[] copyA = new int[a.length-1];\n    System.arraycopy(a, 1, copyA, 0,a.length-1);\n    return 1+find(x,copyA);\n  }else{\n    return 0;\n  }\n}\n", "public static int find(int x,int[] a){\n  if(a.length==0){\n    return -1;\n  }else if(x==a[0]){\n    return 0;\n  }\n}\n"];


//====================================================================================
//Helper functions for checkMembership


var columnsDisplayed = [];
var radioData = [];
var radioDataProd = [];
for (var i = 0; i <= numTestCases; i++){
	columnsDisplayed.push(i);
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

for (var i = 0; i <= numGroup1; i++){
	if(i == 0){
		radioDataProd.push([null]);
	}else{
		var newData = [null];
		for (var n = 1; n <= numGroup2; n++){
			newData.push(false);
		}
		radioDataProd.push(newData);
	}
}

/*Sum Mode RadioData*/

for (var i = 0; i < allRows.length; i++){
	if(i == 0){
		radioData.push([null]);
	}else{
		var newData = [null];
		for (var x = 1; x <= numTestCases; x++){
			newData.push(false);
		}
		radioData.push(newData);
	}
}
console.log(radioData);

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
