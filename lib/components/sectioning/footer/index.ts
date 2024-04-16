export default function footer(config = {}) {
	return {
		attributes: {
			...config.attributes,
		},
		dataset: {
			component: "FOOTER",
			...config.dataset,
		},
		children: ["Footer"],
		tagName: "FOOTER",
	}
}
