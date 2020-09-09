import test from 'ava';

import {enumerate, range} from '@aureooms/js-itertools';

import {code} from '../../src';

test('code', t => {
	const s = 'afsihfoeiahwifslkjdlfsa1283743982942@&#(^*@#)[]';

	for (const [i, c] of enumerate(s)) {
		t.is(s.charCodeAt(i), code(s, i), `"${s}"[${i}]`);
		t.is(c.charCodeAt(0), code(c), `'${c}'`);
		for (const offset of range(-15, 15)) {
			t.is(s.charCodeAt(i), code(s, i, offset) + offset, `"${s}"[${i}] - ${offset}`);
		}
	}
});
