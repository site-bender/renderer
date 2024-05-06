import { AriaRole } from "./../../unions"
import { SbGlobalAttributeOverrides, Override } from "../../shared"

export interface SbBreakElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: Extract<AriaRole, "none" | "presentation">
		}
	>
	children?: never
	readonly tagName: "BR"
}
