import type { NumberField } from "../../../types/components"
import type { Elem } from "../../../types/elements"

import { u } from "@sitebender/fp"

export default function numberField(config: NumberField): Elem {
	const {
		defaultValue,
		children = [],
		id = u.generateShortId(),
		label,
		name,
		scripts,
		stylesheets,
		validation,
	} = config

	return {
		attributes: {
			class: "number-field",
			id,
		},
		children: [
			{
				attributes: {
					class: "label",
					for: `${id}-input`,
					id: `${id}-label`,
				},
				children: [label],
				tagName: "LABEL",
			},
			{
				attributes: {
					class: "number-input",
					id: `${id}-input`,
					name,
					type: "number",
					value: defaultValue,
				},
				...(validation ? { validation } : {}),
				tagName: "INPUT",
			},
			...children,
		],
		scripts,
		stylesheets,
		tagName: "DIV",
	}
}