import {
	SbGlobalAttributeOverrides,
	Override,
	SbCrossOrigin,
	SbDecoding,
	SbFetchPriority,
	SbReferrerPolicy,
} from "../../shared"
import { AriaRole } from "../../unions"

export interface SbImageElement {
	attributes?: Override<
		Omit<
			Partial<HTMLImageElement>,
			"border" | "hspace" | "longDesc" | "lowsrc" | "name" | "vspace"
		>,
		// TODO: narrow types
		SbGlobalAttributeOverrides & {
			crossOrigin?: SbCrossOrigin
			decoding?: SbDecoding
			fetchPriority?: SbFetchPriority
			referrerPolicy?: SbReferrerPolicy
		} & (
				| {
						alt: string
						role?: Extract<
							AriaRole,
							| "button"
							| "checkbox"
							| "link"
							| "menuitem"
							| "menuitemcheckbox"
							| "menuitemradio"
							| "option"
							| "progressbar"
							| "scrollbar"
							| "separator"
							| "slider"
							| "switch"
							| "tab"
							| "treeitem"
						>
				  }
				| {
						alt: ""
						role?: Extract<AriaRole, "none" | "presentation">
				  }
			)
	>
	children?: never
	readonly tagName: "IMG"
}
