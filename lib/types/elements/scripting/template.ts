import type { SbElement } from ".."
import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbTemplateElement {
	attributes?: Override<
		Partial<HTMLTemplateElement>,
		SbGlobalAttributeOverrides & {
			shadowRootMode?: "closed" | "open"
		}
	>
	children?: Array<SbElement>
	dataset?: SbDataset
	readonly tagName: "TEMPLATE"
}
