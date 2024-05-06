import { SbElement } from ".."
import { SbGlobalAttributeOverrides, Override } from "../../shared"

export interface SbTemplateElement {
	attributes?: Override<
		Partial<HTMLTemplateElement>,
		SbGlobalAttributeOverrides & {
			shadowRootMode?: "closed" | "open"
		}
	>
	children?: Array<SbElement>
	readonly tagName: "TEMPLATE"
}
