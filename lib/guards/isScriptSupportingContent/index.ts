import { SCRIPT_SUPPORTING_ELEMENTS } from "../../constants"

type IsScriptSupportingContentF = (config: { tagName: string }) => () => boolean

const isScriptSupportingContent: IsScriptSupportingContentF =
	({ tagName }) =>
	() =>
		SCRIPT_SUPPORTING_ELEMENTS.includes(tagName)

export default isScriptSupportingContent
