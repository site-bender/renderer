import type { ElementAny, RenderOptions } from "../types/elements"
import { SECTIONING_ELEMENTS } from "../constants"

type ValidatableElement = (
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
) & {
	validate: (value: string) => void
}

export type RenderF = (
	component: ElementAny,
) => (options?: RenderOptions) => HTMLElement | ValidatableElement

const render: RenderF =
	component =>
	(options = {} as RenderOptions) => {
		const { level = 0 } = options
		const {
			attributes = {},
			children = [],
			dataset = {},
			tagName,
			validation,
		} = component

		const elem = document.createElement(
			tagName === "HN" ? `H${level}` : tagName,
		)

		Object.entries(attributes).forEach(([attr, value]) =>
			elem.setAttribute(attr, value),
		)

		Object.entries(dataset).forEach(([attr, value]) =>
			elem.setAttribute(`data-${attr}`, `${value}`),
		)

		if (validation) {
			;(elem as ValidatableElement).validate = function () {
				console.log("validate", this.value)
			}
		}

		children.forEach(child =>
			typeof child === "string"
				? elem.appendChild(document.createTextNode(child))
				: elem.appendChild(
						render(child as ElementAny)({
							level: SECTIONING_ELEMENTS.includes(tagName) ? level + 1 : level,
						}),
					),
		)

		return elem
	}

export default render
