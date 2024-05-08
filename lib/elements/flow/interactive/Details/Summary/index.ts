import isString from "../../../../../guards/isString"
import TextNode from "../../../../TextNode"
import generateShortId from "@sitebender/fp/lib/utilities/generateShortId"
import pickGlobalAttributes from "../../../../../guards/pickGlobalAttributes"
import { SbSummaryElement } from "../../../../../types/elements/interactive/summary"

export type SummaryF = (
	config: string | Omit<SbSummaryElement, "tagName">,
) => SbSummaryElement

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
	} = config as SbSummaryElement

	const attributes = pickGlobalAttributes(attrs)

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
