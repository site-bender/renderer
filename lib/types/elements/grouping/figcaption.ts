import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"

export interface SbFigcaptionElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: Extract<AriaRole, "group" | "none" | "presentation">
		}
	>
	children?: Array<SbFlowContent>
	readonly tagName: "FIGCAPTION"
}
