import type {
	Override,
	SbAutocapitalize,
	SbDataset,
	SbFormEnctype,
	SbFormMethod,
	SbFormTarget,
	SbGlobalAttributeOverrides,
} from "../../../shared"

export interface SbSubmitInputElement {
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
			| "height"
			| "indeterminate"
			| "max"
			| "maxLength"
			| "min"
			| "minLength"
			| "multiple"
			| "pattern"
			| "placeholder"
			| "readOnly"
			| "required"
			| "selectDirection"
			| "selectionEnd"
			| "selectionStart"
			| "size"
			| "src"
			| "step"
			| "useMap"
			| "valueAsDate"
			| "valueAsNumber"
			| "width"
		>,
		SbGlobalAttributeOverrides & {
			autocapitalize?: SbAutocapitalize
			form?: string
			formEnctype?: SbFormEnctype
			formMethod?: SbFormMethod
			formNoValidate?: boolean
			formTarget?: SbFormTarget
			type: "submit"
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
