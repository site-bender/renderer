import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbBreakElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: Extract<SbAriaRole, "none" | "presentation">
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "BR"
}
