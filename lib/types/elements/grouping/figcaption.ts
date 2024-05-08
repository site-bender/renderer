import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbFigcaptionElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: Extract<SbAriaRole, "group" | "none" | "presentation">
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "FIGCAPTION"
}
