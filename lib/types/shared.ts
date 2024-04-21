import type { Operation } from "@sitebender/operations/lib/types"
import type { Autocapitalize } from "./unions"
import type { ElementAny } from "./elements"

export interface ElementRoot {
	readonly tagName: ElementAny["tagName"]
}

export interface ElementBase<T> extends ElementRoot {
	children?: Array<T>
	dataset?: {
		[key: string]: string | number
	}
	display?: Operation
	publishes?: {
		[key in HTMLEvent]: unknown
	}
	scripts?: Array<string>
	stylesheets?: Array<string>
	subscribesTo?: {
		[key: string]: unknown
	}
	validation?: Operation
}

export type ElementEvent =
	| "contentvisibilityautostatechange"
	| "scroll"
	| "scrollend"
	| "securitypolicyviolation"
	| "wheel"

export type AnimationEvent =
	| "animationcancel"
	| "animationend"
	| "animationiteration"
	| "animationstart"

export type CanvasEvent =
	| "webglcontextcreationerror"
	| "webglcontextlost"
	| "webglcontextrestored"

export type ClipboardEvent = "copy" | "cut" | "paste"

export type CompositionEvent =
	| "compositionend"
	| "compositionstart"
	| "compositionupdate"

export type DialogEvent = "close"

export type DragAndDropEvent =
	| "drag"
	| "dragend"
	| "dragenter"
	| "dragleave"
	| "dragover"
	| "dragstart"
	| "drop"

export type FocusEvent = "blur" | "focus" | "focusin" | "focusout"

export type FormEvent = "formdata" | "reset" | "submit"

export type FullscreenEvent = "fullscreenchange" | "fullscreenerror"

export type HTMLEvent = "cancel" | "change" | "error" | "load"

export type InputElementTypes =
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week"

export type KeyboardEvent = "keydown" | "keyup"

export type MediaEvent =
	| "abort"
	| "canplay"
	| "canplaythrough"
	| "durationchange"
	| "emptied"
	| "ended"
	| "error"
	| "loadeddata"
	| "loadedmetadata"
	| "loadstart"
	| "pause"
	| "play"
	| "playing"
	| "progress"
	| "ratechange"
	| "resize"
	| "seeked"
	| "seeking"
	| "stalled"
	| "suspend"
	| "timeupdate"
	| "volumechange"
	| "waiting"

export type MouseEvent =
	| "auxclick"
	| "click"
	| "contextmenu"
	| "dblclick"
	| "mousedown"
	| "mouseenter"
	| "mouseleave"
	| "mousemove"
	| "mouseout"
	| "mouseover"
	| "mouseup"

export type PointerEvent =
	| "gotpointercapture"
	| "lostpointercapture"
	| "pointercancel"
	| "pointerdown"
	| "pointerenter"
	| "pointerleave"
	| "pointermove"
	| "pointerout"
	| "pointerover"
	| "pointerup"

export type PopoverEvent = "beforetoggle" | "toggle"

export type TouchEvent = "touchcancel" | "touchend" | "touchmove" | "touchstart"

export type TransitionEvent =
	| "transitioncancel"
	| "transitionend"
	| "transitionrun"
	| "transitionstart"

export type WindowEvent =
	| "onafterprint"
	| "onbeforeprint"
	| "onbeforeunload"
	| "ongamepadconnected"
	| "ongamepaddisconnected"
	| "onhashchange"
	| "onlanguagechange"
	| "onmessage"
	| "onmessageerror"
	| "onoffline"
	| "ononline"
	| "onpagehide"
	| "onpageshow"
	| "onpopstate"
	| "onrejectionhandled"
	| "onstorage"
	| "onunhandledrejection"
	| "onunload"

export type GlobalAttributes = {
	accesskey?: string
	autocapitalize?: Autocapitalize
	class?: string
	contenteditable?: "" | boolean
	dir?: "auto" | "ltr" | "rtl"
	draggable?: boolean
	enterkeyhint?:
		| "done"
		| "enter"
		| "go"
		| "next"
		| "previous"
		| "search"
		| "send"
	hidden?: "" | "hidden" | "until-found"
	id?: string
	inert?: boolean
	inputmode?:
		| "decimal"
		| "email"
		| "none"
		| "numeric"
		| "search"
		| "tel"
		| "text"
		| "url"
	itemid?: string
	itemref?: string
	itemscope?: boolean
	itemtype?: string
	lang?: string
	nonce?: string
	popover?: "auto" | "manual"
	spellcheck?: "" | boolean
	style?: string
	tabindex?: string
	title?: string
	translate?: "" | "no" | "yes"
}

export type TextNode = string
