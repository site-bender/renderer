interface ComponentBase {
	readonly component: string
	children?: Array<Elem>
	id?: string
	scripts?: Array<string>
	stylesheets?: Array<string>
}

interface Accordion extends ComponentBase {
	readonly component: "accordion"
	open?: boolean
	summary?: Array<TextNode | Elem>
}

interface EmailField extends ComponentBase {
	readonly component: "email-field"
	defaultValue?: string
	label: string
	name: string
	validation?: Validation
}

interface NumberField extends ComponentBase {
	readonly component: "number-field"
	defaultValue?: string | number
	label: string
	name: string
	validation?: Validation
}

interface HelpBox extends ComponentBase {
	readonly component: "help-box"
	forIds?: string
	form?: string
	name?: string
	value: string
}

type Component = Accordion | EmailField | HelpBox

interface Validation {
	operation: Operation
	validateOn: Array<string>
}
