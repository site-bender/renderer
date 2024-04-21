import type { ElementAny } from "./elements"
import type { Operation } from "@sitebender/operations/lib/types"
import type { TextNode } from "./shared"

export interface ComponentBase {
	attributes?: Record<string, string>
	readonly component: Component["component"]
	children?: Array<ElementAny | TextNode>
	dataset?: Record<string, string>
	id?: string
	scripts?: Array<string>
	stylesheets?: Array<string>
}

export interface AccordionItem extends ComponentBase {
	readonly component: "accordionItem"
	open?: boolean
	title?: Array<ElementAny | TextNode>
}

export interface Accordion extends ComponentBase {
	readonly component: "accordion"
	title?: Array<ElementAny | TextNode>
}

export interface Aside extends ComponentBase {
	readonly component: "aside"
}

export interface EmailField extends ComponentBase {
	readonly component: "email-field"
	defaultValue?: string
	label: string
	name: string
	validation?: Validation
}

export interface Footer extends ComponentBase {
	readonly component: "footer"
}

export interface Header extends ComponentBase {
	readonly component: "header"
}

export interface HelpBox extends ComponentBase {
	readonly component: "help-box"
	forIds?: string
	form?: string
	name?: string
	value: string
}

export interface Main extends ComponentBase {
	readonly component: "main"
}

export interface Nav extends ComponentBase {
	readonly component: "nav"
}

export interface NumberField extends ComponentBase {
	readonly component: "number-field"
	defaultValue?: string | number
	label: string
	name: string
	validation?: Validation
}

export type Component =
	| Accordion
	| AccordionItem
	| Aside
	| EmailField
	| Footer
	| Header
	| HelpBox
	| Main
	| Nav
	| NumberField

export interface Validation {
	operation: Operation
	validateOn: Array<string>
}
