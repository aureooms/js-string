export default function __rfill__( c, n, mul ){
	const f = mul( c, n );
	return ( s ) => ( s + f ).slice( 0, n );
}
