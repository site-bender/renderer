import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbHorizontalRuleElement {
	attributes?: Override<
		Omit<
			Partial<HTMLHRElement>,
			"align" | "color" | "noShade" | "size" | "width"
		>,
		SbGlobalAttributeOverrides & {
			role?: Extract<SbAriaRole, "none" | "presentation">
		}
	>
	children?: never
	dataset?: SbDataset
	readonly tagName: "HR"
}
