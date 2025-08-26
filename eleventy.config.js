import pluginWebc from "@11ty/eleventy-plugin-webc";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc);

	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addWatchTarget("./_components/*.js");

	eleventyConfig.setServerOptions({
		domDiff: false
	})
};
