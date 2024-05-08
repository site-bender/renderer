import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"
import type { SbSummaryElement } from "./summary"

export interface SbDetailsElement {
	attributes?: Override<Partial<HTMLDetailsElement>, SbGlobalAttributeOverrides>
	children?: [SbSummaryElement, ...Array<SbFlowContent>]
	dataset?: SbDataset
	readonly tagName: "DETAILS"
}
