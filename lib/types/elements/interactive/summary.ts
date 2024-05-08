import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbHeadingContent } from "../categories/heading"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbSummaryElement {
	attributes?: Override<Partial<HTMLElement>, SbGlobalAttributeOverrides>
	children?: Array<SbPhrasingContent> | [SbHeadingContent]
	dataset?: SbDataset
	readonly tagName: "SUMMARY"
}
