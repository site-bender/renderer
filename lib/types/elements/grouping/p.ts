import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbPhrasingContent } from "../categories/phrasing"

export interface SbParagraphElement {
	attributes?: Override<
		Partial<SbParagraphAttributes>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<SbPhrasingContent>
	readonly tagName: "P"
}

export type SbParagraphAttributes = Omit<HTMLParagraphElement, "align">
