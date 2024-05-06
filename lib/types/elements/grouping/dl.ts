import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbScriptElement } from "../scripting/script"
import { SbTemplateElement } from "../scripting/template"
import { SbDescriptionDetailsElement } from "./dd"
import { SbDivisionElement } from "./div"
import { SbDescriptionTermElement } from "./dt"

export interface SbDescriptionListElement {
	attributes?: Override<
		Omit<Partial<HTMLDListElement>, "compact">,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<
		| SbDivisionElement
		| SbDescriptionDetailsElement
		| SbDescriptionTermElement
		| SbScriptElement
		| SbTemplateElement
	>
	readonly tagName: "DL"
}
