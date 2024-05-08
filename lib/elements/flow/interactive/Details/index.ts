import type { Override } from "../../../../types/shared"
import pickGlobalAttributes from "../../../../guards/pickGlobalAttributes"
import isBoolean from "../../../../guards/isBoolean"
import isString from "../../../../guards/isString"
import Summary from "./Summary"
import { generateShortId } from "@sitebender/fp/lib/utilities"
import { SbDetailsElement } from "../../../../types/elements/interactive/details"
import { SbSummaryElement } from "../../../../types/elements/interactive/summary"
import { SbFlowContent } from "../../../../types/elements/categories/flow"

export const filterAttributes = (
	attributes: SbDetailsElement["attributes"],
) => {
	const { name, open, ...attrs } = attributes || {}
	const globals = pickGlobalAttributes(attrs)

	return {
		...globals,
		...(name != null && isString(name) ? { name } : {}),
		...(open != null && isBoolean(open) ? { open } : {}),
	}
}

export type DetailsF = (
	config: Override<
		SbDetailsElement,
		{
			children: Array<
				Exclude<SbDetailsElement["children"], { tagName: "SUMMARY" }>
			>
			id?: string
			isOpen?: boolean
			summary: string | SbSummaryElement
		}
	>,
) => SbDetailsElement

const Details: DetailsF = config => {
	const {
		attributes: attrs = {},
		isOpen,
		children,
		summary: s,
		tagName: _,
		...props
	} = config
	const attributes = filterAttributes(attrs)

	const summary = isString(s) ? Summary(s) : s

	return {
		...props,
		attributes: {
			id: generateShortId(),
			...(isBoolean(isOpen) ? { open: isOpen } : {}),
			...attributes,
		},
		children: [summary, ...children] as unknown as [
			SbSummaryElement,
			...SbFlowContent[],
		],
		tagName: "DETAILS",
	}
}

export default Details
