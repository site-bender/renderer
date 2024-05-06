import type { SummaryElement } from "../../../../../types/old-elements"
import type { GlobalAttributes } from "../../../../../types/shared"

import isString from "../../../../../guards/isString"
import TextNode from "../../../../TextNode"
import generateShortId from "@sitebender/fp/lib/utilities/generateShortId"
import pickGlobalAttributes from "../../../../../guards/pickGlobalAttributes"

export type SummaryF = (
	config: string | Omit<SummaryElement, "tagName">,
) => SummaryElement

const Summary: SummaryF = config => {
	if (isString(config)) {
		return {
			attributes: {
				id: generateShortId(),
			},
			children: [TextNode(config as string)],
			tagName: "SUMMARY",
		}
	}

	const {
		attributes: attrs = {},
		tagName: _,
		...props
	} = config as SummaryElement

	const attributes = pickGlobalAttributes(attrs as GlobalAttributes)

	return {
		...props,
		attributes: {
			id: generateShortId(),
			...attributes,
		},
		tagName: "SUMMARY",
	}
}

export default Summary
