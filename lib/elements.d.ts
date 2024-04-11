type Autocapitalize =
	| "characters"
	| "none"
	| "off"
	| "on"
	| "sentences"
	| "words"

type Autocomplete = "off" | "on" | string

type ColorScheme = "normal" | "light" | "dark" | "only light" | string

type CrossOrigin = "anonymous" | "use-credentials" | ""

type Fetchpriority = "auto" | "high" | "low"

type Formenctype = "application/x-www-form-urlencoded" | "multipart/form-data"

type Formmethod = "dialog" | "get" | "post"

type Formtarget = "_blank" | "_parent" | "_self" | "_top"

type HttpEquiv =
	| "content-security-policy"
	| "content-type"
	| "default-style"
	| "x-ua-compatible"
	| "refresh"

type MetaName =
	| "author"
	| "creator"
	| "description"
	| "generator"
	| "keywords"
	| "publisher"
	| "referrer"
	| "robots"
	| "theme-color"
	| "color-scheme"
	| "viewport"

type ModAttributes = {
	cite?: string
	datetime?: string
	role?: AriaRole
}

type RobotsContent =
	| "all"
	| "follow"
	| "index"
	| "noarchive"
	| "nocache"
	| "nofollow"
	| "noimageindex"
	| "noindex"
	| "none"
	| "nosnippet"

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
				crossorigin?: CrossOrigin
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
		formenctype?: Formenctype
		formmethod?: Formmethod
		formnovalidate?: boolean
		formtarget?: Formtarget
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
		| Exclude<
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

// SEE https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
interface ButtonInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		popovertarget?: string
		popovertargetaction?: "hide" | "show" | "toggle"
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
		autocapitalize?: Autocapitalize
		checked?: boolean
		list?: string
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
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
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
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		list?: string
		max?: string
		min?: string
		readonly?: boolean
		step?: string
		readonly type: "date"
		value?: string
	}
}

interface DateTimeLocalInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		list?: string
		max?: string
		min?: string
		readonly?: boolean
		step?: string
		readonly type: "datetime-local"
		value?: string
	}
}

// transparent content
interface DeleteElement extends SBElement {
	attributes?: GlobalAttributes & ModAttributes
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
		autocomplete?: Autocomplete
		dirname?: string
		list?: string
		maxlength?: number | string
		minlength?: number | string
		multiple?: boolean
		pattern?: string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		size?: number | string
		readonly type: "email"
		value?: string
	}
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
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		capture?: string
		list?: string
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
		"enctype"?: Formenctype
		"method"?: Formmethod
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
	attributes?:
		| (InputElement["attributes"] & {
				autocapitalize?: Autocapitalize
				autocomplete?: Autocomplete
				autofocus?: never
				dirname?: string
				readonly type: "hidden"
				value: string
		  } & { name: "_charset_"; value: never })
		| { name: string; value: string }
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
		crossorigin?: CrossOrigin
		decoding?: "async" | "auto" | "sync"
		elementtiming?: string
		fetchpriority?: Fetchpriority
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
		alt: string
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		formaction?: string
		formenctype?: Formenctype
		formmethod?: Formmethod
		formnovalidate?: boolean
		formtarget?: Formtarget
		height?: number | string
		list?: string
		readonly?: boolean
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
		autofocus?: boolean
		disabled?: boolean
		form?: string
		name: string
		type: InputElementTypes
	}
	children?: Array<TextNode>
	readonly tagName: "INPUT"
}

interface InsertElement extends SBElement {
	attributes?: GlobalAttributes & ModAttributes
	children?: Array<TextNode | FlowContent>
	readonly tagName: "INS"
}

interface KeyboardElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "KBD"
}

interface LabelElement extends SBElement {
	attributes?: GlobalAttributes & {
		for: string
	}
	children?: Array<TextNode | Exclude<PhrasingContent, { tagName: "LABEL" }>>
	readonly tagName: "LABEL"
}

interface LegendElement extends SBElement {
	attributes?: HTMLLegendElement
	children?: Array<TextNode | PhrasingContent | HeadingElements>
	readonly tagName: "LEGEND"
}

interface ListItemElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<
			AriaRole,
			| "menuitem"
			| "menuitemcheckbox"
			| "menuitemradio"
			| "option"
			| "none"
			| "presentation"
			| "radio"
			| "separator"
			| "tab"
			| "treeitem"
		>
		value?: number | string
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "LI"
}

interface LinkElement extends SBElement {
	attributes?:
		| (GlobalAttributes & {
				crossorigin?: CrossOrigin
				fetchpriority?: Fetchpriority
				href: string
				hreflang?: string
				integrity?: string
				media?: string
				referrerpolicy?: Omit<
					ReferrerPolicy,
					"same-origin" | "strict-origin" | "strict-origin-when-cross-origin"
				>
				sizes?: string
				title?: string
		  } & {
				as: "image"
				imagesizes?: string
				imagesrcset?: string
				rel: "preload"
				type?: string
		  })
		| {
				as: string
				rel: "modulepreload" | "preload"
				type?: string
		  }
		| {
				as: never
				rel?:
					| "alternate"
					| "author"
					| "canonical"
					| "dns-prefetch"
					| "help"
					| "icon"
					| "license"
					| "manifest"
					| "me"
					| "next"
					| "pingback"
					| "preconnect"
					| "prefetch"
					| "prerender"
					| "prev"
					| "privacy-policy"
					| "search"
					| "stylesheet"
					| "terms-of-service"
		  }
	children?: Array<TextNode>
	readonly tagName: "LINK"
}

interface MainElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode | FlowContent>
	readonly tagName: "MAIN"
}

// transparent content
interface MapElement extends SBElement {
	attributes?: GlobalAttributes & {
		name: string
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "MAP"
}

interface MarkElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "MARK"
}

// interface MediaElement extends SBElement {
// 	attributes?: HTMLMediaElement
// 	children?: Array<TextNode>
// 	readonly tagName: "MEDIA"
// }

interface MenuElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<
			AriaRole,
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
	children?: Array<ListItemElement | ScriptElement | TemplateElement>
	readonly tagName: "MENU"
}

interface MetaElement extends SBElement {
	attributes?:
		| (GlobalAttributes & {
				charset: "utf-8"
		  })
		| {
				"http-equiv"?: HttpEquiv
				"content": string
		  }
		| {
				name: Pick<MetaName, "color-scheme">
				content: ColorScheme
		  }
		| {
				name: Pick<MetaName, "referrer">
				content: ReferrerPolicy
		  }
		| {
				name: Pick<MetaName, "robots">
				content: RobotsContent
		  }
		| {
				name: Omit<MetaName, "color-scheme" | "referrer" | "robots">
				content: string
		  }
	readonly tagName: "META"
}

interface MeterElement extends SBElement {
	attributes?: GlobalAttributes & {
		form?: string
		high?: number | string
		low?: number | string
		max?: number | string
		min?: number | string
		optimum: number | string
	}
	children?: Array<TextNode | Exclude<PhrasingContent, { tagName: "METER" }>>
	readonly tagName: "METER"
}

interface MonthInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
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
	children?: Array<TextNode | FlowContent>
	readonly tagName: "NAV"
}

interface NoscriptElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<
		| TextNode
		| LinkElement
		| StyleElement
		| MetaElement
		| Exclude<FlowContent, { tagName: "NOSCRIPT" }>
	>
	readonly tagName: "NOSCRIPT"
}

interface NumberInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		list?: string
		max: number | string
		min: number | string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		step?: number | string
		readonly type: "number"
		value?: string
	}
}

// transparent content
// TODO: do we need this?
interface ObjectElement extends SBElement {
	attributes?: GlobalAttributes & {
		data: string
		form?: string
		height?: number | string
		name?: string
		role?: Pick<AriaRole, "application" | "document" | "img">
		type: string
		width?: number | string
	}
	children?: Array<FlowContent>
	readonly tagName: "OBJECT"
}

interface OrderedListElement extends SBElement {
	attributes?: GlobalAttributes & {
		reversed?: boolean
		role?: Pick<
			AriaRole,
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
		start?: number | string
		type?: "a" | "A" | "i" | "I" | "1" | 1
	}
	children?: Array<ListItemElement | ScriptElement | TemplateElement>
	readonly tagName: "OL"
}

interface OptionGroupElement extends SBElement {
	attributes?: GlobalAttributes & {
		disabled?: boolean
		label: string
	}
	children?: Array<OptionElement>
	readonly tagName: "OPTGROUP"
}

interface OptionElement extends SBElement {
	attributes?: GlobalAttributes & {
		disabled?: boolean
		label?: string
		selected?: boolean | string
		value?: number | string
	}
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
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "OUTPUT"
}

interface ParagraphElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "P"
}

interface PasswordInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: Autocomplete
		maxlength?: number | string
		minlength?: number | string
		multiple?: boolean
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
	attributes?: GlobalAttributes
	children?: [Array<SourceElement>, ImageElement]
	readonly tagName: "PICTURE"
}

interface PreformattedTextElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "PRE"
}

interface ProgressElement extends SBElement {
	attributes?: GlobalAttributes & {
		max?: number | string
		value?: number | string
	}
	children?: Array<TextNode | Exclued<PhrasingContent, { tagName: "PROGRESS" }>>
	readonly tagName: "PROGRESS"
}

interface QuoteElement extends SBElement {
	attributes?: GlobalAttributes & {
		cite?: string
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "Q"
}

interface RadioInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		checked?: boolean
		required?: boolean
		readonly type: "radio"
		value: string
	}
}

interface RangeInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		list?: string
		max?: number | string
		min?: number | string
		step?: number | string
		readonly type: "range"
		value?: string
	}
}

interface ResetInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		readonly type: "reset"
		value?: string
	}
}

interface RubyFallbackParenthesisElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode>
	readonly tagName: "RP"
}

interface RubyTextElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "RT"
}

interface RubyElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "RUBY"
}

interface SampleElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "SAMP"
}

interface ScriptElement extends SBElement {
	attributes?: GlobalAttributes & {
		async?: boolean
		crossorigin?: CrossOrigin
		defer?: boolean
		fetchpriority?: Fetchpriority
		integrity?: string
		nomodule?: boolean
		nonce?: string
		referrerpolicy?: ReferrerPolicy
		src: string
		type?: "importmap" | "module" | string
	}
	children?: Array<TextNode>
	readonly tagName: "SCRIPT"
}

interface SearchElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<
			AriaRole,
			"form" | "group" | "none" | "presentation" | "region" | "search"
		>
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "SEARCH"
}

interface SearchInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		dirname?: string
		list?: string
		maxlength?: number | string
		minlength?: number | string
		pattern?: string
		placeholder?: string
		size?: number | string
		readonly type: "search"
		value?: string
	}
	children?: Array<TextNode>
	readonly tagName: "SEARCH"
}

interface SectionElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<
			AriaRole,
			| "alert"
			| "alertdialog"
			| "application"
			| "banner"
			| "complementary"
			| "contentinfo"
			| "dialog"
			| "document"
			| "feed"
			| "log"
			| "main"
			| "marquee"
			| "navigation"
			| "none"
			| "note"
			| "presentation"
			| "search"
			| "status"
			| "tabpanel"
		>
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "SECTION"
}

interface SelectElement extends SBElement {
	attributes?: GlobalAttributes & {
		autocomplete?: Autocomplete
		autofocus?: boolean
		disabled?: boolean
		form?: string
		multiple?: boolean
		required?: boolean
		role?: Pick<AriaRole, "menu">
		size?: number | string
	}
	children?: Array<OptionElement | OptionGroupElement | HorizontalRuleElement>
	readonly tagName: "SELECT"
}

// transparent content
interface SlotElement extends SBElement {
	attributes?: GlobalAttributes & {
		name?: string
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "SLOT"
}

interface SmallElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "SMALL"
}

interface SourceElement extends SBElement {
	attributes?: GlobalAttributes & {
		height?: number | string
		media?: string
		sizes?: string
		src?: string
		srcset?: string
		type?: string
	}
	readonly tagName: "SOURCE"
}

interface SpanElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "SPAN"
}

// interface StrikethroughElement extends SBElement {
// 	attributes?: GlobalAttributes
// 	children?: Array<TextNode>
// 	readonly tagName: "S"
// }

interface StrongEmphasisElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "STRONG"
}

interface StyleElement extends SBElement {
	attributes?: HTMLStyleElement
	children?: Array<TextNode>
	readonly tagName: "STYLE"
}

interface SubmitInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		formaction?: string
		formenctype?: Formenctype
		formmethod?: Formmethod
		formnovalidate?: boolean
		formtarget?: Formtarget
		readonly type: "submit"
		value?: string
	}
}

interface SubscriptElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "SUB"
}

interface SummaryElement extends SBElement {
	attributes?: GlobalAttributes
	children?:
		| [HeadingElements, Array<TextNode | PhrasingContent>]
		| Array<TextNode | PhrasingContent>
	readonly tagName: "SUMMARY"
}

interface SuperscriptElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "SUP"
}

// TODO: complex children
interface TableElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<
		| TextNode
		| CaptionElement
		| ColumnGroupElement
		| TableHeadElement
		| TableBodyElement
		| TableRowElement
		| TableFooterElement
	>
	readonly tagName: "TABLE"
}

interface TableBodyElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TableRowElement>
	readonly tagName: "TBODY"
}

interface TableDataCellElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "TD"
}

interface TableFooterElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TableRowElement>
	readonly tagName: "TFOOT"
}

// TODO: complicated children
interface TableHeaderCellElement extends SBElement {
	attributes?: GlobalAttributes & {
		abbr?: string
		colspan?: number | string
		headers?: string
		role?: AriaRole
		rowspan?: number | string
		scope?: "col" | "colgroup" | "row" | "rowgroup"
	}
	children?: Array<TextNode | FlowContent>
	readonly tagName: "TH"
}

interface TableHeadElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TableRowElement>
	readonly tagName: "THEAD"
}

interface TableRowElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TableDataCellElement | TableHeaderCellElement>
	readonly tagName: "TR"
}

interface TemplateElement extends SBElement {
	attributes?: GlobalAttributes & {
		shadowrootmode?: "closed" | "open"
	}
	children?: Array<TextNode>
	readonly tagName: "TEMPLATE"
}

interface TelInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		dirname?: string
		list?: string
		maxlength?: number | string
		minlength?: number | string
		pattern?: string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		size?: number | string
		readonly type: "tel"
		value?: string
	}
}

interface TextareaElement extends SBElement {
	attributes?: GlobalAttributes & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		autofocus?: boolean
		cols?: number | string
		dirname?: string
		disabled?: boolean
		form?: string
		maxlength?: number | string
		minlength?: number | string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		rows?: number | string
		spellcheck?: "default" | "false" | "true"
		wrap: "off" | "hard" | "soft"
	}
	children?: Array<TextNode>
	readonly tagName: "TEXTAREA"
}

interface TextInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		dirname?: string
		list?: string
		maxlength?: number | string
		minlength?: number | string
		pattern?: string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		size?: number | string
		readonly type: "text"
		value?: string
	}
}

interface TimeElement extends SBElement {
	attributes?: GlobalAttributes & {
		datetime: string
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "TIME"
}

interface TimeInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		list?: string
		max?: string
		min?: string
		readonly?: boolean
		required?: boolean
		step?: string
		readonly type: "time"
		value?: string
	}
}

interface TitleElement extends SBElement {
	attributes?: GlobalAttributes
	children?: Array<TextNode>
	readonly tagName: "TITLE"
}

interface TrackElement extends SBElement {
	attributes?:
		| (GlobalAttributes & {
				default?: boolean
				label: string
				src: string
		  } & {
				kind?: "subtitles"
				srclang: string
		  })
		| {
				kind?: "captions" | "chapters" | "descriptions" | "metadata"
				srclang?: string
		  }
	children?: Array<TextNode>
	readonly tagName: "TRACK"
}

// interface UnderlineElement extends SBElement {
// 	attributes?: GlobalAttributes
// 	children?: Array<TextNode>
// 	readonly tagName: "U"
// }

interface UnorderedListElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: Pick<
			AriaRole,
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
	children?: Array<ListItemElement | ScriptElement | TemplateElement>
	readonly tagName: "UL"
}

interface UrlInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocomplete?: Autocomplete
		dirname?: string
		list?: string
		maxlength?: number | string
		minlength?: number | string
		pattern?: string
		placeholder?: string
		readonly?: boolean
		required?: boolean
		size?: number | string
		readonly type: "url"
		value?: string
	}
}

interface VariableElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	children?: Array<TextNode | PhrasingContent>
	readonly tagName: "VAR"
}

// interface UnknownElement extends SBElement {
// 	attributes?: HTMLUnknownElement
// 	children?: Array<TextNode>
// 	readonly tagName: string
// }

// TODO: complex children
interface VideoElement extends SBElement {
	attributes?: GlobalAttributes & {
		autoplay?: boolean
		controls?: boolean
		controlslist?: string
		crossorigin?: CrossOrigin
		disablepictureinpicture?: boolean
		disableremoteplayback?: boolean
		height?: number | string
		loop?: boolean
		muted?: boolean
		playsinline?: boolean
		poster?: string
		preload?: "auto" | "metadata" | "none" | ""
		role?: Pick<AriaRole, "application">
		src: string
		width?: number | string
	}
	children?: Array<TrackElement | SourceElement>
	readonly tagName: "VIDEO"
}

interface WeekInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		list?: string
		max?: string
		min?: string
		readonly?: boolean
		required?: boolean
		step?: string
		readonly type: "week"
		value?: string
	}
}

interface WordBreakOpportunityElement extends SBElement {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "WBR"
}

type HeadingElements =
	| Heading1Element
	| Heading2Element
	| Heading3Element
	| Heading4Element
	| Heading5Element
	| Heading6Element

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
