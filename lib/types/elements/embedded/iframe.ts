import { SbMediaType } from "../../media"
import {
	SbGlobalAttributeOverrides,
	Override,
	SbReferrerPolicy,
	SbLoading,
} from "../../shared"
import { AriaRole } from "../../unions"

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
				AriaRole,
				"application" | "document" | "img" | "none" | "presentation"
			>
			type?: SbMediaType
		}
	>
	children?: never
	readonly tagName: "IFRAME"
}
