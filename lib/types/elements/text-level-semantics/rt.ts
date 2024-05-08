import type {
	SbAriaRole,
	SbDataset,
	Override,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbRubyTextElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "RT"
}
