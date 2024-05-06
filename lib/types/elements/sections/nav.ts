import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbNavigationElement {
	attributes?: Override<Partial<HTMLElement>, SbGlobalAttributeOverrides>
	children?: Array<SbFlowContent>
	readonly tagName: "NAV"
}
