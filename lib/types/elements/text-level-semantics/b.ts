import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbPhrasingContent } from "../categories/phrasing"

export interface SbBringAttentionElement {
	attributes?: Override<Partial<HTMLElement>, SbGlobalAttributeOverrides>
	children?: Array<SbPhrasingContent>
	readonly tagName: "B"
}
