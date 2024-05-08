import type {
	SbDataset,
	SbGlobalAttributes,
	SbRenderOptions,
} from "../types/shared"

import { SECTIONING_ELEMENTS } from "../constants"
import type { SbElement } from "../types/elements"
import { SbTextNode } from "../types/elements/text-node"

// type ValidatableElement = (
// 	| HTMLInputElement
// 	| HTMLSelectElement
// 	| HTMLTextAreaElement
// ) & {
// 	validate: (value: string) => void
// }

type FullElement = SbElement & {
	attributes?: SbGlobalAttributes
	children?: Array<SbElement>
	dataset?: SbDataset
}

export type RenderToF = (
	parent: Node,
) => (component: FullElement) => (options?: SbRenderOptions) => void

const renderTo: RenderToF =
	parent =>
	component =>
	(options = {} as SbRenderOptions) => {
		const { level: lvl = 0 } = options
		const {
			attributes = {},
			children = [],
			dataset = {},
			tagName,
			// validation,
		} = component

		const level =
			SECTIONING_ELEMENTS.includes(tagName) || tagName === "FRAGMENT"
				? lvl + 1
				: lvl

		if (tagName === "FRAGMENT") {
			children.forEach(child =>
				renderTo(parent)(child as FullElement)({ level }),
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

		children.forEach((child: SbElement) => {
			if (child.tagName === "TEXTNODE") {
				elem.appendChild(document.createTextNode((child as SbTextNode).content))

				parent.appendChild(elem)

				return
			}

			renderTo(elem)(child as FullElement)({ level })

			return
		})

		parent.appendChild(elem)

		return
	}

export default renderTo
