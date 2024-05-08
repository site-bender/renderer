import type {
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
	Override,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbVariableElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbPhrasingContent>
	dataset?: SbDataset
	readonly tagName: "VAR"
}
