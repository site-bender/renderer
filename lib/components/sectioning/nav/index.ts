export default function nav(config = {}) {
	return {
		attributes: {
			...config.attributes,
		},
		dataset: {
			component: "NAV",
			...config.dataset,
		},
		children: ["Navigation"],
		tagName: "NAV",
	}
}
