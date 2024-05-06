import { AriaRole } from "../../unions"
import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbFooterElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbFooterRole
		}
	>
	children?: Array<
		Exclude<SbFlowContent, { tagName: "FOOTER" } | { tagName: "HEADER" }>
	>
	readonly tagName: "FOOTER"
}

export type SbFooterRole = Extract<
	AriaRole,
	"contentinfo" | "group" | "none" | "presentation"
>
