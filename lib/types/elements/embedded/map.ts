import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbMapElement {
	attributes?: Override<Partial<HTMLMapElement>, SbGlobalAttributeOverrides>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "MAP"
}
