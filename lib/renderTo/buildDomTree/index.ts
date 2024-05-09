import type { SbFullElement, SbRenderOptions } from "../../types/shared"

import { SECTIONING_ELEMENTS } from "../../constants"
import type { SbElement } from "../../types/elements"
import type { SbTextNode } from "../../types/elements/text-node"

export type BuildDomTreeF = (
	parent: Node,
) => (component: SbFullElement) => (options?: SbRenderOptions) => void

const buildDomTree: BuildDomTreeF =
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
				buildDomTree(parent)(child as SbFullElement)({ level }),
			)

			return
		}

		const elem = document.createElement(tagName === "HN" ? `H${lvl}` : tagName)

		Object.entries(attributes).forEach(([attr, value]) =>
			typeof value === "boolean"
				? value && elem.setAttribute(attr, "")
				: elem.setAttribute(attr, `${value}`),
		)

		Object.entries(dataset).forEach(([attr, value]) =>
			typeof value === "boolean"
				? value && elem.setAttribute(`data-${attr}`, "")
				: elem.setAttribute(`data-${attr}`, `${value}`),
		)

		children.forEach((child: SbElement) => {
			if (child.tagName === "TEXTNODE") {
				elem.appendChild(document.createTextNode((child as SbTextNode).content))

				parent.appendChild(elem)

				return
			}

			buildDomTree(elem)(child as SbFullElement)({ level })

			return
		})

		parent.appendChild(elem)

		return
	}

export default buildDomTree
