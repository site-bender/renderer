import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"

export interface SbDescriptionTermElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: Extract<AriaRole, "listitem">
		}
	>
	children?: Array<
		Exclude<
			SbFlowContent,
			| { tagName: "FOOTER" }
			| { tagName: "HEADER" }
			| { tagName: "ARTICLE" }
			| { tagName: "ASIDE" }
			| { tagName: "NAV" }
			| { tagName: "SECTION" }
			| { tagName: "H1" }
			| { tagName: "H2" }
			| { tagName: "H3" }
			| { tagName: "H4" }
			| { tagName: "H5" }
			| { tagName: "H6" }
			| { tagName: "HN" }
		>
	>
	readonly tagName: "DT"
}
