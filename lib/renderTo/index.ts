import type { ElementAny, RenderOptions } from "../types/old-elements"
import type { TextNode } from "../types/shared"

import { SECTIONING_ELEMENTS } from "../constants"

// type ValidatableElement = (
// 	| HTMLInputElement
// 	| HTMLSelectElement
// 	| HTMLTextAreaElement
// ) & {
// 	validate: (value: string) => void
// }

export type RenderToF = (
	parent: Node,
) => (component: ElementAny | TextNode) => (options?: RenderOptions) => void

const renderTo: RenderToF =
	parent =>
	component =>
	(options = {} as RenderOptions) => {
		const { level: lvl = 0 } = options
		const {
			attributes = {},
			children = [],
			dataset = {},
			tagName,
			// validation,
		} = component as ElementAny

		const level =
			SECTIONING_ELEMENTS.includes(tagName) || tagName === "FRAGMENT"
				? lvl + 1
				: lvl

		if (tagName === "FRAGMENT") {
			children.forEach(child =>
				renderTo(parent)(child as ElementAny | TextNode)({ level }),
			)

			return
		}

		const elem = document.createElement(tagName === "HN" ? `H${lvl}` : tagName)

		Object.entries(attributes).forEach(([attr, value]) =>
			typeof value === "boolean"
				? value && elem.setAttribute(attr, "")
				: elem.setAttribute(attr, String(value)),
		)

		Object.entries(dataset).forEach(([attr, value]) =>
			elem.setAttribute(`data-${attr}`, `${value}`),
		)

		// TODO: Uncomment when Operations refactor complete
		// if (validation) {
		// 	const e = elem as ValidatableElement

		// 	e.validate = compose(validation)
		// }

		children.forEach(child => {
			if ((child as TextNode).tagName === "TEXTNODE") {
				elem.appendChild(document.createTextNode((child as TextNode).content))

				parent.appendChild(elem)

				return
			}

			renderTo(elem)(child as ElementAny)({ level })

			return
		})

		parent.appendChild(elem)

		return
	}

export default renderTo
