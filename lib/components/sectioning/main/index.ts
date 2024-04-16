export default function main(config = {}) {
	return {
		attributes: {
			...config.attributes,
		},
		dataset: {
			component: "MAIN",
			...config.dataset,
		},
		children: ["Main content"],
		tagName: "MAIN",
	}
}
