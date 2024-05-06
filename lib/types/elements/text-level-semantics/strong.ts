import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbPhrasingContent } from "../categories/phrasing"

export interface SbStrongEmphasisElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<SbPhrasingContent>
	readonly tagName: "STRONG"
}
