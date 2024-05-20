import type { SbElement } from "../../../types/elements"
import type { SbTextNode } from "../../../types/elements/text-node"
import type { SbFullElement, SbRenderOptions } from "../../../types/shared"

import buildDomTree from ".."

export type AppendChildrenF = (
	elem: HTMLElement,
) => (children?: Array<SbElement>) => (options?: SbRenderOptions) => void

const appendChildren: AppendChildrenF =
	elem =>
	(children = []) =>
	options => {
		children.forEach((child: SbElement) => {
			if (child.tagName === "TEXTNODE") {
				elem.appendChild(document.createTextNode((child as SbTextNode).content))

				return
			}

			buildDomTree(elem)(child as SbFullElement)(options)

			return
		})
	}

export default appendChildren
