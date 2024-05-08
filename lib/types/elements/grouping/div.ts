import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbDescriptionDetailsElement } from "./dd"
import type { SbDescriptionTermElement } from "./dt"
import type { SbFlowContent } from "../categories/flow"
import type { SbScriptElement } from "../scripting/script"
import type { SbTemplateElement } from "../scripting/template"

export interface SbDivisionElement {
	attributes?: Override<
		Omit<Partial<HTMLDivElement>, "align">,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<
		| SbFlowContent
		| SbDescriptionDetailsElement
		| SbDescriptionTermElement
		| SbScriptElement
		| SbTemplateElement
	>
	dataset?: SbDataset
	readonly tagName: "DIV"
}
