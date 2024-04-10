interface SBElement {
	children?: Array<TextNode | Elem>
	dataset?: {
		[key: string]: string | number
	}
	display?: Operation
	publishes?: {
		[key: HTMLEvent]: {}
	}
	scripts: Array<string>
	stylesheets: Array<string>
	subscribesTo?: {
		[key: string]: {}
	}
	validation?: Operation
}

type ElementEvent =
	| "contentvisibilityautostatechange"
	| "scroll"
	| "scrollend"
	| "securitypolicyviolation"
	| "wheel"

type AnimationEvent =
	| "animationcancel"
	| "animationend"
	| "animationiteration"
	| "animationstart"

type CanvasEvent =
	| "webglcontextcreationerror"
	| "webglcontextlost"
	| "webglcontextrestored"

type ClipboardEvent = "copy" | "cut" | "paste"

type CompositionEvent =
	| "compositionend"
	| "compositionstart"
	| "compositionupdate"

type DialogEvent = "close"

type DragAndDropEvent =
	| "drag"
	| "dragend"
	| "dragenter"
	| "dragleave"
	| "dragover"
	| "dragstart"
	| "drop"

type FocusEvent = "blur" | "focus" | "focusin" | "focusout"

type FormEvent = "formdata" | "reset" | "submit"

type FullscreenEvent = "fullscreenchange" | "fullscreenerror"

type HTMLEvent = "cancel" | "change" | "error" | "load"

type KeyboardEvent = "keydown" | "keyup"

type MediaEvent =
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

type MouseEvent =
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

type PointerEvent =
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

type PopoverEvent = "beforetoggle" | "toggle"

type TouchEvent = "touchcancel" | "touchend" | "touchmove" | "touchstart"

type TransitionEvent =
	| "transitioncancel"
	| "transitionend"
	| "transitionrun"
	| "transitionstart"

type WindowEvent =
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

type GlobalAttributes = {
	accesskey?: string
	autocapitalize?: Autocapitalize
	class?: string
	contenteditable?: "" | boolean
	dataset?: Record<string, string>
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

type TextNode = string
