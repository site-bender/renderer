import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"
import type { SbFigcaptionElement } from "./figcaption"

export interface SbFigureElementWithCaption {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: never
		}
	>
	children?:
		| [SbFigcaptionElement, ...Array<SbFlowContent>]
		| [...Array<SbFlowContent>, SbFigcaptionElement]
	dataset?: SbDataset
	readonly tagName: "FIGURE"
}

export interface SbFigureElementWithoutCaption {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "FIGURE"
}

export type SbFigureElement =
	| SbFigureElementWithCaption
	| SbFigureElementWithoutCaption
