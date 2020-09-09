

export function palindrome ( s , i , j ) {

	while ( i < j ) if ( s[i++] !== s[--j] ) return false ;

	return true ;

}

