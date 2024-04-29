import type {
	HeadingChildren,
	HeadingElement,
} from "../../../../types/elements"

export type HnF = (config: {
	content: string | Array<HeadingChildren>
}) => HeadingElement

const Hn: HnF = ({ content }) => ({
	children:
		typeof content === "string"
			? [
					{
						content,
						tagName: "TEXTNODE",
					},
				]
			: content,
	tagName: "HN",
})

export default Hn
