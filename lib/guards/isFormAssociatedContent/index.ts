import { FORM_ASSOCIATED_ELEMENTS } from "../../constants"

type IsFormAssociatedContentF = (config: { tagName: string }) => () => boolean

const isFormAssociatedContent: IsFormAssociatedContentF =
	({ tagName }) =>
	() =>
		FORM_ASSOCIATED_ELEMENTS.includes(tagName)

export default isFormAssociatedContent
