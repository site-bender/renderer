import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbPhrasingContent } from "../categories/phrasing"

export interface SbAbbreviationElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
			title: string
		}
	>
	children?: Array<SbPhrasingContent>
	readonly tagName: "ABBR"
}
