import type { SbMediaType } from "../../media"
import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
	SbLoading,
	SbReferrerPolicy,
} from "../../shared"

export interface SbIFrameElement {
	attributes?: Override<
		Omit<
			Partial<HTMLIFrameElement>,
			| "align"
			| "frameBorder"
			| "longDesc"
			| "marginHeight"
			| "marginWidth"
			| "scrolling"
		>,
		SbGlobalAttributeOverrides & {
			loading?: SbLoading
			referrerPolicy?: SbReferrerPolicy
			role?: Extract<
				SbAriaRole,
				"application" | "document" | "img" | "none" | "presentation"
			>
			type?: SbMediaType
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "IFRAME"
}
