import type {
	Override,
	SbAutocapitalize,
	SbDataset,
	SbFormEnctype,
	SbFormMethod,
	SbFormTarget,
	SbGlobalAttributeOverrides,
} from "../../../shared"
import type { SbAriaRole } from "../../../shared"

export interface SbImageInputElement {
	attributes?: Override<
		Omit<
			Partial<HTMLInputElement>,
			| "accept"
			| "align"
			| "autocomplete"
			| "capture"
			| "checked"
			| "defaultChecked"
			| "defaultValue"
			| "dirName"
			| "files"
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
			| "step"
			| "useMap"
			| "valueAsDate"
			| "valueAsNumber"
		>,
		SbGlobalAttributeOverrides & {
			autocapitalize?: SbAutocapitalize
			form?: string
			formEnctype?: SbFormEnctype
			formMethod?: SbFormMethod
			formNoValidate?: boolean
			formTarget?: SbFormTarget
			role?: Extract<
				SbAriaRole,
				| "link"
				| "menuitem"
				| "menuitemcheckbox"
				| "menuitemradio"
				| "radio"
				| "switch"
			>
			type: "image"
			value?: never
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "INPUT"
}
