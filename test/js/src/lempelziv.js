
var util = require('util');
var fmt = util.format;


var check = function( input ){
	var title = fmt('string.lempelziv : %s', input);

	test('string.lempelziv', function(assert){

		var Trie = string.__simpletrie__( degree, string.__code__( offset ) );

		var lempelziv = string.__lempelziv__( Trie, end );

		var index = [], suffix = [];

		lempelziv.encode(input, index, suffix);

		var decoded = lempelziv.decode(index, suffix);

		deepEqual(decoded, input, 'decoded message must be the same as input');

	});
};



var offset = 65;

var degree = 256 - offset;

var end = '\0';

var INP = [
	string.mul('GZYAGZUAYZGUAYZFAAFAFTAZFTAFZTAFTZFATFA', 4),
	string.mul('B', 81),
	''
];

INP.forEach(check);
