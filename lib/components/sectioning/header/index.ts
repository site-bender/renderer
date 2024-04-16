export default function header(config = {}) {
	return {
		attributes: {
			...config.attributes,
		},
		dataset: {
			component: "HEADER",
			...config.dataset,
		},
		children: ["Header"],
		tagName: "HEADER",
	}
}
