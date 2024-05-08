import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbPreformattedTextElement {
	attributes?: Override<
		Omit<Partial<HTMLPreElement>, "width">,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "PRE"
}
