import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

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
	dataset?: SbDataset
	readonly tagName: "HEADER"
}

export type SbHeaderRole = Extract<
	SbAriaRole,
	"banner" | "group" | "none" | "presentation"
>
