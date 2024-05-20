import type {
	Override,
	SbAriaRole,
	SbAutocapitalize,
	SbDataset,
	SbFormPopoverTarget,
	SbGlobalAttributeOverrides,
} from "../../../shared"

export interface SbButtonInputElement {
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
			popoverTarget?: SbFormPopoverTarget
			popoverTargetAction?: string
			role?: Extract<
				SbAriaRole,
				| "checkbox"
				| "combobox"
				| "link"
				| "menuitem"
				| "menuitemcheckbox"
				| "menuitemradio"
				| "option"
				| "radio"
				| "switch"
				| "tab"
			>
			type: "button"
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
