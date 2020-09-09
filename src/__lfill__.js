export default function __lfill__(c, n, mul) {
	const f = mul(c, n);
	return (s) => (f + s).slice(-n);
}
