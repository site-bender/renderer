import { SbGlobalAttributeOverrides, Override } from "../../shared"

export interface SbBaseElement {
	attributes?: Override<
		Partial<HTMLBaseElement>,
		SbGlobalAttributeOverrides & {
			href: string
			target?: SbBaseTarget
		}
	>
	readonly tagName: "BASE"
}

export type SbBaseTarget = "_blank" | "_parent" | "_self" | "_top"
