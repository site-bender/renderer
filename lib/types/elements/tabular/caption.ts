import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbTableCaptionElement {
	attributes?: Override<
		Omit<Partial<HTMLTableCaptionElement>, "align">,
		SbGlobalAttributeOverrides
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "CAPTION"
}
