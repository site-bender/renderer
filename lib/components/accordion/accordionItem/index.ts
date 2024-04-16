import { u } from "@sitebender/fp"

export default function accordion(config) {
	const {
		children = [],
		id = u.generateShortId(),
		open,
		scripts,
		stylesheets,
		title,
	} = config

	const summary = Array.isArray(title) ? title : [title]

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
				children,
				tagName: "DIV",
			},
		],
		scripts,
		stylesheets,
		tagName: "DETAILS",
	}
}
