import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

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
	dataset?: SbDataset
	readonly tagName: "BODY"
}
