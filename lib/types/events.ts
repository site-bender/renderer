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
