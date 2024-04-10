interface AnchorElement extends SBElement {
	attributes?: GlobalAttributes & {
		download?: string
		href: string
		hreflang?: string
		ping?: string
		referrerpolicy?: ReferrerPolicy
		rel?:
			| "alternate"
			| "author"
			| "bookmark"
			| "external"
			| "help"
			| "license"
			| "me"
			| "next"
			| "nofollow"
			| "noopener"
			| "noreferrer"
			| "opener"
			| "prev"
			| "privacy-policy"
			| "search"
			| "tag"
			| "terms-of-service"
		role?:
			| "button"
			| "checkbox"
			| "menuitem"
			| "menuitemcheckbox"
			| "option"
			| "radio"
			| "switch"
			| "tab"
			| "treeitem"
		target?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop"
		type?: string
	}
	children?: Array<TextNode | FlowContentNoInteractive>
	publishes?: {
		[
			key:
				| DragAndDropEvent
				| FocusEvent
				| HTMLEvent
				| KeyboardEvent
				| MouseEvent
				| PointerEvent
				| PopoverEvent
				| TouchEvent
				| TransitionEvent
		]: unknown
	}
	readonly tagName: "A"
}

interface AbbreviationElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
		title: string
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "ABBR"
}

interface AddressElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<
		| TextNode
		| Exclude<
				FlowContent,
				| { tagName: "ADDRESS" }
				| { tagName: "ARTICLE" }
				| { tagName: "ASIDE" }
				| { tagName: "FOOTER" }
				| { tagName: "HEADER" }
				| { tagName: "H1" }
				| { tagName: "H2" }
				| { tagName: "H3" }
				| { tagName: "H4" }
				| { tagName: "H5" }
				| { tagName: "H6" }
				| { tagName: "HGROUP" }
				| { tagName: "NAV" }
				| { tagName: "SECTION" }
		  >
	>
	readonly tagName: "ADDRESS"
}

interface AreaElement extends SBElement {
	attributes?:
		| (GlobalAttributes & {
				alt: string
				coords: string
				download?: string
				href?: string
				ping?: string
				referrerpolicy?:
					| "no-referrer"
					| "no-referrer-when-downgrade"
					| "origin"
					| "origin-when-cross-origin"
					| "same-origin"
					| "strict-origin"
					| "strict-origin-when-cross-origin"
					| "unsafe-url"
				rel?:
					| "alternate"
					| "author"
					| "bookmark"
					| "external"
					| "help"
					| "license"
					| "me"
					| "next"
					| "nofollow"
					| "noopener"
					| "noreferrer"
					| "opener"
					| "prev"
					| "privacy-policy"
					| "search"
					| "tag"
					| "terms-of-service"
				shape: "default" | "circle" | "poly" | "rect"
				target?: "_blank" | "_parent" | "_self" | "_top"
		  })
		| undefined
	readonly tagName: "AREA"
}

interface ArticleElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?:
			| "application"
			| "document"
			| "feed"
			| "main"
			| "none"
			| "presentation"
			| "region"
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "ARTICLE"
}

interface AsideElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: "feed" | "none" | "note" | "presentation" | "region" | "search"
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "ASIDE"
}

interface AudioElement extends SBElement {
	attributes?:
		| (GlobalAttributes & {
				autoplay?: boolean
				controls?: boolean
				controlslist?:
					| "nodownload"
					| "nofullscreen"
					| "noremoteplayback"
					| undefined
				crossorigin?: "anonymous" | "use-credentials"
				disableremoteplayback?: boolean
				loop?: boolean
				muted?: boolean
				preload?: "" | "auto" | "metadata" | "none"
				role?: Pick<AriaRole, "application">
				src: string
		  })
		| undefined
	children?: Array<TrackElement | SourceElement | FlowContent>
	readonly tagName: "AUDIO"
}

// interface BoldElement extends SBElement {
// 	attributes?: GlobalAttributes
// 	children?: Array<TextNode>
// 	readonly tagName: "B"
// }

interface BaseElement extends SBElement {
	attributes?:
		| (GlobalAttributes & {
				href: string
				target?: "_blank" | "_parent" | "_self" | "_top"
		  })
		| undefined
	readonly tagName: "BASE"
}

interface BidirectionalIsolateElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "BDI"
}

interface BidirectionalTextOverrideElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "BDO"
}

interface BlockquoteElement extends SBElement {
	attributes?: GlobalAttributes & {
		cite?: string
		role?: AriaRole
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "BLOCKQUOTE"
}

interface BodyElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode | FlowContent>
	readonly tagName: "BODY"
}

interface BreakElement extends SBElement {
	attributes?: GlobalAttributes
	readonly tagName: "BR"
}

interface ButtonElement extends SBElement {
	attributes?: GlobalAttributes & {
		autofocus?: boolean
		disabled?: boolean
		form?: string
		formaction?: string
		formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data"
		formmethod?: "dialog" | "get" | "post"
		formnovalidate?: boolean
		formtarget?: "_blank" | "_parent" | "_self" | "_top"
		name?: string
		popovertarget?: string
		popovertargetaction?: "hide" | "show" | "toggle"
		role?:
			| "checkbox"
			| "combobox"
			| "link"
			| "menuitem"
			| "menuitemcheckbox"
			| "menuitemradio"
			| "option"
			| "radio"
			| "switch"
			| "tab"
		type?: "button" | "reset" | "submit"
		value?: string
	}
	children?: Array<
		| TextNode
		| Omit<
				PhrasingContent,
				| { tagName: "A" }
				| { tagName: "BUTTON" }
				| { tagName: "DETAILS" }
				| { tagName: "EMBED" }
				| { tagName: "IFRAME" }
				| { tagName: "LABEL" }
				| { tagName: "SELECT" }
				| { tagName: "TEXTAREA" }
		  >
	>
	readonly tagName: "BUTTON"
}

interface ButtonInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		readonly type: "button"
		value?: "string"
	}
}

// Needs transparent element children
interface CanvasElement extends SBElement {
	attributes?: GlobalAttributes & {
		height?: number | string
		role?: AriaRole
		width?: number | string
	}
	children?: Array<
		| AnchorElement
		| TextNode
		| ButtonElement
		| ButtonInputElement
		| CheckboxInputElement
		| RadioInputElement
	>
	readonly tagName: "CANVAS"
}

interface CaptionElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode | FlowContent>
	readonly tagName: "CAPTION"
}

interface CheckboxInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		checked?: boolean
		readonly type: "checkbox"
		value?: string
	}
}

interface CiteElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "CITE"
}

interface CodeElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "CODE"
}

interface ColorInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		list?: string
		readonly type: "color"
		value?: string
	}
}

interface ColumnElement extends SBElement {
	attributes?: GlobalAttributes & {
		span?: number | string
	}
	readonly tagName: "COL"
}

interface ColumnGroupElement extends SBElement {
	attributes?: GlobalAttributes & {
		span?: number | string
	}
	readonly tagName: "COLGROUP"
}

interface DataElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
		value: string
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "DATA"
}

interface DatalistElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode | PhrasingContent | OptionElement>
	readonly tagName: "DATALIST"
}

interface DateInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		list?: string
		readonly?: boolean
		readonly type: "date"
		step?: number | string
	}
}

interface DateTimeLocalInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		list?: string
		name: string
		readonly?: boolean
		required?: boolean
		readonly type: "datetime-local"
		step?: number | string
	}
}

// transparent content
interface DeleteElement extends SBElement {
	attributes?: GlobalAttributes & {
		cite?: string
		datetime?: string
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "DEL"
}

interface DetailsElement extends SBElement {
	attributes?: GlobalAttributes & {
		name?: string
		open?: boolean
	}
	children?: Array<TextNode | SummaryElement | FlowContent>
	readonly tagName: "DETAILS"
}

interface DefinitionElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | Exclude<PhrasingContent, { tagName: "DFN" }>>
	readonly tagName: "DFN"
}

interface DialogElement extends SBElement {
	attributes?: GlobalAttributes & {
		open?: boolean
		role?: Pick<AriaRole, "alertdialog">
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "DIALOG"
}

interface DivisionElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "DIV"
}

interface DescriptionDetailsElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode | FlowContent>
	readonly tagName: "DD"
}

interface DescriptionListElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "group" | "list" | "none" | "presentation">
	}
	children?: Array<
		| DescriptionDetailsElement
		| DescriptionTermElement
		| ScriptElement
		| TemplateElement
	>
	readonly tagName: "DL"
}

// exclude header descendants
interface DescriptionTermElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "listitem">
	}
	children?: Array<
		| TextNode
		| Exclude<
				FlowContent,
				| { tagName: "FOOTER" }
				| { tagName: "HEADER" }
				| { tagName: "ARTICLE" }
				| { tagName: "ASIDE" }
				| { tagName: "NAV" }
				| { tagName: "SECTION" }
		  >
	>
	readonly tagName: "DT"
}

interface EmailInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		list?: string
		maxlength?: number | string
		minlength?: number | string
		multiple?: boolean
		name: string
		pattern?: string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		size?: number | string
		readonly type: "email"
		value?: string
	}
	readonly tagName: "INPUT"
}

interface EmbedElement extends SBElement {
	attributes?: GlobalAttributes & {
		height?: number | string
		role?: Omit<
			AriaRole,
			"application" | "document" | "img" | "none" | "presentation"
		>
		src?: string
		type?: string
		width?: number | string
	}
	readonly tagName: "EMBED"
}

interface EmphasisElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "EM"
}

interface FieldsetElement extends SBElement {
	attributes?: GlobalAttributes & {
		disabled?: boolean
		form?: string
		name?: string
		role?: Pick<AriaRole, "group" | "radiogroup" | "presentation" | "none">
	}
	children?: Array<TextNode | LegendElement | FlowContent>
	readonly tagName: "FIELDSET"
}

interface FigcaptionElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "group" | "none" | "presentation">
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "FIGCAPTION"
}

// interface FormControlsCollection extends SBElement {
// 	attributes?: HTMLFormControlsCollection
// 	children?: Array<TextNode>
// 	readonly tagName: "FORM"
// }

interface FigureElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "group" | "none" | "presentation">
	}
	children?: Array<TextNode | FigcaptionElement | FlowContent>
	readonly tagName: "FIGURE"
}

interface FileInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		accept?: string
		capture?: string
		multiple?: boolean
		readonly type: "file"
		value?: string
	}
}

interface FooterElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "contentinfo" | "group" | "presentation" | "none">
	}
	children?: Array<
		| TextNode
		| Exclude<FlowContent, { tagName: "HEADER" } | { tagName: "FOOTER" }>
	>
	readonly tagName: "FOOTER"
}

interface FormElement extends SBElement {
	attributes?: GlobalAttributes & {
		"accept-charset": string
		"action": string
		"autocomplete"?: "off" | "on"
		"enctype"?: "application/x-www-form-urlencoded" | "multipart/form-data"
		"method"?: "dialog" | "get" | "post"
		"name"?: string
		"novalidate"?: boolean
		"rel"?:
			| "external"
			| "help"
			| "license"
			| "next"
			| "nofollow"
			| "noopener"
			| "noreferrer"
			| "opener"
			| "prev"
			| "search"
		"role"?: Pick<AriaRole, "form" | "search" | "none" | "presentation">
		"target"?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop"
	}
	children?: Array<TextNode | Exclude<FlowContent, { tagName: "FORM" }>>
	readonly tagName: "FORM"
}

interface Heading1Element extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "heading" | "tab" | "presentation" | "none">
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "H1"
}

interface Heading2Element extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "heading" | "tab" | "presentation" | "none">
	}
	children?: Array<TextNode | PhrasingContent>
	children?: Array<TextNode>
	readonly tagName: "H2"
}

interface Heading3Element extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "heading" | "tab" | "presentation" | "none">
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "H3"
}

interface Heading4Element extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "heading" | "tab" | "presentation" | "none">
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "H4"
}

interface Heading5Element extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "heading" | "tab" | "presentation" | "none">
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "H5"
}

interface Heading6Element extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "heading" | "tab" | "presentation" | "none">
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "H6"
}

interface HeadElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode | MetadataContent>
	readonly tagName: "HEAD"
}

interface HeaderElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "banner" | "group" | "presentation" | "none">
	}
	children?: Array<
		| TextNode
		| Exclude<FlowContent, { tagName: "HEADER" } | { tagName: "FOOTER" }>
	>
	readonly tagName: "HEADER"
}

interface HeadingGroupElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<
		| TextNode
		| ParagraphElement
		| Heading1Element
		| Heading2Element
		| Heading3Element
		| Heading4Element
		| Heading5Element
		| Heading6Element
	>
	readonly tagName: "HGROUP"
}

interface HiddenInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		name: string
		readonly type: "hidden"
		value: string
	}
}

interface HorizontalRuleElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<AriaRole, "separator" | "presentation" | "none">
	}
	readonly tagName: "HR"
}

interface HtmlElement extends SBElement {
	attributes?: GlobalAttributes & {
		xmlns?: string
	}
	children?: [HeadElement | BodyElement]
	readonly tagName: "HTML"
}

// interface ItalicsElement extends SBElement {
// 	attributes?: GlobalAttributes
// 	children?: Array<TextNode>
// 	readonly tagName: "I"
// }

interface IframeElement extends SBElement {
	attributes?: GlobalAttributes & {
		allow?: string
		height?: number | string
		loading?: "eager" | "lazy"
		name?: string
		referrerpolicy?: ReferrerPolicy
		role?: Pick<
			AriaRole,
			"application" | "document" | "img" | "none" | "presentation"
		>
		sandbox?:
			| "allow-downloads"
			| "allow-downloads-without-user-activation"
			| "allow-forms"
			| "allow-modals"
			| "allow-orientation-lock"
			| "allow-pointer-lock"
			| "allow-popups"
			| "allow-popups-to-escape-sandbox"
			| "allow-presentation"
			| "allow-same-origin"
			| "allow-scripts"
			| "allow-storage-access-by-user-activation"
			| "allow-top-navigation"
			| "allow-top-navigation-by-user-activation"
			| "allow-top-navigation-to-custom-protocols"
		src?: string
		srcdoc?: string
		width?: number | string
	}
	readonly tagName: "IFRAME"
}

interface ImageElement extends SBElement {
	attributes?: GlobalAttributes & {
		alt: string
		crossorigin?: "anonymous" | "use-credentials"
		decoding?: "async" | "auto" | "sync"
		elementtiming?: string
		fetchpriority?: "auto" | "high" | "low"
		height?: number | string
		ismap?: boolean
		loading?: "eager" | "lazy"
		referrerpolicy?: ReferrerPolicy
		role?: Pick<
			AriaRole,
			| "button"
			| "checkbox"
			| "link"
			| "menuitem"
			| "menuitemcheckbox"
			| "menuitemradio"
			| "none"
			| "option"
			| "presentation"
			| "progressbar"
			| "scrollbar"
			| "separator"
			| "slider"
			| "switch"
			| "tab"
			| "treeitem"
		>
		sizes?: string
		src: string
		srcset?: string
		width?: number | string
		usemap?: string
	}
	children?: never
	readonly tagName: "IMG"
}

interface ImageInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		alt?: string
		formaction?: string
		formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data"
		formmethod?: "dialog" | "get" | "post"
		formnovalidate?: boolean
		formtarget?: "_blank" | "_parent" | "_self" | "_top"
		list?: string
		height?: number | string
		name: string
		src: string
		readonly type: "image"
		width?: number | string
	}
}

type InputElementTypes =
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

interface InputElement extends SBElement {
	attributes?: GlobalAttributes & {
		type: InputElementTypes
	}
	children?: Array<TextNode>
	readonly tagName: "FOOTER"
}

interface InsertElement extends SBElement {
	attributes?: HTMLModElement
	children?: Array<TextNode>
	readonly tagName: "INS"
}

interface KeyboardElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "KBD"
}

interface LabelElement extends SBElement {
	attributes?: HTMLLabelElement
	children?: Array<TextNode>
	readonly tagName: "LABEL"
}

interface LegendElement extends SBElement {
	attributes?: HTMLLegendElement
	children?: Array<TextNode>
	readonly tagName: "LEGEND"
}

interface ListItemElement extends SBElement {
	attributes?: HTMLLItalicsElement
	children?: Array<TextNode>
	readonly tagName: "LI"
}

interface LinkElement extends SBElement {
	attributes?: HTMLLinkElement
	children?: Array<TextNode>
	readonly tagName: "LINK"
}

interface MainElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "MAIN"
}

interface MapElement extends SBElement {
	attributes?: HTMLMapElement
	children?: Array<TextNode>
	readonly tagName: "MAP"
}

interface MarkElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "MARK"
}

// interface MediaElement extends SBElement {
// 	attributes?: HTMLMediaElement
// 	children?: Array<TextNode>
// 	readonly tagName: "MEDIA"
// }

interface MenuElement extends SBElement {
	attributes?: HTMLMenuElement
	children?: Array<TextNode>
	readonly tagName: "MENU"
}

interface MetaElement extends SBElement {
	attributes?: HTMLMetaElement
	children?: Array<TextNode>
	readonly tagName: "META"
}

interface MeterElement extends SBElement {
	attributes?: HTMLMeterElement
	children?: Array<TextNode>
	readonly tagName: "METER"
}

interface MonthInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		list?: string
		max?: number | string
		min?: number | string
		readonly?: boolean
		required?: boolean
		step?: number | string
		readonly type: "month"
		value?: string
	}
}

interface NavigationElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "NAV"
}

interface NoscriptElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "NOSCRIPT"
}

interface NumberInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		list?: string
		max: number | string
		min: number | string
		multiple?: boolean
		name: string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		step?: number | string
		readonly type: "number"
		value?: string
	}
}

interface ObjectElement extends SBElement {
	attributes?: HTMLObjectElement
	children?: Array<TextNode>
	readonly tagName: "OBJECT"
}

interface OrderedListElement extends SBElement {
	attributes?: HTMLOListElement
	children?: Array<TextNode>
	readonly tagName: "OL"
}

interface OptionGroupElement extends SBElement {
	attributes?: HTMLOptGroupElement
	children?: Array<TextNode>
	readonly tagName: "OPTGROUP"
}

interface OptionElement extends SBElement {
	attributes?: HTMLOptionElement
	children?: Array<TextNode>
	readonly tagName: "OPTION"
}

// interface OptionsCollection extends SBElement {
// 	attributes?: HTMLOptionsCollection
// 	children?: Array<TextNode>
// 	readonly tagName: ""
// }

interface OutputElement extends SBElement {
	attributes?: GlobalAttributes & {
		for?: string
		form?: string
		name: string
	}
	children?: Array<TextNode>
	readonly tagName: "OUTPUT"
}

interface ParagraphElement extends SBElement {
	attributes?: HTMLParagraphElement
	children?: Array<TextNode>
	readonly tagName: "P"
}

interface PasswordInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: "off" | "on" | string
		maxlength?: number | string
		minlength?: number | string
		multiple?: boolean
		name: string
		pattern?: string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		size?: number | string
		readonly type: "password"
		value?: string
	}
}

interface PictureElement extends SBElement {
	attributes?: HTMLPictureElement
	children?: Array<TextNode>
	readonly tagName: "PICTURE"
}

interface PreformattedTextElement extends SBElement {
	attributes?: HTMLPreElement
	children?: Array<TextNode>
	readonly tagName: "PRE"
}

interface ProgressElement extends SBElement {
	attributes?: HTMLProgressElement
	children?: Array<TextNode>
	readonly tagName: "PROGRESS"
}

interface QuoteElement extends SBElement {
	attributes?: HTMLQuoteElement
	children?: Array<TextNode>
	readonly tagName: "Q"
}

interface RadioInputElement extends InputElement {
	type: "radio"
}

interface RubyFallbackParenthesisElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "RP"
}

interface RubyTextElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "RT"
}

interface RubyElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "RUBY"
}

interface SampleElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SAMP"
}

interface ScriptElement extends SBElement {
	attributes?: HTMLScriptElement
	children?: Array<TextNode>
	readonly tagName: "SCRIPT"
}

interface SearchElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SEARCH"
}

interface SectionElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SECTION"
}

interface SelectElement extends SBElement {
	attributes?: HTMLSelectElement
	children?: Array<TextNode>
	readonly tagName: "SELECT"
}

interface SlotElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SLOT"
}

interface SmallElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SMALL"
}

interface SourceElement extends SBElement {
	attributes?: HTMLSourceElement
	children?: Array<TextNode>
	readonly tagName: "SOURCE"
}

interface SpanElement extends SBElement {
	attributes?: HTMLSpanElement
	children?: Array<TextNode>
	readonly tagName: "SPAN"
}

// interface StrikethroughElement extends SBElement {
// 	attributes?: GlobalAttributes
// 	children?: Array<TextNode>
// 	readonly tagName: "S"
// }

interface StrongEmphasisElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "STRONG"
}

interface StyleElement extends SBElement {
	attributes?: HTMLStyleElement
	children?: Array<TextNode>
	readonly tagName: "STYLE"
}

interface SubscriptElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SUB"
}

interface SummaryElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SUMMARY"
}

interface SuperscriptElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "SUP"
}

interface TableElement extends SBElement {
	attributes?: HTMLTableElement
	children?: Array<TextNode>
	readonly tagName: "TABLE"
}

interface TableBodyElement extends SBElement {
	attributes?: HTMLTableSectionElement
	children?: Array<TextNode>
	readonly tagName: "TBODY"
}

interface TableDataCellElement extends SBElement {
	attributes?: HTMLTableCellElement
	children?: Array<TextNode>
	readonly tagName: "TD"
}

interface TemplateElement extends SBElement {
	attributes?: HTMLTemplateElement
	children?: Array<TextNode>
	readonly tagName: "TEMPLATE"
}

interface TextareaElement extends SBElement {
	attributes?: HTMLTextAreaElement
	children?: Array<TextNode>
	readonly tagName: "TEXTAREA"
}

interface TableFooterElement extends SBElement {
	attributes?: HTMLTableSectionElement
	children?: Array<TextNode>
	readonly tagName: "TFOOT"
}

interface TableHeaderCellElement extends SBElement {
	attributes?: HTMLTableCellElement
	children?: Array<TextNode>
	readonly tagName: "TH"
}

interface TableHeadElement extends SBElement {
	attributes?: HTMLTableSectionElement
	children?: Array<TextNode>
	readonly tagName: "THEAD"
}

interface TimeElement extends SBElement {
	attributes?: HTMLTimeElement
	children?: Array<TextNode>
	readonly tagName: "TIME"
}

interface TitleElement extends SBElement {
	attributes?: HTMLTitleElement
	children?: Array<TextNode>
	readonly tagName: "TITLE"
}

interface TableRowElement extends SBElement {
	attributes?: HTMLTableRowElement
	children?: Array<TextNode>
	readonly tagName: "TR"
}

interface TrackElement extends SBElement {
	attributes?: HTMLTrackElement
	children?: Array<TextNode>
	readonly tagName: "TRACK"
}

interface UnderlineElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "U"
}

interface UnorderedListElement extends SBElement {
	attributes?: HTMLUListElement
	children?: Array<TextNode>
	readonly tagName: "UL"
}

interface VariableElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "VAR"
}

interface UnknownElement extends SBElement {
	attributes?: HTMLUnknownElement
	children?: Array<TextNode>
	readonly tagName: string
}

interface VideoElement extends SBElement {
	attributes?: HTMLVideoElement
	children?: Array<TextNode>
	readonly tagName: "VIDEO"
}

interface WordBreakOpportunityElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "WBR"
}

type MetadataContent =
	| BaseElement
	| LinkElement
	| MetaElement
	| NoscriptElement
	| ScriptElement
	| StyleElement
	| TitleElement

type FlowContentNoInteractive =
	| AbbreviationElement
	| AddressElement
	| ArticleElement
	| AsideElement
	| AudioElement
	| BidirectionalIsolateElement
	| BidirectionalTextOverrideElement
	| BlockquoteElement
	| BreakElement
	| CanvasElement
	| CiteElement
	| CodeElement
	| DataElement
	| DatalistElement
	| DeleteElement
	| DefinitionElement
	| DialogElement
	| DivisionElement
	| DescriptionListElement
	| EmphasisElement
	| FieldsetElement
	| FigureElement
	| FooterElement
	| FormElement
	| Heading1Element
	| Heading2Element
	| Heading3Element
	| Heading4Element
	| Heading5Element
	| Heading6Element
	| HeaderElement
	| HeadingGroupElement
	| HorizontalRuleElement
	| ImageElement
	| InputElement
	| InsertElement
	| KeyboardElement
	| MainElement
	| MapElement
	| MarkElement
	| MenuElement
	| MeterElement
	| NavigationElement
	| NoscriptElement
	| ObjectElement
	| OrderedListElement
	| OutputElement
	| ParagraphElement
	| PictureElement
	| PreformattedTextElement
	| ProgressElement
	| QuoteElement
	| RubyElement
	| SampleElement
	| SearchElement
	| ScriptElement
	| SectionElement
	| SlotElement
	| SmallElement
	| SpanElement
	| StrongEmphasisElement
	| SubscriptElement
	| SuperscriptElement
	| TableElement
	| TemplateElement
	| TimeElement
	| UnderlineElement
	| UnorderedListElement
	| VariableElement
	| VideoElement
	| WordBreakOpportunityElement

type FlowIfMapDescendant = AreaElement

type FlowWhenItemprop = LinkElement | MetaElement

type FlowContent = FlowContentNoInteractive | InteractiveContent

type SectioningContent =
	| ArticleElement
	| AsideElement
	| NavigationElement
	| SectionElement

type HeadingContent =
	| Heading1Element
	| Heading2Element
	| Heading3Element
	| Heading4Element
	| Heading5Element
	| Heading6Element
	| HeadingGroupElement

type PhrasingContent =
	| AbbreviationElement
	| AudioElement
	| BidirectionalIsolateElement
	| BidirectionalTextOverrideElement
	| BreakElement
	| ButtonElement
	| CanvasElement
	| CiteElement
	| CodeElement
	| DataElement
	| DatalistElement
	| DefinitionElement
	| EmphasisElement
	| EmbedElement
	| IframeElement
	| ImageElement
	| InputElement
	| KeyboardElement
	| LabelElement
	| MarkElement
	| MeterElement
	| NoscriptElement
	| ObjectElement
	| OutputElement
	| PictureElement
	| ProgressElement
	| QuoteElement
	| RubyElement
	| SampleElement
	| ScriptElement
	| SelectElement
	| SlotElement
	| SmallElement
	| SpanElement
	| StrongEmphasisElement
	| SubscriptElement
	| SuperscriptElement
	| TemplateElement
	| TextareaElement
	| TimeElement
	| UnderlineElement
	| VariableElement
	| VideoElement
	| WordBreakOpportunityElement

type EmbeddedContent =
	| AudioElement
	| CanvasElement
	| EmbedElement
	| IframeElement
	| ImageElement
	// | MathElement
	| ObjectElement
	| PictureElement
	// | SVGElement
	| VideoElement

type InteractiveContent =
	| ButtonElement
	| DetailsElement
	| EmbedElement
	| IframeElement
	| LabelElement
	| SelectElement
	| TextareaElement

type InteractiveWhenHref = AnchorElement

type InteractiveWhenControls = AudioElement | VideoElement

type InteractiveWhenUsemap = ImageElement | ObjectElement

type InteractiveWhenType = InputElement

type FormContent =
	| ButtonElement
	| FieldsetElement
	| InputElement
	| LabelElement
	| MeterElement
	| ObjectElement
	| OutputElement
	| ProgressElement
	| SelectElement
	| TextareaElement

type FormListedContent =
	| ButtonElement
	| FieldsetElement
	| InputElement
	| ObjectElement
	| OutputElement
	| SelectElement
	| TextareaElement

type FormLabelableContent =
	| ButtonElement
	| InputElement
	| MeterElement
	| OutputElement
	| ProgressElement
	| SelectElement
	| TextareaElement

type FormSubmittableContent =
	| ButtonElement
	| InputElement
	| ObjectElement
	| SelectElement
	| TextareaElement

type FormResettableContent =
	| InputElement
	| OutputElement
	| SelectElement
	| TextareaElement

type Elem = FlowContent | PhrasingContent | HeadingContent | SectioningContent
