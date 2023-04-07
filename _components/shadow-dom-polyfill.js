export function attachShadowDom(node, tmpl, mode) {
	if(tmpl) {
		let shadowroot = node.attachShadow({ mode: mode || "closed" });
		shadowroot.appendChild(tmpl.content.cloneNode(true));
	}
}

// Declarative Shadow DOM polyfill
// Supports both streaming (shadowrootmode) and non-streaming (shadowroot)
export function polyfillDeclarativeShadowDom(node) {
	let shadowroot = node.shadowRoot;
	if(!shadowroot) {
		let tmpl = node.querySelector(":scope > template:is([shadowrootmode], [shadowroot])");
		if(tmpl) {
			// default mode is "closed"
			let mode = tmpl.getAttribute("shadowrootmode") || tmpl.getAttribute("shadowroot") || "closed";
			shadowroot = node.attachShadow({ mode });
			shadowroot.appendChild(tmpl.content.cloneNode(true));
		}
	}
}