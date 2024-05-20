import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbTableColumnElement } from "./col"

export interface SbTableColumnGroupElementWithSpan {
	attributes?: Override<
		Omit<
			Partial<HTMLTableColElement>,
			"align" | "ch" | "chOff" | "vAlign" | "width"
		>,
		SbGlobalAttributeOverrides & {
			span: number
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "COLGROUP"
}

export interface SbTableColumnGroupElementWithoutSpan {
	attributes?: Override<
		Omit<
			Partial<HTMLTableColElement>,
			"align" | "ch" | "chOff" | "span" | "vAlign" | "width"
		>,
		SbGlobalAttributeOverrides
	>
	children?: Array<SbTableColumnElement>
	dataset?: SbDataset
	readonly tagName: "COLGROUP"
}

export type SbTableColumnGroupElement =
	| SbTableColumnGroupElementWithSpan
	| SbTableColumnGroupElementWithoutSpan
