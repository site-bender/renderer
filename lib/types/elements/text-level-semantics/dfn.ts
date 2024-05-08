import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbDefinitionElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<Exclude<SbPhrasingContent, { tagName: "DFN" }>>
	dataset?: SbDataset
	readonly tagName: "DFN"
}
