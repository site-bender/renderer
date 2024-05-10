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
	const opts = { level: 0, ...options }

	// Collect and dedupe style elements
	const stylesheets = collectLinkElements(component as SbWithAssets)

	// Append style elements to the head
	stylesheets.forEach(stylesheet => buildDomTree(head)(stylesheet)())

	// Collect and dedupe script elements
	const scripts = collectScriptElements(component as SbWithAssets)

	// Append script elements to the head
	scripts.forEach(script => buildDomTree(head)(script as SbFullElement)())

	// Build the DOM tree and append to the parent element
	buildDomTree(parent)(component)(opts)
}

export default renderTo
