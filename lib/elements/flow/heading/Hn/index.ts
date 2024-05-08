import type { SbHeadingElement } from "../../../../types/elements/sections/hn"

import pickGlobalAttributes from "../../../../guards/pickGlobalAttributes"
import TextNode from "../../../TextNode"
import isMemberOf from "../../../../guards/isMemberOf"
import isString from "../../../../guards/isString"
import generateShortId from "@sitebender/fp/lib/utilities/generateShortId"

export const filterAttributes = (
	attributes: SbHeadingElement["attributes"],
): SbHeadingElement["attributes"] => {
	const globals = pickGlobalAttributes(
		attributes as SbHeadingElement["attributes"],
	)
	const { role } = attributes || {}

	return {
		id: generateShortId(),
		...globals,
		...(isMemberOf(["heading", "tab", "presentation", "none"])(role as string)
			? { role }
			: {}),
	}
}

export type HnF = (
	config: string | Omit<SbHeadingElement, "tagName">,
) => SbHeadingElement

const Hn: HnF = config => {
	if (isString(config as string)) {
		return {
			attributes: {
				id: generateShortId(),
			},
			children: [TextNode(config as string)],
			tagName: "HN",
		}
	}

	const {
		attributes: attrs = {},
		dataset,
		children,
	} = config as SbHeadingElement

	const attributes = filterAttributes(attrs)

	return {
		attributes,
		dataset,
		children,
		tagName: "HN",
	}
}

export default Hn
