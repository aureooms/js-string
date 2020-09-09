import test from 'ava';

import {enumerate, range} from '@aureooms/js-itertools';

import {__code__} from '../../src';

test('__code__', t => {
	const s = 'afsihfoeiahwifslkjdlfsa1283743982942@&#(^*@#)[]';
	for (const offset of range(-15, 15)) {
		const code = __code__(offset);
		for (const [i, c] of enumerate(s)) {
			t.is(s.charCodeAt(i), code(s, i) + offset, `"${s}"[${i}] - ${offset}`);
		}
	}
});
