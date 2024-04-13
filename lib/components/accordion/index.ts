import type { Accordion } from "../../types/components"
import type { Elem } from "../../types/elements"

import { u } from "@sitebender/fp"

export default function accordion(config: Accordion): Elem {
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
