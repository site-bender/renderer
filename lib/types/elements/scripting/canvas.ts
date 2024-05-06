import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"

export interface SbCanvasElement {
	attributes?: Override<
		Partial<HTMLCanvasElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	// TODO: narrow children
	children?: Array<SbFlowContent>
	readonly tagName: "CANVAS"
}
