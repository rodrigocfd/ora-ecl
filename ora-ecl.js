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
		const li = line.replace('siorg.', '{h-schema}');
		return i == 0
			? `String sql = "${li}"`
			: `+ " ${li}"`;
	}).join('\n') + ';';
}

function toOracle(src, dest) {
	dest.value = src.value.split('\n').map((line, i) => {
		return line.replace('String sql = "', '')
			.replace('{h-schema}', 'siorg.')
			.replace(/^\s+\+ \"/, '')
			.replace(/";?$/, '')
	}).join('\n');
}