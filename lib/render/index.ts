type Validatable = HTMLInputElement & {
	validate: () => void
}

export default function render(config: Elem) {
	const {
		attributes = {},
		children = [],
		dataset = {},
		tagName,
		validation,
	} = config

	const elem = document.createElement(tagName)

	Object.entries(attributes).forEach(([attr, value]) =>
		elem.setAttribute(attr, value as string),
	)

	Object.entries(dataset).forEach(([attr, value]) =>
		elem.setAttribute(`data-${attr}`, value as string),
	)

	if (validation) {
		;(elem as Validatable).validate = function () {
			console.log("validate", (this as Validatable).value)
		}
	}

	children.forEach((child: string | Elem) =>
		typeof child === "string"
			? elem.appendChild(document.createTextNode(child))
			: elem.appendChild(render(child as Elem)),
	)

	return elem
}
