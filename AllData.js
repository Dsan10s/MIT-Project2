/*
Header part for the page
*/
var header = 
		"<h1>Find Function</h1>"
		+"<pre class='prettyprint linenums'>/**\n* Find the first occurrence of x in sorted array a.\n* @param x int value to find\n* @param a array of integers to search for x\n* @return lowest i such that a[i]==x, or -1 if x not found in a. \n*/\npublic static int find(int x, int[] a) {\n  for (int i = 0; i < a.length; i++) {\n    if (x == a[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n</pre>"
		+"<p>What we'll be doing here is attempting to exhaust our test cases given a function, <b>find</b>.  You'll see the code for find below.  </p>\n<p>On the left, as a label for every row, you'll see labels that define <b>key test cases</b>. You want to be sure that when you test your function, you test each of these cases.</p>\n<p>Input values for <b>x</b> and <b>a</b> into the top of each column, such that every row gets checked off</p>";

/*
mode when instructor give input partions
*/
var rowNames = ["ph",
		{title:"<div><b>a</b> empty</div>"},
		{title:"<div>Length of <b>a</b> = 1</div>"},
		{title:"<div>Length of <b>a</b> > 1</div>"},
		{title:"<div><b>x</b> not in <b>a</b></div>"},
		{title:"<div><b>x</b> in <b>a</b> once</div>"},
		{title:"<div><b>x</b> in <b>a</b> more than once</div>"}
		];
/*
Implementations for the second table's rows. 
*/
var code =["ph", "public static int find(int x, int[] a) {\n  for (int i = 0; i < a.length; i++) {\n    if (x == a[i]) {\n      return i;\n    }\n  }\n  return -1;\n}\n", "public static int find(int x, int[] a){\n  int i=0;\n  while (i<a.length){\n    if(x != a[i]){\n      i++;\n    }else{\n      return i;\n    }\n  }\n  return -1;\n}\n", "public static int find(int x, int[] a){\n  int i=0;\n  while (i<a.length && x != a[i]){\n    i++;\n  }\n  return i;\n}\n", "public static int find(int x, int[] a) {\nfor (int i = a.length-1; i >-1 ; i--) {\n  if (x == a[i]) {\n    return i;\n  }\n}\n  return -1;\n}\n", "public static int find(int x, int[] a){\n  int i=a.length-1;\n  while (i>=0 && x != a[i]){\n    i--;\n  }\n  return i;\n}\n", "public static int find(int x, int[] a){\n  if(a.length==0){\n    return -1;\n  }else if(x!=a[0]){\n    //A copied version of a without the first element\n    int[] copyA = new int[a.length-1];\n    System.arraycopy(a, 1, copyA, 0,a.length-1);\n    return 1+find(x,copyA);\n  }else{\n    return 0;\n  }\n}\n", "public static int find(int x,int[] a){\n  if(a.length==0){\n    return -1;\n  }else if(x==a[0]){\n    return 0;\n  }\n}\n"];

