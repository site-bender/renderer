import type {
	HeadingAttributes,
	HeadingElement,
} from "../../../../types/old-elements"
import type { GlobalAttributes } from "../../../../types/shared"

import pickGlobalAttributes from "../../../../guards/pickGlobalAttributes"
import TextNode from "../../../TextNode"
import isMemberOf from "../../../../guards/isMemberOf"
import isString from "../../../../guards/isString"
import generateShortId from "@sitebender/fp/lib/utilities/generateShortId"

export const filterAttributes = (
	attributes: GlobalAttributes & HeadingAttributes,
): GlobalAttributes & HeadingAttributes => {
	const globals = pickGlobalAttributes(attributes as GlobalAttributes)
	const { role } = attributes

	return {
		...{
			id: generateShortId(),
			...globals,
		},
		...(isMemberOf(["heading", "tab", "presentation", "none"])(role as string)
			? { role }
			: {}),
	}
}

export type HnF = (
	config: string | Omit<HeadingElement, "tagName">,
) => HeadingElement

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

	const { attributes: attrs = {}, dataset, children } = config as HeadingElement

	const attributes = filterAttributes(attrs)

	return {
		attributes,
		dataset,
		children,
		tagName: "HN",
	}
}

export default Hn
