public class Implementation{

	/**
	* Find the first occurrence of x in sorted array a.
	* @param x int value to find
	* @param a array of integers to search for x
	* @return lowest i such that a[i]==x, or -1 if x not found in a. 
	*/

	//Good 
	public static int find(int x, int[] a) {
		for (int i = 0; i < a.length; i++) {
			if (x == a[i]) {
				return i;
			}
		}
		return -1;
	}

	//Good
	public static int find(int x, int[] a){
		int i=0;
		while (i<a.length){
			if(x != a[i]){
				i++;
			}else{
				return i;
			}
		}
		return -1;
	}

	//Bad if x not in a or a empty
	public static int find(int x, int[] a){
		int i=0;
		while (i<a.length && x != a[i]){
			i++;
		}
		return i;
	}

	//Bad if x in a more than once
	public static int find(int x, int[] a) {
	for (int i = a.length-1; i >-1 ; i--) {
		if (x == a[i]) {
			return i;
		}
	}
		return -1;
	}

	//Bad if x in a more than once
	public static int find(int x, int[] a){
		int i=a.length-1;
		while (i>=0 && x != a[i]){
			i--;
		}
		return i;
	}

	//Bad if x not in a but work if a empty
	public static int find(int x, int[] a){
		if(a.length==0){
			return -1;
		}else if(x!=a[0]){
			//A copied version of a without the first element
			int[] copyA = new int[a.length-1];
			System.arraycopy(a, 1, copyA, 0,a.length-1);
			return 1+find(x,copyA);
		}else{
			return 0;
		}
	}

	//Bad if a.length>1
	public static int find(int x,int[] a){
		if(a.length==0){
			return -1;
		}else if(x==a[0]){
			return 0;
		}
	}

	public static void main(String[] args){
		int[] a=new int[]{
				1,2,3,4,5,6
			};
	}
}