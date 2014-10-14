
var util = require('util');
var fmt = util.format;


var check = function(input){
	var title = fmt('string.lempelziv : %s', input);

	test('string.lempelziv', function(assert){

		var Trie = string.simpletrie_t(256, function(key, i){ return key.charCodeAt(i); });


		var lempelziv = string.lempelziv_t(Trie, '\0');

		var index = [], suffix = [];

		lempelziv.encode(input, index, suffix);

		var decoded = lempelziv.decode(index, suffix);


		deepEqual(decoded, input, 'decoded message must be the same as input');

	});
};


var INP = [
	string.strmul('GZYAGZUAYZGUAYZFAAFAFTAZFTAFZTAFTZFATFA', 4),
	string.strmul('B', 81),
	''
];

INP.forEach(check);
