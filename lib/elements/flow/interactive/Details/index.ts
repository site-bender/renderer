import type { Override } from "../../../../types/shared"
import type {
	DetailsAttributes,
	DetailsChildren,
	DetailsElement,
	SummaryElement,
} from "../../../../types/old-elements"
import pickGlobalAttributes from "../../../../guards/pickGlobalAttributes"
import isBoolean from "../../../../guards/isBoolean"
import isString from "../../../../guards/isString"
import Summary from "./Summary"
import { generateShortId } from "@sitebender/fp/lib/utilities"

export const filterAttributes = (
	attributes: DetailsAttributes,
): DetailsAttributes => {
	const { name, open, ...attrs } = attributes
	const globals = pickGlobalAttributes(attrs)

	return {
		...globals,
		...(name != null && isString(name) ? { name } : {}),
		...(open != null && isBoolean(open) ? { open } : {}),
	}
}

export type DetailsF = (
	config: Override<
		DetailsElement,
		{
			children: Array<Exclude<DetailsChildren, SummaryElement>>
			id?: string
			isOpen?: boolean
			summary: string | SummaryElement
		}
	>,
) => DetailsElement

const Details: DetailsF = config => {
	const {
		attributes: attrs = {},
		isOpen,
		children = [],
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
		children: [summary, ...children],
		tagName: "DETAILS",
	}
}

export default Details
