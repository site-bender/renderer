import type {
	Override,
	SbAutocapitalize,
	SbAutocomplete,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../../shared"

export interface SbMonthInputElement {
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
			| "dirName"
			| "files"
			| "formAction"
			| "formEnctype"
			| "formMethod"
			| "formNoValidate"
			| "formTarget"
			| "height"
			| "indeterminate"
			| "maxLength"
			| "minLength"
			| "multiple"
			| "pattern"
			| "placeholder"
			| "selectDirection"
			| "selectionEnd"
			| "selectionStart"
			| "size"
			| "src"
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
			type: "month"
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
