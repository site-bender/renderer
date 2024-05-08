import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbDialogElement {
	attributes?: Override<
		Partial<HTMLDialogElement>,
		SbGlobalAttributeOverrides & {
			role?: Extract<SbAriaRole, "alertdialog">
			tabIndex?: never
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "DIALOG"
}
