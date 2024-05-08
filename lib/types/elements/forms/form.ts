import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbAutocapitalize,
	SbAutocomplete,
	SbFormEnctype,
	SbFormMethod,
	SbFormTarget,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbFormElement {
	attributes?: Override<
		Partial<HTMLFormElement>,
		SbGlobalAttributeOverrides & {
			autocapitalize?: SbAutocapitalize
			autocomplete?: SbAutocomplete
			enctype?: SbFormEnctype
			method?: SbFormMethod
			name?: string
			role?: Extract<SbAriaRole, "search" | "none" | "presentation">
			target?: SbFormTarget | "_unfencedTop"
		}
	>
	children?: Array<SbFormContent>
	dataset?: SbDataset
	readonly tagName: "FORM"
}

export type SbFormContent = Exclude<SbFlowContent, { tagName: "FORM" }>
