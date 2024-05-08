import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbOutputElement {
	attributes?: Override<
		Partial<HTMLOutputElement>,
		SbGlobalAttributeOverrides & {
			for?: string
			form?: string
			role?: SbAriaRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "OUTPUT"
}
