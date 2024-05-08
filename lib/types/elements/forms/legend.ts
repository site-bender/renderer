import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbHeadingContent } from "../categories/heading"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbLegendElement {
	attributes?: Override<
		Omit<Partial<HTMLLegendElement>, "align">,
		SbGlobalAttributeOverrides
	>
	children?: Array<SbPhrasingContent | SbHeadingContent>
	dataset?: SbDataset
	readonly tagName: "LEGEND"
}
