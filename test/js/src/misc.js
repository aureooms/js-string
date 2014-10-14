test('string', function(assert){
	var c = '7';
	var n = 10;
	var mul = string.strmul;

	var lfill = string.lfill_t(c, n, mul);
	var rfill = string.rfill_t(c, n, mul);

	deepEqual(lfill('jjj'), '7777777jjj', 'lfill');
	deepEqual(rfill('jjj'), 'jjj7777777', 'rfill');
});
