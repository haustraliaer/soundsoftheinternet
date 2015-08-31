module.exports = [
	require("../webpack-config")({
		longTermCaching: true,
		separateStylesheet: true,
    staging: true
	})
];
