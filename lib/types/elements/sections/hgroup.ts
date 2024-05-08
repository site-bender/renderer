import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbHeadingContent } from "../categories/heading"
import type { SbParagraphElement } from "../grouping/p"

export interface SbHeadingGroupElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbHeadingGroupContent>
	dataset?: SbDataset
	readonly tagName: "HGROUP"
}

export type SbHeadingOnlyElement = Exclude<
	SbHeadingContent,
	{ tagName: "HGROUP" }
>

export type SbHeadingGroupContent =
	| [Array<SbParagraphElement>, SbHeadingOnlyElement, Array<SbParagraphElement>]
	| [Array<SbParagraphElement>, SbHeadingOnlyElement]
	| [SbHeadingOnlyElement, Array<SbParagraphElement>]
	| SbHeadingOnlyElement
