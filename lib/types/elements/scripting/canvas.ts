import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbCanvasElement {
	attributes?: Override<
		Partial<HTMLCanvasElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	// TODO: narrow children
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "CANVAS"
}
