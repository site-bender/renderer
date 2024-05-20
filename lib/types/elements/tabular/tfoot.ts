import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

import type { SbTableRowElement } from "./tr"

export interface SbTableFooterElement {
	attributes?: Override<
		Omit<Partial<HTMLTableSectionElement>, "align" | "ch" | "chOff" | "vAlign">,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbTableRowElement>
	dataset?: SbDataset
	readonly tagName: "TFOOT"
}
