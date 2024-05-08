import type {
	Override,
	SbAutocapitalize,
	SbAutocomplete,
	SbDataset,
	SbGlobalAttributeOverrides,
	SbSpellcheck,
} from "../../shared"
import type { SbTextNode } from "../text-node"

export interface SbTextAreaElement {
	attributes?: Override<
		Partial<HTMLTextAreaElement>,
		SbGlobalAttributeOverrides & {
			autocapitalize?: SbAutocapitalize
			autocomplete?: SbAutocomplete
			autofocus?: boolean
			form?: string
			spellcheck?: SbSpellcheck
			wrap?: "hard" | "soft"
		}
	>
	children?: Array<SbTextNode>
	dataset?: SbDataset
	readonly tagName: "TEXTAREA"
}
