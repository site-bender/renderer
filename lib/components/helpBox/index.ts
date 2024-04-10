import { u } from "@sitebender/fp"

export default function helpBox(config: HelpBox) {
	const {
		forIds,
		form,
		id = u.generateShortId(),
		name,
		scripts,
		stylesheets,
		value,
	} = config

	return {
		attributes: {
			class: "help-box",
			for: forIds,
			form,
			id,
			name,
		},
		children: [value],
		scripts,
		stylesheets,
		tagName: "OUTPUT",
	}
}
