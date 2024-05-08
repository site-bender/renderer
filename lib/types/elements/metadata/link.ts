import type { SbMediaType } from "../../media"
import type {
	Override,
	SbCrossOrigin,
	SbDataset,
	SbFetchPriority,
	SbGlobalAttributeOverrides,
	SbReferrerPolicy,
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
	dataset?: SbDataset
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
