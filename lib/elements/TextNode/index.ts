import type { TextNode as TextNodeType } from "../../types/shared"

export type TextNodeF = (content: string) => TextNodeType

const TextNode: TextNodeF = content => ({
	content,
	tagName: "TEXTNODE",
})

export default TextNode
