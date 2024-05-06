import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbMapElement {
	attributes?: Override<Partial<HTMLMapElement>, SbGlobalAttributeOverrides>
	children?: Array<SbFlowContent>
	readonly tagName: "MAP"
}
