import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbFormEnctype,
	SbFormMethod,
	SbFormPopoverTarget,
	SbFormTarget,
	SbFormType,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbButtonElement {
	attributes?: Override<
		Partial<HTMLButtonElement>,
		SbGlobalAttributeOverrides & {
			autofocus?: boolean
			form?: string
			formEnctype?: SbFormEnctype
			formMethod?: SbFormMethod
			formTarget?: SbFormTarget
			popoverTarget?: string
			popoverTargetAction?: SbFormPopoverTarget
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
			type?: SbFormType
		}
	>
	children?: Array<SbButtonContent>
	dataset?: SbDataset
	readonly tagName: "BUTTON"
}

export type SbButtonContent = Exclude<SbPhrasingContent, { tagName: "" }>
