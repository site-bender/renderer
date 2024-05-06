import type {
	DetailsChildren,
	DetailsElement,
	SummaryElement,
} from "../../../../types/old-elements"

import { generateShortId } from "@sitebender/fp/lib/utilities"

import TextNode from "../../../../elements/TextNode"

export type AccordionItemF = (
	config: Omit<DetailsElement, "tagName"> & {
		content: string | Array<DetailsChildren>
		id?: string
		isOpen?: boolean
		label: string | SummaryElement
	},
) => DetailsElement

const AccordionItem: AccordionItemF = config => {
	const { attributes = {}, dataset, content, isOpen, label } = config
	const { open = isOpen, ...attrs } = attributes
	const id = attributes.id || config.id || generateShortId()

	const summary =
		typeof label === "object"
			? label
			: ({
					children: [TextNode(label as string)],
					tagName: "SUMMARY",
				} as SummaryElement)

	const children =
		typeof content === "string"
			? [
					{
						children: [
							{
								content,
								tagName: "TEXTNODE",
							},
						],
						tagName: "P",
					},
				]
			: (content as Array<DetailsChildren>)

	return {
		attributes: {
			...attrs,
			id,
			...(open ? { open } : {}),
		},
		...(dataset ? { dataset } : {}),
		children: [summary, ...(children as Array<DetailsChildren>)],
		tagName: "DETAILS",
	}
}

export default AccordionItem
