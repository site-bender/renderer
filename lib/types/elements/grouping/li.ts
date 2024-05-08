import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

export interface SbListItemElement {
	attributes?: Override<
		Omit<Partial<HTMLLIElement>, "type">,
		SbGlobalAttributeOverrides & {
			role?: Extract<
				SbAriaRole,
				| "menuitem"
				| "menuitemcheckbox"
				| "menuitemradio"
				| "option"
				| "none"
				| "presentation"
				| "radio"
				| "separator"
				| "tab"
				| "treeitem"
			>
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "LI"
}
