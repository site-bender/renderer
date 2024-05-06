import { SbMediaType } from "../../media"
import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"

export interface SbEmbedElement {
	attributes?: Override<
		Omit<Partial<HTMLEmbedElement>, "align" | "name">,
		SbGlobalAttributeOverrides & {
			role?: Extract<
				AriaRole,
				"application" | "document" | "img" | "none" | "presentation"
			>
			type?: SbMediaType
		}
	>
	children?: never
	readonly tagName: "EMBED"
}
