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
		var coppyA = a.slice(1);
		return 1+find(x,copyA); 
	}else{
		return 0;
	}
var G = function (x,a){
	if(a.length==0){
		return -1;
	}else if(x==a[0]){
		return 0;
	}
}
}