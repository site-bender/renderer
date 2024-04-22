import type { ElementAny, RenderOptions } from "../types/elements"
import { SECTIONING_ELEMENTS } from "../constants"
import { TextNode } from "../types/shared"

type ValidatableElement = (
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
) & {
	validate: (value: string) => void
}

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
			validation,
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

		children.forEach(child => {
			if ((child as TextNode).tagName === "TEXTNODE") {
				elem.appendChild(
					document.createTextNode((child as TextNode).children[0] || ""),
				)

				parent.appendChild(elem)

				return
			}

			renderTo(elem)(child as ElementAny)({ level })

			parent.appendChild(elem)

			return
		})

		return
	}

export default renderTo
