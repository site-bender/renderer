import {
	SbGlobalAttributeOverrides,
	Override,
	SbCrossOrigin,
	SbFetchPriority,
	SbReferrerPolicy,
} from "../../shared"
import { SbTextNode } from "../text-node"

export interface SbScriptElement {
	attributes?: Override<
		Omit<Partial<HTMLScriptElement>, "charset" | "event" | "htmlFor">,
		SbGlobalAttributeOverrides & {
			crossOrigin?: SbCrossOrigin
			fetchPriority?: SbFetchPriority
			referrerPolicy?: SbReferrerPolicy
		}
	>
	children?: SbTextNode
	readonly tagName: "SCRIPT"
}
