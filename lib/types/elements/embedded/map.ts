import type { SbFlowContent } from "../categories/flow"
import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbMapElement {
	attributes?: Override<Partial<HTMLMapElement>, SbGlobalAttributeOverrides>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "MAP"
}
