import { FORM_ASSOCIATED_ELEMENTS_LISTED } from "../../constants"

type IsFormAssociatedListedContentF = (config: {
	tagName: string
}) => () => boolean

const isFormAssociatedListedContent: IsFormAssociatedListedContentF =
	({ tagName }) =>
	() =>
		FORM_ASSOCIATED_ELEMENTS_LISTED.includes(tagName)

export default isFormAssociatedListedContent
