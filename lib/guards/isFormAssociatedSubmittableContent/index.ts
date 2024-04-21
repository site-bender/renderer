import { FORM_ASSOCIATED_ELEMENTS_SUBMITTABLE } from "../../constants"

type IsFormAssociatedSubmittableContentF = (config: {
	tagName: string
}) => () => boolean

const isFormAssociatedSubmittableContent: IsFormAssociatedSubmittableContentF =
	({ tagName }) =>
	() =>
		FORM_ASSOCIATED_ELEMENTS_SUBMITTABLE.includes(tagName)

export default isFormAssociatedSubmittableContent
