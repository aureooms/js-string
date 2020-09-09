

var mul = function ( s, n ) {

	var copies = new Array(n);

	while ( n-- ) copies[n] = s ;

	return concat( copies ) ;
};

exports.mul = mul;
