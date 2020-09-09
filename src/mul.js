import {concat} from './concat';

export function mul ( s, n ) {

	var copies = new Array(n);

	while ( n-- ) copies[n] = s ;

	return concat( copies ) ;
}

