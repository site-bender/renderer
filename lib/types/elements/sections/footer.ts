import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

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
	dataset?: SbDataset
	readonly tagName: "FOOTER"
}

export type SbFooterRole = Extract<
	SbAriaRole,
	"contentinfo" | "group" | "none" | "presentation"
>
