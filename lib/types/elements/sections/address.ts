import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbAddressElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbAddressContent>
	dataset?: SbDataset
	readonly tagName: "ADDRESS"
}

export type SbAddressContent = Exclude<
	SbFlowContent,
	| { tagName: "ADDRESS" }
	| { tagName: "HGROUP" }
	| { tagName: "H1" }
	| { tagName: "H2" }
	| { tagName: "H3" }
	| { tagName: "H4" }
	| { tagName: "H5" }
	| { tagName: "h6" }
	| { tagName: "HN" }
	| { tagName: "ARTICLE" }
	| { tagName: "ASIDE" }
	| { tagName: "SECTION" }
	| { tagName: "NAV" }
	| { tagName: "HEADER" }
	| { tagName: "FOOTER" }
>
