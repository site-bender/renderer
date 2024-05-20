import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

import type { SbLegendElement } from "./legend"

export interface SbFieldSetElement {
	attributes?: Override<
		Partial<HTMLFieldSetElement>,
		SbGlobalAttributeOverrides & {
			form?: string
			role?: Extract<SbAriaRole, "radiogroup" | "presentation" | "none">
		}
	>
	children?: Array<SbFlowContent> | [SbLegendElement, Array<SbFlowContent>]
	dataset?: SbDataset
	readonly tagName: "FIELDSET"
}
