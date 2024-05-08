import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbAutocapitalize,
	SbAutocomplete,
	SbGlobalAttributeOverrides,
	SbSpellcheck,
} from "../../../shared"

export interface SbTextInputElement {
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
			spellcheck?: SbSpellcheck
			type: "text"
		} & (
				| {
						list?: never
						role?: Extract<SbAriaRole, "combobox" | "searchbox" | "spinbutton">
				  }
				| {
						list?: string
				  }
			)
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
