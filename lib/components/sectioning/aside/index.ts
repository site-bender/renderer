export default function aside(config = {}) {
	return {
		attributes: {
			...config.attributes,
		},
		dataset: {
			component: "ASIDE",
			...config.dataset,
		},
		children: ["Aside"],
		tagName: "ASIDE",
	}
}
