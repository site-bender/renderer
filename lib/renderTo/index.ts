import type { SbFullElement, SbRenderOptions } from "./../types/shared"

import addConditionals from "./addConditionals"
import addScripts from "./addScripts"
import addStylesheets from "./addStylesheets"

import buildDomTree from "./buildDomTree"

export type RenderToF = (
	parent: Node,
) => (component: SbFullElement) => (options?: SbRenderOptions) => void

const renderTo: RenderToF = parent => component => options => {
	const opts = { level: 0, ...options }

	addStylesheets(component)
	addScripts(component)

	const temp = document.createElement("TEMPLATE")

	buildDomTree(temp)(component)(opts)
	addConditionals(temp)(component)

	for (let child of temp.children) {
		parent.appendChild(child)
	}

	temp.remove()
}

export default renderTo
