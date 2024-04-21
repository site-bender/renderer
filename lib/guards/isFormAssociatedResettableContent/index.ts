import { FORM_ASSOCIATED_ELEMENTS_RESETTABLE } from "../../constants"

type IsFormAssociateResettabledContentF = (config: {
	tagName: string
}) => () => boolean

const isFormAssociateResettabledContent: IsFormAssociateResettabledContentF =
	({ tagName }) =>
	() =>
		FORM_ASSOCIATED_ELEMENTS_RESETTABLE.includes(tagName)

export default isFormAssociateResettabledContent
