import type { SbMediaType } from "../../media"
import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbObjectElement {
	attributes?: Override<
		Omit<
			Partial<HTMLObjectElement>,
			| "align"
			| "archive"
			| "border"
			| "code"
			| "codeBase"
			| "codeType"
			| "declare"
			| "hspace"
			| "standby"
			| "useMap"
			| "vspace"
		>,
		SbGlobalAttributeOverrides & {
			form?: string
			role?: Extract<SbAriaRole, "application" | "document" | "img">
			type?: SbMediaType
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "OBJECT"
}
