import { SECTIONING_ELEMENTS } from "../../constants"

type IsSectioningContentF = (config: { tagName: string }) => () => boolean

const isSectioningContent: IsSectioningContentF =
	({ tagName }) =>
	() =>
		SECTIONING_ELEMENTS.includes(tagName)

export default isSectioningContent
