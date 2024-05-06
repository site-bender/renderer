import { AriaRole } from "../../unions"
import { Override, SbGlobalAttributeOverrides } from "../../shared"
import { SbFlowContent } from "../categories/flow"

export interface SbArticleElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbArticleRole
		}
	>
	children?: Array<SbFlowContent>
	readonly tagName: "ARTICLE"
}

export type SbArticleRole = Extract<
	AriaRole,
	| "application"
	| "document"
	| "feed"
	| "main"
	| "none"
	| "presentation"
	| "region"
>
