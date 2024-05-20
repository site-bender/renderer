import type {
	Override,
	SbAriaRole,
	SbCrossOrigin,
	SbDataset,
	SbDecoding,
	SbFetchPriority,
	SbGlobalAttributeOverrides,
	SbReferrerPolicy,
} from "../../shared"

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
							SbAriaRole,
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
						role?: Extract<SbAriaRole, "none" | "presentation">
				  }
			)
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "IMG"
}
