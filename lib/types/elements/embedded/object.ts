import { SbMediaType } from "../../media"
import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"

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
			role?: Extract<AriaRole, "application" | "document" | "img">
			type?: SbMediaType
		}
	>
	children?: Array<SbFlowContent>
	readonly tagName: "OBJECT"
}
