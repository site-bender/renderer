import { FORM_ASSOCIATED_ELEMENTS_LABELABLE } from "../../constants"

type IsFormAssociatedLabelableContentF = (config: {
	tagName: string
}) => () => boolean

const isFormAssociatedLabelableContent: IsFormAssociatedLabelableContentF =
	({ tagName }) =>
	() =>
		FORM_ASSOCIATED_ELEMENTS_LABELABLE.includes(tagName)

export default isFormAssociatedLabelableContent
