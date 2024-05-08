import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbDescriptionDetailsElement {
	attributes?: Override<Partial<HTMLElement>, SbGlobalAttributeOverrides>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "DD"
}
