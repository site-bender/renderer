import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbSlotElement {
	attributes?: Override<Partial<HTMLSlotElement>, SbGlobalAttributeOverrides>
	children?: Array<SbFlowContent> // TODO: transparent content
	dataset?: SbDataset
	readonly tagName: "SLOT"
}
