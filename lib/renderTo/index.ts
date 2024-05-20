import type { SbFullElement, SbRenderOptions } from "./../types/shared"
import addConditionals from "./addConditionals"
import addScripts from "./addScripts"
import addStylesheets from "./addStylesheets"
import buildDomTree from "./buildDomTree"
import runCalculations from "./runCalculations"

export type RenderToF = (
	parent: Node,
) => (component: SbFullElement) => (options?: SbRenderOptions) => void

const renderTo: RenderToF = parent => component => options => {
	const opts = { level: 0, ...options }

	addStylesheets(component)

	const temp = document.createElement("TEMPLATE")

	buildDomTree(temp)(component)(opts)
	addConditionals(temp)(component)

	Array.from(temp.children).forEach(child => parent.appendChild(child))

	addScripts(component)

	temp.remove()
	runCalculations()
}

export default renderTo
