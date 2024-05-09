import type {
	SbFullElement,
	SbRenderOptions,
	SbWithAssets,
} from "./../types/shared"

import collectScriptElements from "../utilities/collectScriptElements"
import collectLinkElements from "../utilities/collectLinkElements"

import buildDomTree from "./buildDomTree"

export type RenderToF = (
	parent: Node,
) => (component: SbFullElement) => (options?: SbRenderOptions) => void

const renderTo: RenderToF = parent => component => options => {
	const head = document && document.head

	const scripts = collectScriptElements(component as SbWithAssets)
	const stylesheets = collectLinkElements(component as SbWithAssets)

	stylesheets.forEach(stylesheet => buildDomTree(head)(stylesheet)())
	scripts.forEach(script => buildDomTree(head)(script as SbFullElement)())

	buildDomTree(parent)(component)(options)
}

export default renderTo
