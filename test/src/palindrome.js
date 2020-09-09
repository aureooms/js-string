

var one = function ( s, v ) {
	deepEqual( string.palindrome( s, 0, s.length ), v, s );
};


test( "palindrome", function () {

	one( "", true );
	one( "Ö", true );
	one( "x", true );
	one( "xx", true );
	one( "xyx", true );
	one( "xyx", true );
	one( "sator arepo tenet opera rotas", true );

	one( "ab", false );
	one( "abc", false );
	one( "abca", false );
	one( "sator arepo tenët opera rotas", false );
	one( "Sator Arepo Tenet Opera Rotas", false );


});
