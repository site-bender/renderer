import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbHorizontalRuleElement } from "../grouping/hr"

import type { SbOptionGroupElement } from "./optgroup"
import type { SbOptionElement } from "./option"

export interface SbSelectElementMultiple {
	attributes?: Override<
		Partial<HTMLSelectElement>,
		SbGlobalAttributeOverrides & {
			autocomplete?: string // TODO: narrow this
			autofocus?: boolean
			form?: string
			multiple: true
		}
	>
	children?: Array<
		SbOptionElement | SbOptionGroupElement | SbHorizontalRuleElement
	>
	dataset?: SbDataset
	readonly tagName: "SELECT"
}

export interface SbSelectElementSingle {
	attributes?: Override<
		Partial<HTMLSelectElement>,
		SbGlobalAttributeOverrides & {
			autocomplete?: string // TODO: narrow this
			autofocus?: boolean
			form?: string
			multiple?: never
			role?: Extract<SbAriaRole, "menu">
			size?: 1
		}
	>
	children?: Array<
		SbOptionElement | SbOptionGroupElement | SbHorizontalRuleElement
	>
	dataset?: SbDataset
	readonly tagName: "SELECT"
}

export type SbSelectElement = SbSelectElementMultiple | SbSelectElementSingle
