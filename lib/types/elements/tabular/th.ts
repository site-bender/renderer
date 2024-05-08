import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbTableHeaderCellElement {
	attributes?: Override<
		Omit<
			Partial<HTMLTableCellElement>,
			| "align"
			| "axis"
			| "bgColor"
			| "ch"
			| "chOff"
			| "height"
			| "noWrap"
			| "vAlign"
			| "width"
		>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbTableHeaderCellContent>
	dataset?: SbDataset
	readonly tagName: "TH"
}

export type SbTableHeaderCellContent = Exclude<
	SbFlowContent,
	| { tagName: "ARTICLE" }
	| { tagName: "ASIDE" }
	| { tagName: "FOOTER" }
	| { tagName: "H1" }
	| { tagName: "H2" }
	| { tagName: "H3" }
	| { tagName: "H4" }
	| { tagName: "H5" }
	| { tagName: "H6" }
	| { tagName: "HEADER" }
	| { tagName: "HN" }
	| { tagName: "NAV" }
	| { tagName: "SECTION" }
>
