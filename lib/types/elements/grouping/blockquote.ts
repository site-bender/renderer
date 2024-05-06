import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"

export interface SbBlockquoteElement {
	attributes?: Override<
		Partial<HTMLQuoteElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<SbFlowContent>
	readonly tagName: "BLOCKQUOTE"
}
