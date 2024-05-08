import type {
	Override,
	SbAutocapitalize,
	SbAutocomplete,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../../shared"

export interface SbSearchInputElement {
	attributes?: Override<
		Omit<
			Partial<HTMLInputElement>,
			| "accept"
			| "align"
			| "alt"
			| "autocomplete"
			| "capture"
			| "checked"
			| "defaultChecked"
			| "defaultValue"
			| "files"
			| "formAction"
			| "formEnctype"
			| "formMethod"
			| "formNoValidate"
			| "formTarget"
			| "height"
			| "indeterminate"
			| "max"
			| "min"
			| "multiple"
			| "selectDirection"
			| "selectionEnd"
			| "selectionStart"
			| "src"
			| "step"
			| "useMap"
			| "valueAsDate"
			| "valueAsNumber"
			| "width"
		>,
		SbGlobalAttributeOverrides & {
			autocapitalize?: SbAutocapitalize
			autocomplete?: SbAutocomplete
			form?: string
			list?: string
			type: "search"
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
