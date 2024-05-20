import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbScriptElement } from "../scripting/script"
import type { SbTemplateElement } from "../scripting/template"

import type { SbDescriptionDetailsElement } from "./dd"
import type { SbDivisionElement } from "./div"
import type { SbDescriptionTermElement } from "./dt"

export interface SbDescriptionListElement {
	attributes?: Override<
		Omit<Partial<HTMLDListElement>, "compact">,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<
		| SbDivisionElement
		| SbDescriptionDetailsElement
		| SbDescriptionTermElement
		| SbScriptElement
		| SbTemplateElement
	>
	dataset?: SbDataset
	readonly tagName: "DL"
}
