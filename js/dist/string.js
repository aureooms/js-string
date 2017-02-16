'use strict';

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/code.js */

		var __code__ = function __code__(offset) {

			var code = function code(key, i) {
				return key.charCodeAt(i) - offset;
			};

			return code;
		};

		exports.__code__ = __code__;

		/* js/src/concat.js */

		var concat = function concat(strings) {

			return join(strings, '');
		};

		exports.concat = concat;

		/* js/src/fill.js */

		var __lfill__ = function __lfill__(c, n, mul) {

			var f = mul(c, n);

			return function (s) {
				return (f + s).slice(-n);
			};
		};

		var __rfill__ = function __rfill__(c, n, mul) {

			var f = mul(c, n);

			return function (s) {
				return (s + f).slice(0, n);
			};
		};

		exports.__lfill__ = __lfill__;
		exports.__rfill__ = __rfill__;

		/* js/src/join.js */

		var join = function join(strings, sep) {

			return strings.join(sep);
		};

		exports.join = join;

		/* js/src/lempelziv.js */

		/**
   * Simple lempelziv data compression algorithm implementation.
   */

		var __lempelziv__ = function __lempelziv__(Trie, end) {

			var lempelziv = {};

			lempelziv.encode = function (input, index, suffix) {
				var j = 0;
				var trie = new Trie(),
				    e = trie.empty(),
				    pt = e,
				    tmp;
				var i = 0,
				    len = input.length;

				trie.put('', 0);

				for (; i < len; ++i) {

					for (; i < len; ++i) {
						tmp = pt.get(input, i);
						if (tmp === undefined) break;else pt = tmp;
					}

					if (i === len) break;

					pt.set(input, i, ++j);

					index.push(pt.value());
					suffix.push(input[i]);

					pt = e;
				}

				index.push(pt.value());
				suffix.push(end);
			};

			lempelziv.decode = function (index, suffix) {
				var table = [[0, 0]],
				    output = '';
				var i = 0,
				    len = index.length,
				    j,
				    c,
				    k,
				    l,
				    w;

				for (; i < len; ++i) {
					j = index[i];
					c = suffix[i];
					k = table[j][0];
					l = table[j][1];
					w = output.length;

					output += output.slice(k, l);

					if (c !== end) {
						table.push([w, w + l - k + 1]);
						output += c;
					}
				}

				return output;
			};

			return lempelziv;
		};

		exports.__lempelziv__ = __lempelziv__;

		/* js/src/mul.js */

		var mul = function mul(s, n) {

			var copies = new Array(n);

			while (n--) copies[n] = s;

			return concat(copies);
		};

		exports.mul = mul;

		/* js/src/palindrome.js */

		var palindrome = function palindrome(s, i, j) {

			while (i < j) if (s[i++] !== s[--j]) return false;

			return true;
		};

		exports.palindrome = palindrome;

		/* js/src/split.js */

		var WHITESPACE = /[\s]+/;

		var split = function split(string) {
			var sep = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
			var maxsplit = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

			if (sep === '') throw new Error('empty separator');

			if (maxsplit === undefined) maxsplit = -1;

			if (sep === undefined) {

				var parts = [];

				var i = 0;

				while (maxsplit--) {

					var match = string.slice(i).match(WHITESPACE);

					if (match === null) break;

					var j = i + match.index;

					if (j > 0) parts.push(string.slice(i, j));

					i = j + match[0].length;
				}

				if (i < string.length) parts.push(string.slice(i));

				return parts;
			} else {

				var parts = [];

				var i = 0;

				var n = sep.length;

				while (maxsplit--) {

					var j = string.indexOf(sep, i);

					if (j === -1) break;

					parts.push(string.slice(i, j));

					i = j + n;
				}

				parts.push(string.slice(i));

				return parts;
			}
		};

		exports.split = split;

		/* js/src/trie.js */

		/**
   * Simple implementation of a trie.
   * Can only add elements to the structure.
   * The code function must map each symbol to its own natural number.
   *
   * @param {natural} degree cardinality of symbol set
   * @param {natural} code code function
   */

		var __simpletrie__ = function __simpletrie__(degree, code) {

			var Node = function Node(val) {
				this.ad = new Array(degree);
				this.val = val;
			};

			Node.prototype.get = function (key, i) {
				return this.ad[code(key, i)];
			};

			Node.prototype.set = function (key, i, val) {
				return this.ad[code(key, i)] = new Node(val);
			};

			Node.prototype.value = function () {
				return this.val;
			};

			var Trie = function Trie() {
				this.pt = new Node();
			};

			Trie.prototype.empty = function () {
				return this.pt;
			};

			Trie.prototype.put = function (key, val) {

				var i = 0,
				    len = key.length,
				    pt = this.pt,
				    k;

				for (; i < len; ++i) {
					k = code(key, i);
					pt = pt.ad[k] === undefined ? pt.ad[k] = new Node() : pt.ad[k];
				}

				pt.val = val;

				return pt;
			};

			Trie.prototype.get = function (key) {

				var i = 0,
				    len = key.length,
				    pt = this.pt,
				    k;

				for (; i < len; ++i) pt = pt.get(key, i);

				return pt;
			};

			return Trie;
		};

		exports.__simpletrie__ = __simpletrie__;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("@aureooms/js-string", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["string"] = {});
	} else console.error("unable to detect type of module to define for @aureooms/js-string");
})();