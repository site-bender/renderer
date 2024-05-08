import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbArticleElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbArticleRole
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "ARTICLE"
}

export type SbArticleRole = Extract<
	SbAriaRole,
	| "application"
	| "document"
	| "feed"
	| "main"
	| "none"
	| "presentation"
	| "region"
>
