import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbHeading1Element {
	attributes?: Override<
		Partial<SbHeadingAttributes>,
		SbGlobalAttributeOverrides & {
			role?: SbHeadingRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "H1"
}

export interface SbHeading2Element {
	attributes?: Override<
		Partial<SbHeadingAttributes>,
		SbGlobalAttributeOverrides & {
			role?: SbHeadingRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "H2"
}

export interface SbHeading3Element {
	attributes?: Override<
		Partial<SbHeadingAttributes>,
		SbGlobalAttributeOverrides & {
			role?: SbHeadingRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "H3"
}

export interface SbHeading4Element {
	attributes?: Override<
		Partial<SbHeadingAttributes>,
		SbGlobalAttributeOverrides & {
			role?: SbHeadingRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "H4"
}

export interface SbHeading5Element {
	attributes?: Override<
		Partial<SbHeadingAttributes>,
		SbGlobalAttributeOverrides & {
			role?: SbHeadingRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "H5"
}

export interface SbHeading6Element {
	attributes?: Override<
		Partial<SbHeadingAttributes>,
		SbGlobalAttributeOverrides & {
			role?: SbHeadingRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "H6"
}

export interface SbHeadingElement {
	attributes?: Override<
		Partial<SbHeadingAttributes>,
		SbGlobalAttributeOverrides & {
			role?: SbHeadingRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "HN"
}

export type SbHeadingAttributes = Omit<HTMLHeadingElement, "align">

export type SbHeadingRole = Extract<
	SbAriaRole,
	"heading" | "none" | "presentation" | "tab"
>
