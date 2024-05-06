import { AriaRole } from "../../unions"
import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbHeaderElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbHeaderRole
		}
	>
	children?: Array<
		Exclude<SbFlowContent, { tagName: "FOOTER" } | { tagName: "HEADER" }>
	>
	readonly tagName: "HEADER"
}

export type SbHeaderRole = Extract<
	AriaRole,
	"banner" | "group" | "none" | "presentation"
>
