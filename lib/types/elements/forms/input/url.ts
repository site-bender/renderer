import type {
	Override,
	SbAutocomplete,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../../shared"

export interface SbUrlInputElement {
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
			autocomplete?: SbAutocomplete
			form?: string
			list?: string
			type: "url"
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
