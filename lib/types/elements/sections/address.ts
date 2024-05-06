import { AriaRole } from "../../unions"
import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbAddressElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<SbAddressContent>
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
