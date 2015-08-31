module.exports = require("../webpack-config")({
	hot: true,
	devServer: true,
	hotComponents: true,
	devtool: "eval",
	debug: true,
});
