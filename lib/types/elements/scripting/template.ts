import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

import type { SbElement } from ".."

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
