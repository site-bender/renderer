import type { SbFullElement, SbRenderOptions } from "../../types/shared"

import addAttributes from "./addAttributes"
import addCalculation from "./addCalculation"
import addDataAttributes from "./addDataAttributes"
import addValidation from "./addValidation"
import appendChildren from "./appendChildren"
import handleFragment from "./handleFragment"
import setLevel from "./setLevel"

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
			calculation,
			children = [],
			dataset = {},
			tagName,
			validation,
		} = component

		if (tagName === "FRAGMENT") {
			handleFragment(parent)(children)(options)

			return
		}

		const level = setLevel(tagName)(lvl)

		const elem = document.createElement(tagName === "HN" ? `H${lvl}` : tagName)

		addAttributes(elem)(attributes)
		calculation && addCalculation(elem)(calculation)
		addDataAttributes(elem)(dataset)
		addValidation(elem)(validation)
		appendChildren(elem)(children)({ ...options, level })

		parent.appendChild(elem)

		return
	}

export default buildDomTree
