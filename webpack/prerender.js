
var React = require("react");
var Application = require("../Frontend/Entry.js");
var html = require("../Frontend/prerender.html");

module.exports = function(scriptUrl, styleUrl, commonsUrl) {
	var application = React.renderComponentToString(<Application />);
	return html.replace("STYLE_URL", styleUrl).replace("SCRIPT_URL", scriptUrl).replace("COMMONS_URL", commonsUrl).replace("CONTENT", application);
};
