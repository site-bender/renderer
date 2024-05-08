import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbMeterElement {
	attributes?: Override<
		Partial<HTMLMeterElement>,
		SbGlobalAttributeOverrides & {
			form?: string
		}
	>
	children?: Array<SbMeterContent>
	dataset?: SbDataset
	readonly tagName: "METER"
}

export type SbMeterContent = Exclude<SbPhrasingContent, { tagName: "METER" }>
