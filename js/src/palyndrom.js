

var palyndrom = function ( s, i, j ) {

	var m, n, k;

	n = j - i;
	m = Math.floor( n / 2 );

	for ( k = 0 ; k < m ; ++k ) {
		if ( s[i + k] !== s[j - k - 1] ) {
			return false;
		}
	}

	return true;

}

exports.palyndrom = palyndrom;
