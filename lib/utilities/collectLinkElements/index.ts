import { SbLinkElement } from "../../types/elements/metadata/link"
import { SbFullElement } from "../../types/shared"
import deduplicate from "../deduplicate"

export type CollectLinkElementsF = (
	config: SbFullElement | Array<SbFullElement>,
) => Array<SbLinkElement>

const collectLinkElements: CollectLinkElementsF = config => {
	const elements = Array.isArray(config) ? config : [config]

	return deduplicate<SbLinkElement>(
		elements.reduce((out, element) => {
			const children = element.children || []
			const links = collectLinkElements(children)
			const stylesheets = element["stylesheets"] || []

			return out.concat(stylesheets).concat(links)
		}, [] as Array<SbLinkElement>),
	)
}

export default collectLinkElements
