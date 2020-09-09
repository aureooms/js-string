
function t ( s , sep , maxsplit , expected ) {
	deepEqual( string.split( s , sep , maxsplit ) , expected , [ s , sep , maxsplit , expected ] ) ;
}

test( 'split' , function ( ) {

	t( '1 2 3' , undefined , undefined , ['1', '2', '3'] ) ;
	t( '1 2 3 4' , undefined , undefined , ['1', '2', '3', '4'] ) ;
	t( '1 2 3' , undefined , 1 , ['1', '2 3'] ) ;
	t( '   1   2   3   ' , undefined , undefined , ['1', '2', '3'] ) ;
	t( '' , undefined , undefined , [ ] ) ;
	t( '  \t\n  \t' , undefined , undefined , [ ] ) ;

	t( '1<>2<>3' , '<>' , undefined , ['1', '2', '3'] ) ;
	t( '1,,2' , ',' , undefined , ['1', '', '2'] ) ;

	t( '1,2,3' , ',' , undefined , ['1', '2', '3'] ) ;
	t( '1,2,3' , ',', 1 , ['1', '2,3'] ) ;
	t( '1,2,,3,' , ',' , undefined , ['1', '2', '', '3', ''] ) ;
	t( '' , ',' , undefined , [ '' ] ) ;

	t( ',1,2,3,' , ',' , 10 , ['', '1', '2', '3', ''] ) ;

	raises( string.split.bind( null , '123' , '' ) , /empty separator/ , 'emty sep raises' ) ;

} ) ;
