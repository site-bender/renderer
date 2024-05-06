import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbBodyElement {
	attributes?: Override<
		Omit<
			Partial<HTMLBodyElement>,
			// deprecated
			| "alink"
			| "background"
			| "bgcolor"
			| "bottommargin"
			| "leftmargin"
			| "link"
			| "rightmargin"
			| "text"
			| "topmargin"
			| "vlink"
		>,
		SbGlobalAttributeOverrides
	>
	children?: Array<SbFlowContent>
	readonly tagName: "BODY"
}
