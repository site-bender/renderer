import { HEADING_ELEMENTS } from "../../constants"

type IsHeadingContentF = (config: { tagName: string }) => () => boolean

const isHeadingContent: IsHeadingContentF =
	({ tagName }) =>
	() =>
		HEADING_ELEMENTS.includes(tagName)

export default isHeadingContent
