/*
Header part for the page
*/
var header = {title:"Multiply Function",
			code:"/**\n* Find the multiplication of x, y and z.\n* @param x,y,z int values \n* @return the product of xyz. \n*/\npublic static int Multiply(int x, int y, int z) {\n  return xyz;\n}\n",
			explanation:"What we'll be doing here is attempting to exhaust our test cases given a function, <b>multiply</b>.  You'll see the code for find above.  </p>\n<p>On the left, as a label for every row, you'll see labels that define <b>key test cases</b>. You want to be sure that when you test your function, you test each of these cases.</p>\n<p>Input values for <b>x</b> and <b>a</b> into the top of each column, such that every row gets checked off."};

/*
All rows with their properties.
(Used mode when instructor give input partions)
*/
var allRows = ["ph",
		{group:1,title:"<b>x</b> negative",checkMembership:function (x,y,z){return x<0;}},
		{group:1,title:"<b>x</b> zero",checkMembership:function (x,y,z){return x==0;}},
		{group:1,title:"<b>x</b> positive",checkMembership:function (x,y,z){return x>0;}},
		{group:2,title:"<b>y</b> negative",checkMembership:function(x,y,z){return y<0;}},
		{group:2,title:"<b>y</b> zero",checkMembership:function(x,y,z){return y==0;}},
		{group:2,title:"<b>y</b> positive",checkMembership:function(x,y,z){return y>0;}},
		{group:3,title:"<b>z</b> negative",checkMembership:function(x,y,z){return z<0;}},
		{group:3,title:"<b>z</b> zero",checkMembership:function(x,y,z){return z==0;}},
		{group:3,title:"<b>z</b> positive",checkMembership:function(x,y,z){return z>0;}},
		];

/*
Function Name for the input fields
*/
var functionName="Multiply";

/*
Input name and type : string, number, object - add a checkType function to test whether it is an array or associative array or any datatype you want.
*/
var inputs=["ph",
			{name:"x",type:"number",display:"a number"},
			{name:"y",type:"number",display:"a number"},
			{name:"z",type:"number",display:"a number"}];


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
