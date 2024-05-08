import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbListItemElement } from "./li"
import type { SbScriptElement } from "../scripting/script"
import type { SbTemplateElement } from "../scripting/template"

export interface SbMenuElement {
	attributes?: Override<
		Omit<Partial<HTMLMenuElement>, "compact">,
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
		}
	>
	children?: Array<SbListItemElement | SbScriptElement | SbTemplateElement>
	dataset?: SbDataset
	readonly tagName: "MENU"
}
