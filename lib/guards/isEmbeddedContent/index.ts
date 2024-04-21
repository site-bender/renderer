import { EMBEDDED_ELEMENTS } from "../../constants"

export type IsEmbeddedContentF = (config: { tagName: string }) => () => boolean

const isEmbeddedContent: IsEmbeddedContentF =
	({ tagName }) =>
	() =>
		EMBEDDED_ELEMENTS.includes(tagName)

export default isEmbeddedContent
