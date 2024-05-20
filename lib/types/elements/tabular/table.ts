import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbTableCaptionElement } from "./caption"
import type { SbTableColumnGroupElement } from "./colgroup"
import type { SbTableBodyElement } from "./tbody"
import type { SbTableFooterElement } from "./tfoot"
import type { SbTableHeaderElement } from "./thead"
import type { SbTableRowElement } from "./tr"

export interface SbTableElement {
	attributes?: Override<
		Omit<
			Partial<HTMLTableElement>,
			| "align"
			| "bgColor"
			| "border"
			| "cellPadding"
			| "cellSpacing"
			| "frame"
			| "rules"
			| "summary"
			| "width"
		>,
		SbGlobalAttributeOverrides
	>
	children?:
		| [
				SbTableCaptionElement,
				...Array<SbTableColumnGroupElement>,
				SbTableHeaderElement,
				...(Array<SbTableBodyElement> | Array<SbTableRowElement>),
				SbTableFooterElement,
		  ]
		| [
				SbTableCaptionElement,
				...Array<SbTableColumnGroupElement>,
				SbTableHeaderElement,
				...(Array<SbTableBodyElement> | Array<SbTableRowElement>),
		  ]
		| [
				SbTableCaptionElement,
				...Array<SbTableColumnGroupElement>,
				...(Array<SbTableBodyElement> | Array<SbTableRowElement>),
				SbTableFooterElement,
		  ]
		| [
				...Array<SbTableColumnGroupElement>,
				SbTableHeaderElement,
				...(Array<SbTableBodyElement> | Array<SbTableRowElement>),
				SbTableFooterElement,
		  ]
		| [
				SbTableCaptionElement,
				...Array<SbTableColumnGroupElement>,
				...(Array<SbTableBodyElement> | Array<SbTableRowElement>),
		  ]
		| [
				...Array<SbTableColumnGroupElement>,
				SbTableHeaderElement,
				...(Array<SbTableBodyElement> | Array<SbTableRowElement>),
		  ]
		| [
				...Array<SbTableColumnGroupElement>,
				...(Array<SbTableBodyElement> | Array<SbTableRowElement>),
				SbTableFooterElement,
		  ]
	dataset?: SbDataset
	readonly tagName: "TABLE"
}
