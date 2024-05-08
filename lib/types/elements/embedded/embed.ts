import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbMediaType } from "../../media"

export interface SbEmbedElement {
	attributes?: Override<
		Omit<Partial<HTMLEmbedElement>, "align" | "name">,
		SbGlobalAttributeOverrides & {
			role?: Extract<
				SbAriaRole,
				"application" | "document" | "img" | "none" | "presentation"
			>
			type?: SbMediaType
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "EMBED"
}
