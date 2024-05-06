import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbHeadingContent } from "../categories/heading"
import { SbParagraphElement } from "../grouping/p"

export interface SbHeadingGroupElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<SbHeadingGroupContent>
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
