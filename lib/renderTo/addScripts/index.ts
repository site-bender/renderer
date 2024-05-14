import type { SbFullElement } from "../../types/shared"

import collectScriptElements from "../../utilities/collectScriptElements"
import buildDomTree from "../buildDomTree"

export type AddScriptsF = (component: SbFullElement) => void

const addScripts: AddScriptsF = component => {
	const head = document && document.head

	if (head) {
		const scripts = collectScriptElements(component)

		scripts.forEach(script => buildDomTree(head)(script as SbFullElement)())
	}
}

export default addScripts
