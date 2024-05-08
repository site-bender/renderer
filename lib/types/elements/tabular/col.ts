import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbTableColumnElement {
	attributes?: Override<
		Omit<
			Partial<HTMLTableColElement>,
			"align" | "ch" | "chOff" | "vAlign" | "width"
		>,
		SbGlobalAttributeOverrides
	>
	dataset?: SbDataset
	readonly tagName: "COL"
}
