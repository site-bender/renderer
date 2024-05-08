import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbSectionElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbSectionRole
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "SECTION"
}

export type SbSectionRole = Extract<
	SbAriaRole,
	| "alert"
	| "alertdialog"
	| "application"
	| "banner"
	| "complementary"
	| "contentinfo"
	| "dialog"
	| "document"
	| "feed"
	| "log"
	| "main"
	| "marquee"
	| "navigation"
	| "none"
	| "note"
	| "presentation"
	| "region"
	| "search"
	| "status"
	| "tabpanel"
>
