import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"
import { SbFigcaptionElement } from "./figcaption"

export interface SbFigureElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole // TODO: narrow type
		}
	>
	children?:
		| Array<SbFlowContent>
		| [SbFigcaptionElement, ...Array<SbFlowContent>]
		| [...Array<SbFlowContent>, SbFigcaptionElement]
	readonly tagName: "FIGURE"
}
