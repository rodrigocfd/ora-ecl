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
	dest.value = src.value.split('\n')
		.map((line, i) => {
			const li = line.replace('siorg.', '{h-schema}')
				.replaceAll('\"', '\\\"');

			return (i == 0)
				? `String sql = "${li}"`
				: `+ " ${li}"`;
		})
		.join('\n') + ';';

	dest.select();
	dest.focus();
}

function toOracle(src, dest) {
	dest.value = src.value.split('\n')
		.map(line => {
			const commIdx = line.lastIndexOf('//');
			if (commIdx !== -1) {
				line = line.substring(0, commIdx);
			}

			return line.replace(/\s*String\s*sql\s*=\s*"/, '')
				.replace('{h-schema}', 'siorg.')
				.replaceAll('\\\"', '\"')
				.replace(/^\s+\+ \"/, '')
				.replace(/";?\s*$/, '');
		})
		.join('\n');

	dest.select();
	dest.focus();
}
