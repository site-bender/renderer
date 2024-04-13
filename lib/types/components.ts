import type { TextNode } from "./shared"
import type { Elem } from "./elements"
import type { Operation } from "@sitebender/operations"

export interface ComponentBase {
	readonly component: string
	children?: Array<Elem>
	id?: string
	scripts?: Array<string>
	stylesheets?: Array<string>
}

export interface Accordion extends ComponentBase {
	readonly component: "accordion"
	open?: boolean
	summary?: Array<TextNode | Elem>
}

export interface EmailField extends ComponentBase {
	readonly component: "email-field"
	defaultValue?: string
	label: string
	name: string
	validation?: Validation
}

export interface NumberField extends ComponentBase {
	readonly component: "number-field"
	defaultValue?: string | number
	label: string
	name: string
	validation?: Validation
}

export interface HelpBox extends ComponentBase {
	readonly component: "help-box"
	forIds?: string
	form?: string
	name?: string
	value: string
}

export type Component = Accordion | EmailField | HelpBox

export interface Validation {
	operation: Operation
	validateOn: Array<string>
}
