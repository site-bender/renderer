import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbNoScriptElement {
	attributes?: Override<Partial<HTMLElement>, SbGlobalAttributeOverrides>
	// TODO: narrow children
	children?: Array<SbFlowContent>
	readonly tagName: "NOSCRIPT"
}
