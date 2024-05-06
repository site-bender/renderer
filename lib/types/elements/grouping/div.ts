import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"
import { SbScriptElement } from "../scripting/script"
import { SbTemplateElement } from "../scripting/template"
import { SbDescriptionDetailsElement } from "./dd"
import { SbDescriptionTermElement } from "./dt"

export interface SbDivisionElement {
	attributes?: Override<
		Omit<Partial<HTMLDivElement>, "align">,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<
		| SbFlowContent
		| SbDescriptionDetailsElement
		| SbDescriptionTermElement
		| SbScriptElement
		| SbTemplateElement
	>
	readonly tagName: "DIV"
}
