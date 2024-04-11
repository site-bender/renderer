import { u } from "@sitebender/fp"

export default function emailField(config: EmailField): Elem {
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
			class: "email-field",
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
					class: "email-input",
					id: `${id}-input`,
					name,
					type: "email",
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
