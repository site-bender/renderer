import type { Operation } from "@sitebender/operations/lib/types"
import type {
	Autocapitalize,
	ContentEditable,
	Dir,
	EnterKeyHint,
	Hidden,
	InputMode,
	Popover,
	Spellcheck,
	Translate,
} from "./unions"
import type { ElementAny } from "./old-elements"

export interface ElementRoot {
	readonly tagName: ElementAny["tagName"]
}

export type Override<T1, T2> = Omit<T1, keyof T2> & T2

export interface ElementBase<T, U, V, W> extends ElementRoot {
	attributes?: GlobalAttributes & T
	children?: Array<U>
	dataset?: {
		[key: string]: string | number
	}
	display?: Operation
	publishes?: V
	scripts?: Array<string>
	stylesheets?: Array<string>
	subscribesTo?: W
	validation?: Operation
}

export interface Condition {}
export interface Validation {}

export interface PublishOperation {}
export interface SubscribeOperation {}

export interface SbElement<
	A extends HTMLElement,
	C extends HTMLCollection,
	P extends PublishOperation,
	S extends SubscribeOperation,
> {
	attributes?: A
	children?: C
	dataset?: {
		[key: string]: string | number
	}
	display?: Condition
	publishes?: P
	scripts?: Array<string>
	stylesheets?: Array<string>
	subscribesTo?: S
	readonly tagName: string
	validation?: Validation
}

export type GlobalAttributes = {
	accesskey?: string
	autocapitalize?: Autocapitalize
	class?: string
	contenteditable?: ContentEditable
	dir?: Dir
	draggable?: boolean
	enterkeyhint?: EnterKeyHint
	hidden?: Hidden
	id?: string
	inert?: boolean
	inputmode?: InputMode
	itemid?: string
	itemref?: string
	itemscope?: boolean
	itemtype?: string
	lang?: string
	nonce?: string
	popover?: Popover
	spellcheck?: Spellcheck
	style?: string
	tabindex?: string
	title?: string
	translate?: Translate
}

export type SbGlobalAttributeOverrides = {
	accessKey?: never
	autocapitalize?: Autocapitalize
	contenteditable?: ContentEditable
	dir?: Dir
	enterkeyhint?: EnterKeyHint
	hidden?: Hidden
	inputmode?: InputMode
	popover?: Popover
	spellcheck?: Spellcheck
	translate?: Translate
}

export type TextNode = {
	content: string
	readonly tagName: "TEXTNODE"
}

export type SbCrossOrigin = "anonymous" | "use-credentials"

export type SbDecoding = "async" | "auto" | "sync"

export type SbFetchPriority = "auto" | "low" | "high"

export type SbLoading = "eager" | "lazy"

export type SbHttpEquiv =
	| "content-security-policy"
	| "content-type"
	| "default-style"
	| "refresh"
	| "x-ua-compatible"

export type SbReferrerPolicy =
	| "no-referrer-when-downgrade"
	| "no-referrer"
	| "origin-when-cross-origin"
	| "origin"
	| "same-origin"
	| "strict-origin-when-cross-origin"
	| "strict-origin"
	| "unsafe-url"
