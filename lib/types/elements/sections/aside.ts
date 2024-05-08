import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbAsideElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAsideRole
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "ASIDE"
}

export type SbAsideRole = Extract<
	SbAriaRole,
	"feed" | "none" | "note" | "presentation" | "region" | "search"
>
