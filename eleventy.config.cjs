const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc);

	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addWatchTarget("./_components/*.js");

	eleventyConfig.setServerOptions({
		domDiff: false
	})
};