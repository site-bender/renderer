import { SbScriptElement } from "../../types/elements/scripting/script"
import { SbFullElement } from "../../types/shared"
import deduplicate from "../deduplicate"

export type CollectScriptElementsF = (
	config: SbFullElement | Array<SbFullElement>,
) => Array<SbScriptElement>

const collectScriptElements: CollectScriptElementsF = config => {
	const elements = Array.isArray(config) ? config : [config]

	return deduplicate<SbScriptElement>(
		elements.reduce((out, element) => {
			const children = element.children || []
			const links = collectScriptElements(children)
			const scripts = element["scripts"] || []

			return out.concat(scripts).concat(links)
		}, [] as Array<SbScriptElement>),
	)
}

export default collectScriptElements
