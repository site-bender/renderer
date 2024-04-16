import { u } from "@sitebender/fp"

export default function accordion(config) {
	const {
		children = [],
		id = u.generateShortId(),
		scripts,
		stylesheets,
		title,
	} = config

	return {
		attributes: {
			class: "accordionGroup",
			id,
		},
		children: [...(title ? title : []), ...children],
		scripts,
		stylesheets,
		tagName: title ? "SECTION" : "DIV",
	}
}
