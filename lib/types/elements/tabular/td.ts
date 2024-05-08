import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbTableDataCellElement {
	attributes?: Override<
		Omit<
			Partial<HTMLTableCellElement>,
			| "abbr"
			| "align"
			| "axis"
			| "bgColor"
			| "ch"
			| "chOff"
			| "height"
			| "scope"
			| "noWrap"
			| "vAlign"
			| "width"
		>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "TD"
}
