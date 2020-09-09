

export function __lfill__ ( c, n, mul ) {


	var f = mul( c, n );

	return function ( s ) {
		return ( f + s ).slice( -n );
	};

}



export function __rfill__( c, n, mul ){


	var f = mul( c, n );

	return function ( s ) {
		return ( s + f ).slice( 0, n );
	};

}

