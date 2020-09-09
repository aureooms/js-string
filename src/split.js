export const WHITESPACE = /\s+/;

export default function split(string, sep = undefined, maxsplit = undefined) {
	if (sep === '') {
		throw new Error('empty separator');
	}

	if (maxsplit === undefined) {
		maxsplit = -1;
	}

	if (sep === undefined) {
		const parts = [];

		let i = 0;

		while (maxsplit--) {
			const match = string.slice(i).match(WHITESPACE);

			if (match === null) {
				break;
			}

			const j = i + match.index;

			if (j > 0) {
				parts.push(string.slice(i, j));
			}

			i = j + match[0].length;
		}

		if (i < string.length) {
			parts.push(string.slice(i));
		}

		return parts;
	}

	const parts = [];

	let i = 0;

	const n = sep.length;

	while (maxsplit--) {
		const j = string.indexOf(sep, i);

		if (j === -1) {
			break;
		}

		parts.push(string.slice(i, j));

		i = j + n;
	}

	parts.push(string.slice(i));

	return parts;
}
