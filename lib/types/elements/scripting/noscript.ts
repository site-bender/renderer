import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbNoScriptElement {
	attributes?: Override<Partial<HTMLElement>, SbGlobalAttributeOverrides>
	// TODO: narrow children
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "NOSCRIPT"
}
