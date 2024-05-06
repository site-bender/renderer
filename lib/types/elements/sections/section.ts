import { AriaRole } from "../../unions"
import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbSectionElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbSectionRole
		}
	>
	children?: Array<SbFlowContent>
	readonly tagName: "SECTION"
}

export type SbSectionRole = Extract<
	AriaRole,
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
