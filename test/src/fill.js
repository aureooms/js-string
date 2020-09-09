import test from 'ava';
import * as string from '../../src';
test('fill', (t) => {
	const c = '7';
	const n = 10;
	const mul = string.mul;

	const lfill = string.__lfill__(c, n, mul);
	const rfill = string.__rfill__(c, n, mul);

	t.is(lfill('jjj'), '7777777jjj', 'lfill');
	t.is(rfill('jjj'), 'jjj7777777', 'rfill');
});
