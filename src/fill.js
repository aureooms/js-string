

var __lfill__ = function ( c, n, mul ) {


	var f = mul( c, n );

	return function ( s ) {
		return ( f + s ).slice( -n );
	};

};



var __rfill__ = function( c, n, mul ){


	var f = mul( c, n );

	return function ( s ) {
		return ( s + f ).slice( 0, n );
	};

};

exports.__lfill__ = __lfill__;
exports.__rfill__ = __rfill__;
