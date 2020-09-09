

export function __code__ ( offset ) {

	var code = function ( key, i ) {
		return key.charCodeAt( i ) - offset;
	};

	return code;

}


