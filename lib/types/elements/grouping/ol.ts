import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
	SbListType,
} from "../../shared"
import type { SbScriptElement } from "../scripting/script"
import type { SbTemplateElement } from "../scripting/template"
import type { SbListItemElement } from "./li"

export interface SbOrderedListElement {
	attributes?: Override<
		Omit<Partial<HTMLOListElement>, "compact">,
		SbGlobalAttributeOverrides & {
			role?: Extract<
				SbAriaRole,
				| "directory"
				| "group"
				| "listbox"
				| "menu"
				| "menubar"
				| "none"
				| "presentation"
				| "radiogroup"
				| "tablist"
				| "toolbar"
				| "tree"
			>
			type?: SbListType
		}
	>
	children?: Array<SbListItemElement | SbScriptElement | SbTemplateElement>
	dataset?: SbDataset
	readonly tagName: "OL"
}
