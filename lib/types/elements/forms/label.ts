import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbLabelElement {
	attributes?: Override<
		Partial<HTMLLabelElement>,
		SbGlobalAttributeOverrides & {
			for?: string
			form?: string
		}
	>
	children?: Array<SbLabelContent>
	dataset?: SbDataset
	readonly tagName: "LABEL"
}

export type SbLabelContent = Exclude<SbPhrasingContent, { tagName: "LABEL" }>
