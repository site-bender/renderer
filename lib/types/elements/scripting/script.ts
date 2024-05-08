import type {
	Override,
	SbCrossOrigin,
	SbDataset,
	SbFetchPriority,
	SbGlobalAttributeOverrides,
	SbReferrerPolicy,
} from "../../shared"
import type { SbTextNode } from "../text-node"

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
	dataset?: SbDataset
	readonly tagName: "SCRIPT"
}
