import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbDescriptionDetailsElement {
	attributes?: Override<Partial<HTMLElement>, SbGlobalAttributeOverrides>
	children?: Array<SbFlowContent>
	readonly tagName: "DD"
}
