import { SbTextNode } from "../../types/elements/text-node"

export type TextNodeF = (content: string) => SbTextNode

const TextNode: TextNodeF = content => ({
	content,
	tagName: "TEXTNODE",
})

export default TextNode
