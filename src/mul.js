import concat from './concat';

export default function mul ( s, n ) {
	const copies = new Array(n);
	while ( n-- ) copies[n] = s ;
	return concat( copies ) ;
}
