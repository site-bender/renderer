import { AriaRole } from "../../unions"
import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbAsideElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAsideRole
		}
	>
	children?: Array<SbFlowContent>
	readonly tagName: "ASIDE"
}

export type SbAsideRole = Extract<
	AriaRole,
	"feed" | "none" | "note" | "presentation" | "region" | "search"
>
