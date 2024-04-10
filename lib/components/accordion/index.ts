import { u } from "@sitebender/fp"

export default function accordion(config: Accordion) {
	const {
		children = [],
		id = u.generateShortId(),
		open,
		scripts,
		stylesheets,
		summary,
	} = config

	return {
		attributes: {
			class: "accordion",
			id,
			...(open ? { open } : {}),
		},
		children: [
			{
				attributes: {
					class: "summary",
					id: `${id}-summary`,
				},
				children: summary,
				tagName: "SUMMARY",
			},
			{
				attributes: {
					class: "content",
					id: `${id}-content`,
				},
				children: children as Array<Elem>,
				tagName: "DIV",
			},
		],
		scripts,
		stylesheets,
		tagName: "DETAILS",
	}
}
