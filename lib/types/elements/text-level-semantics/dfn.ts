import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbPhrasingContent } from "../categories/phrasing"

export interface SbDefinitionElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<Exclude<SbPhrasingContent, { tagName: "DFN" }>>
	readonly tagName: "DFN"
}
