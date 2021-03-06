/*
Header part for the page
*/
var header = 
		"<h1>Find Function</h1>"
		+"<pre class='prettyprint linenums'>/**\n* Find the first occurrence of x in sorted array a.\n* @param x int value to find\n* @param a array of integers to search for x\n* @return lowest i such that a[i]==x, or -1 if x not found in a. \n*/\npublic static int Find(int x, int[] a) {\n  for (int i = 0; i < a.length; i++) {\n    if (x == a[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n</pre>"
		+"<p>What we'll be doing here is attempting to exhaust our test cases given a function, <b>find</b>.  You'll see the code for find above.  </p>\n<p>On the left, as a label for every row, you'll see labels that define <b>key test cases</b>. You want to be sure that when you test your function, you test each of these cases.</p>\n<p>Input values for <b>x</b> and <b>a</b> into the top of each column, such that every row gets checked off</p>";

/*
All rows with their properties.
(Used mode when instructor give input partions)
*/
var allRows = ["ph",
		{group:1,title:"<div><b>a</b> empty</div>",checkMembership:function (x,a){return a.length==0}},
		{group:1,title:"<div>Length of <b>a</b> = 1</div>",checkMembership:function (x,a){return a.length==1}},
		{group:1,title:"<div>Length of <b>a</b> > 1</div>",checkMembership:function (x,a){return a.length>1}},
		{group:2,title:"<div><b>x</b> not in <b>a</b></div>",checkMembership:function(x,a){return find(x,a)==0}},
		{group:2,title:"<div><b>x</b> in <b>a</b> once</div>",checkMembership:function(x,a){return find(x,a)==1}},
		{group:2,title:"<div><b>x</b> in <b>a</b> more than once</div>",checkMembership:function(x,a){return find(x,a)>1}}
		];

/*
Function Name
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
