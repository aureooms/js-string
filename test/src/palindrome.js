import test from 'ava';

import {palindrome} from '../../src';

const macro = (t, s, expected) => {
	t.is(expected, palindrome(s, 0, s.length));
};

macro.title = (title, s, expected) =>
	title || expected ? `'${s}' is a palindrome` : `'${s}' is not a palindrome`;

test(macro, '', true);
test(macro, 'Ö', true);
test(macro, 'x', true);
test(macro, 'xx', true);
test(macro, 'xyx', true);
test(macro, 'sator arepo tenet opera rotas', true);

test(macro, 'ab', false);
test(macro, 'abc', false);
test(macro, 'abca', false);
test(macro, 'sator arepo tenët opera rotas', false);
test(macro, 'Sator Arepo Tenet Opera Rotas', false);
