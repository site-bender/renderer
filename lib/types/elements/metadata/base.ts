import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbBaseElement {
	attributes?: Override<
		Partial<HTMLBaseElement>,
		SbGlobalAttributeOverrides & {
			href: string
			target?: SbBaseTarget
		}
	>
	dataset?: SbDataset
	readonly tagName: "BASE"
}

export type SbBaseTarget = "_blank" | "_parent" | "_self" | "_top"
