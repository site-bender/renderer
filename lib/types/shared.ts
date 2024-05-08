export type Override<T1, T2> = Omit<T1, keyof T2> & T2

// export interface ElementBase<T, U, V, W> extends ElementRoot {
// 	attributes?: GlobalAttributes & T
// 	children?: Array<U>
// 	dataset?: {
// 		[key: string]: string | number
// 	}
// 	display?: Operation
// 	publishes?: V
// 	scripts?: Array<string>
// 	stylesheets?: Array<string>
// 	subscribesTo?: W
// 	validation?: Operation
// }

export interface SbDisplay {}
export interface SbValidation {}

export interface SbPublishes {}
export interface SbSubscribes {}

export interface SbElement<
	A,
	C,
	P extends SbPublishes,
	S extends SbSubscribes,
> {
	attributes?: A
	children?: C
	dataset?: SbDataset
	display?: SbDisplay
	publishes?: P
	scripts?: Array<string>
	stylesheets?: Array<string>
	subscribesTo?: S
	readonly tagName: string
	validation?: SbValidation
}

export type SbGlobalAttributes = {
	accesskey?: string
	autocapitalize?: SbAutocapitalize
	class?: string
	contenteditable?: SbContentEditable
	dir?: SbDirection
	draggable?: boolean
	enterkeyhint?: SbEnterKeyHint
	hidden?: SbHidden
	id?: string
	inert?: boolean
	inputmode?: SbInputMode
	itemid?: string
	itemref?: string
	itemscope?: boolean
	itemtype?: string
	lang?: string
	nonce?: string
	popover?: SbPopover
	spellcheck?: SbSpellcheck
	style?: CSSStyleDeclaration
	tabindex?: string
	title?: string
	translate?: SbTranslate
}

export type SbGlobalAttributeOverrides = {
	accessKey?: never
	autocapitalize?: SbAutocapitalize
	contenteditable?: SbContentEditable
	dir?: SbDirection
	enterkeyhint?: SbEnterKeyHint
	hidden?: SbHidden
	inputmode?: SbInputMode
	popover?: SbPopover
	spellcheck?: SbSpellcheck
	translate?: SbTranslate
}

export type SbRenderOptions = {
	level?: number
}

export type SbAriaRole =
	| "alert"
	| "alertdialog"
	| "application"
	| "article"
	| "banner"
	| "button"
	| "cell"
	| "checkbox"
	| "columnheader"
	| "combobox"
	| "comment"
	| "complementary"
	| "contentinfo"
	| "definition"
	| "dialog"
	| "directory"
	| "document"
	| "document"
	| "feed"
	| "figure"
	| "form"
	| "generic"
	| "grid"
	| "gridcell"
	| "group"
	| "heading"
	| "img"
	| "link"
	| "list"
	| "listbox"
	| "listitem"
	| "log"
	| "main"
	| "mark"
	| "marquee"
	| "math"
	| "menu"
	| "menubar"
	| "menuitem"
	| "menuitemcheckbox"
	| "menuitemradio"
	| "meter"
	| "navigation"
	| "none"
	| "note"
	| "option"
	| "presentation"
	| "progressbar"
	| "radio"
	| "radiogroup"
	| "region"
	| "row"
	| "rowgroup"
	| "rowheader"
	| "scrollbar"
	| "search"
	| "searchbox"
	| "separator"
	| "slider"
	| "spinbutton"
	| "status"
	| "suggestion"
	| "switch"
	| "tab"
	| "table"
	| "tablist"
	| "tabpanel"
	| "term"
	| "textbox"
	| "timer"
	| "toolbar"
	| "tooltip"
	| "tree"
	| "treegrid"
	| "treeitem"

export type SbAutocapitalize =
	| "none"
	| "off"
	| "sentences"
	| "on"
	| "words"
	| "characters"

export type SbAutocomplete = "off" | "on" | string

export type SbContentEditable = "" | boolean

export type SbCrossOrigin = "anonymous" | "use-credentials"

export type SbDataset = {
	[key: string]: string | number | boolean
}

export type SbDecoding = "async" | "auto" | "sync"

export type SbDirection = "auto" | "ltr" | "rtl"

export type SbEnterKeyHint =
	| "done"
	| "enter"
	| "go"
	| "next"
	| "previous"
	| "search"
	| "send"

export type SbFetchPriority = "auto" | "low" | "high"

export type SbFormEnctype =
	| "application/x-www-form-urlencoded"
	| "multipart/form-data"
	| "text/plain"

export type SbFormMethod = "dialog" | "get" | "post"

export type SbFormPopoverTarget = "hide" | "show" | "toggle"

export type SbFormTarget = "_blank" | "_parent" | "_self" | "_top"

export type SbFormType = "button" | "reset" | "submit"

export type SbHidden = "" | "hidden" | "until-found"

export type SbHttpEquiv =
	| "content-security-policy"
	| "content-type"
	| "default-style"
	| "refresh"
	| "x-ua-compatible"

export type SbInputMode =
	| "decimal"
	| "email"
	| "none"
	| "numeric"
	| "search"
	| "tel"
	| "text"
	| "url"

export type SbListType = "a" | "A" | "i" | "I" | "1"

export type SbLoading = "eager" | "lazy"

export type SbPopover = "auto" | "manual"

export type SbReferrerPolicy =
	| "no-referrer-when-downgrade"
	| "no-referrer"
	| "origin-when-cross-origin"
	| "origin"
	| "same-origin"
	| "strict-origin-when-cross-origin"
	| "strict-origin"
	| "unsafe-url"

// TODO: For space-separated string (DOMTokenList)
export type SbSandbox =
	| "allow-downloads"
	| "allow-downloads-without-user-activation" // experimental
	| "allow-forms"
	| "allow-modals"
	| "allow-orientation-lock"
	| "allow-pointer-lock"
	| "allow-popups"
	| "allow-popups-to-escape-sandbox"
	| "allow-presentation"
	| "allow-same-origin"
	| "allow-scripts"
	| "allow-storage-access-by-user-activation" // experimental
	| "allow-top-navigation"
	| "allow-top-navigation-by-user-activation"
	| "allow-top-navigation-to-custom-protocols"

export type SbSpellcheck = "" | "default" | "false" | "true" | boolean

export type SbTagName =
	| "A"
	| "ABBR"
	| "ADDRESS"
	| "AREA"
	| "ARTICLE"
	| "ASIDE"
	| "AUDIO"
	| "B"
	| "BASE"
	| "BDI"
	| "BDO"
	| "BLOCKQUOTE"
	| "BODY"
	| "BR"
	| "BUTTON"
	| "CANVAS"
	| "CAPTION"
	| "CITE"
	| "CODE"
	| "COL"
	| "COLGROUP"
	| "DATA"
	| "DATALIST"
	| "DD"
	| "DEL"
	| "DETAILS"
	| "DFN"
	| "DIALOG"
	| "DIV"
	| "DL"
	| "DT"
	| "EM"
	| "EMBED"
	| "FIELDSET"
	| "FIGCAPTION"
	| "FIGURE"
	| "FOOTER"
	| "FORM"
	| "H1"
	| "H2"
	| "H3"
	| "H4"
	| "H5"
	| "H6"
	| "HEAD"
	| "HEADER"
	| "HGROUP"
	| "HR"
	| "HTML"
	| "I"
	| "IFRAME"
	| "IMG"
	| "INPUT"
	| "INS"
	| "KBD"
	| "LABEL"
	| "LEGEND"
	| "LI"
	| "LINK"
	| "MAIN"
	| "MAP"
	| "MARK"
	| "MENU"
	| "META"
	| "METER"
	| "NAV"
	| "NOSCRIPT"
	| "OBJECT"
	| "OL"
	| "OPTGROUP"
	| "OPTION"
	| "OUTPUT"
	| "P"
	| "PICTURE"
	| "PRE"
	| "PROGRESS"
	| "Q"
	| "RP"
	| "RT"
	| "RUBY"
	| "S"
	| "SAMP"
	| "SCRIPT"
	| "SEARCH"
	| "SECTION"
	| "SELECT"
	| "SLOT"
	| "SMALL"
	| "SOURCE"
	| "SPAN"
	| "STRONG"
	| "STYLE"
	| "SUB"
	| "SUMMARY"
	| "SUP"
	| "TABLE"
	| "TBODY"
	| "TD"
	| "TEMPLATE"
	| "TEXTAREA"
	| "TFOOT"
	| "TH"
	| "THEAD"
	| "TIME"
	| "TITLE"
	| "TR"
	| "TRACK"
	| "U"
	| "UL"
	| "VAR"
	| "VIDEO"
	| "WBR"

export type SbTranslate = "" | "no" | "yes"
