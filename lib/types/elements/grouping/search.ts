import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbSearchElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: Extract<
				SbAriaRole,
				"form" | "group" | "none" | "presentation" | "region" | "search"
			>
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "SEARCH"
}
