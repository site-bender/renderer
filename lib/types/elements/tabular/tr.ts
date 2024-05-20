import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbScriptElement } from "../scripting/script"
import type { SbTemplateElement } from "../scripting/template"
import type { SbTableDataCellElement } from "./td"
import type { SbTableHeaderCellElement } from "./th"

export interface SbTableRowElement {
	attributes?: Override<
		Omit<
			Partial<HTMLTableRowElement>,
			"align" | "bgColor" | "ch" | "chOff" | "vAlign"
		>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<
		| SbTableDataCellElement
		| SbTableHeaderCellElement
		| SbTemplateElement
		| SbScriptElement
	>
	dataset?: SbDataset
	readonly tagName: "TR"
}
