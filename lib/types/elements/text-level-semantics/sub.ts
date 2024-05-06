import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbPhrasingContent } from "../categories/phrasing"

export interface SbSubscriptElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<SbPhrasingContent>
	readonly tagName: "SUB"
}
