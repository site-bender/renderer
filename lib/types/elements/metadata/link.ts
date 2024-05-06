import { SbMediaType } from "../../media"
import {
	SbGlobalAttributeOverrides,
	Override,
	SbReferrerPolicy,
	SbCrossOrigin,
	SbFetchPriority,
} from "../../shared"

// TODO: Make flow and phrasing if itemprop present
export interface SbLinkElement {
	attributes?: Override<
		Omit<Partial<HTMLLinkElement>, "charset" | "rev" | "target">,
		SbGlobalAttributeOverrides & {
			crossOrigin?: SbCrossOrigin
			fetchPriority?: SbFetchPriority
			referrerPolicy?: SbLinkReferrerPolicy
			type?: SbMediaType
		}
	>
	readonly tagName: "LINK"
}

export type SbLinkReferrerPolicy = Extract<
	SbReferrerPolicy,
	| "no-referrer"
	| "no-referrer-when-downgrade"
	| "origin"
	| "origin-when-cross-origin"
	| "unsafe-url"
>
