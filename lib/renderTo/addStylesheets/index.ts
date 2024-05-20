import type { SbFullElement } from "../../types/shared"
import collectLinkElements from "../../utilities/collectLinkElements"
import buildDomTree from "../buildDomTree"

export type AddStylesheetsF = (component: SbFullElement) => void

const addStylesheets: AddStylesheetsF = component => {
	const head = document && document.head

	if (head) {
		const stylesheets = collectLinkElements(component as SbFullElement)

		stylesheets.forEach(stylesheet => buildDomTree(head)(stylesheet)())
	}
}

export default addStylesheets
