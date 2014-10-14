

var mul = function ( s, n ) {
	var a;

	a = new Array(n);

	while ( n-- ) {
		a[n] = s;
	}

	return a.join('');
};

exports.mul = mul;
