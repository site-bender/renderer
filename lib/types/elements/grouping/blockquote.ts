import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbBlockquoteElement {
	attributes?: Override<
		Partial<HTMLQuoteElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "BLOCKQUOTE"
}
