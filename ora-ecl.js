document.addEventListener('DOMContentLoaded', () => {
	const txtOracle = document.getElementById('txtOracle');
	const txtEclipse = document.getElementById('txtEclipse');
	document.getElementById('toEclipse')
		.addEventListener('click', () => toEclipse(txtOracle, txtEclipse));
	document.getElementById('toOracle')
		.addEventListener('click', () => toOracle(txtEclipse, txtOracle));
	txtOracle.focus();
});

function toEclipse(src, dest) {
	dest.value = src.value.split('\n').map((line, i) => {
		return i == 0
			? `String sql = \"${line}\"`
			: `+ \" ${line}\"`;
	}).join('\n') + ';';
}

function toOracle(src, dest) {
	const txt = src.value;
	console.log(txt)
}