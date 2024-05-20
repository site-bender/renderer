import type {
	Override,
	SbAriaRole,
	SbAutocapitalize,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../../shared"

export interface SbCheckboxInputElement {
	attributes?: Override<
		Omit<
			Partial<HTMLInputElement>,
			| "accept"
			| "align"
			| "alt"
			| "autocomplete"
			| "capture"
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
			| "max"
			| "maxLength"
			| "min"
			| "minLength"
			| "multiple"
			| "pattern"
			| "placeholder"
			| "readOnly"
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
			checked?: boolean
			form?: string
			role?: Extract<SbAriaRole, "menuitemcheckbox" | "option" | "switch">
			type: "checkbox"
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
