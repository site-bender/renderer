import type { AriaRole } from "./unions"
import type {
	DragAndDropEvent,
	ElementBase,
	FocusEvent,
	GlobalAttributes,
	HTMLEvent,
	InputElementTypes,
	KeyboardEvent,
	MouseEvent,
	PointerEvent,
	PopoverEvent,
	TextNode,
	TouchEvent,
	TransitionEvent,
} from "./shared"
import type { MathMLElement } from "./math"
import type { SvgMLElement } from "./svg"

export type Autocapitalize =
	| "characters"
	| "none"
	| "off"
	| "on"
	| "sentences"
	| "words"

export type Autocomplete = "off" | "on" | string

export type ColorScheme = "normal" | "light" | "dark" | "only light" | string

export type CrossOrigin = "anonymous" | "use-credentials" | ""

export type Fetchpriority = "auto" | "high" | "low"

export type Formenctype =
	| "application/x-www-form-urlencoded"
	| "multipart/form-data"

export type Formmethod = "dialog" | "get" | "post"

export type Formtarget = "_blank" | "_parent" | "_self" | "_top"

export type HttpEquiv =
	| "content-security-policy"
	| "content-type"
	| "default-style"
	| "x-ua-compatible"
	| "refresh"

export type MetaName =
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

export type ModAttributes = {
	cite?: string
	datetime?: string
	role?: AriaRole
}

export type RenderOptions = {
	level: number
}

export type RobotsContent =
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

export interface AbbreviationElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
		title: string
	}
	readonly tagName: "ABBR"
}

export interface AddressElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AnchorElement
		| ArticleElement
		| AsideElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BlockquoteElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| DeletionElement
		| DescriptionListElement
		| DetailsElement
		| DialogElement
		| DivisionElement
		| EmbedElement
		| EmphasisElement
		| FieldsetElement
		| FigureElement
		| FlowIfMapDescendant
		| FlowIfItempropAttribute
		| FooterElement
		| FormElement
		| HeaderElement
		| Heading1Element
		| Heading2Element
		| Heading3Element
		| Heading4Element
		| Heading5Element
		| Heading6Element
		| HeadingElement
		| HeadingGroupElement
		| HorizontalRuleElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| InsertionElement
		| KeyboardElement
		| LabelElement
		| MainElement
		| MarkElement
		| MathElement
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
		| ScriptElement
		| SearchElement
		| SectionElement
		| SelectElement
		| SlotElement
		| SmallElement
		| SpanElement
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TableElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| UnorderedListElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "ADDRESS"
}

export interface AnchorElement extends ElementBase<TextNode | FlowContentAll> {
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
	publishes?: {
		[key in
			| DragAndDropEvent
			| FocusEvent
			| HTMLEvent
			| KeyboardEvent
			| MouseEvent
			| PointerEvent
			| PopoverEvent
			| TouchEvent
			| TransitionEvent]: unknown
	}
	readonly tagName: "A"
}

export interface AreaElement extends ElementBase<never> {
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

export interface ArticleElement extends ElementBase<TextNode | FlowContentAll> {
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
	readonly tagName: "ARTICLE"
}

export interface AsideElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?: "feed" | "none" | "note" | "presentation" | "region" | "search"
	}
	readonly tagName: "ASIDE"
}

export interface AudioElement
	extends ElementBase<TrackElement | SourceElement | FlowContentAll> {
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
				role?: "application"
				src: string
		  })
		| undefined
	readonly tagName: "AUDIO"
}

export interface BaseElement extends ElementBase<never> {
	attributes?:
		| (GlobalAttributes & {
				href: string
				target?: "_blank" | "_parent" | "_self" | "_top"
		  })
		| undefined
	readonly tagName: "BASE"
}

export interface BidirectionalIsolateElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "BDI"
}

export interface BidirectionalTextOverrideElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "BDO"
}

export interface BlockquoteElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		cite?: string
		role?: AriaRole
	}
	readonly tagName: "BLOCKQUOTE"
}

export interface BodyElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes
	readonly tagName: "BODY"
}

export interface BreakElement extends ElementBase<never> {
	attributes?: GlobalAttributes
	readonly tagName: "BR"
}

export interface BringAttentionElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "B"
}

export interface ButtonElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BreakElement
		| BringAttentionElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| EmbedElement
		| EmphasisElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| KeyboardElement
		| LabelElement
		| MarkElement
		| MathElement
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
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
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
	readonly tagName: "BUTTON"
}

// SEE https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
export interface ButtonInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		popovertarget?: string
		popovertargetaction?: "hide" | "show" | "toggle"
		readonly type: "button"
		value?: "string"
	}
}

// Needs transparent element children
export interface CanvasElement
	extends ElementBase<
		| AnchorElement
		| TextNode
		| ButtonElement
		| ButtonInputElement
		| CheckboxInputElement
		| RadioInputElement
	> {
	attributes?: GlobalAttributes & {
		height?: number | string
		role?: AriaRole
		width?: number | string
	}
	readonly tagName: "CANVAS"
}

export interface CaptionElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes
	readonly tagName: "CAPTION"
}

export interface CheckboxInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		checked?: boolean
		list?: string
		readonly type: "checkbox"
		value?: string
	}
}

export interface CiteElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "CITE"
}

export interface CodeElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "CODE"
}

export interface ColorInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		list?: string
		readonly type: "color"
		value?: string
	}
}

export interface ColumnElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		span?: number | string
	}
	readonly tagName: "COL"
}

export interface ColumnGroupElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		span?: number | string
	}
	readonly tagName: "COLGROUP"
}

export interface DataElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
		value: string
	}
	readonly tagName: "DATA"
}

export interface DatalistElement
	extends ElementBase<TextNode | PhrasingContent | OptionElement> {
	attributes?: GlobalAttributes
	readonly tagName: "DATALIST"
}

export interface DateInputElement extends InputElement {
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

export interface DateTimeLocalInputElement extends InputElement {
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
export interface DeletionElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & ModAttributes
	readonly tagName: "DEL"
}

export interface DetailsElement
	extends ElementBase<TextNode | FlowContentAll | SummaryElement> {
	attributes?: GlobalAttributes & {
		name?: string
		open?: boolean
	}
	readonly tagName: "DETAILS"
}

export interface DefinitionElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| EmbedElement
		| EmphasisElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| KeyboardElement
		| LabelElement
		| MarkElement
		| MathElement
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
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "DFN"
}

export interface DialogElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		open?: boolean
		role?: "alertdialog"
	}
	readonly tagName: "DIALOG"
}

export interface DivisionElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "DIV"
}

export interface DescriptionDetailsElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes
	readonly tagName: "DD"
}

export interface DescriptionListElement
	extends ElementBase<
		| DescriptionDetailsElement
		| DescriptionTermElement
		| ScriptElement
		| TemplateElement
	> {
	attributes?: GlobalAttributes & {
		role?: "group" | "list" | "none" | "presentation"
	}
	readonly tagName: "DL"
}

// TODO: exclude header descendants
export interface DescriptionTermElement
	extends ElementBase<
		| TextNode
		| Exclude<
				FlowContentAll,
				| { tagName: "FOOTER" }
				| { tagName: "HEADER" }
				| { tagName: "ARTICLE" }
				| { tagName: "ASIDE" }
				| { tagName: "NAV" }
				| { tagName: "SECTION" }
		  >
	> {
	attributes?: GlobalAttributes & {
		role?: "listitem"
	}
	readonly tagName: "DT"
}

export interface EmailInputElement extends InputElement {
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

export interface EmbedElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		height?: number | string
		role?: "application" | "document" | "img" | "none" | "presentation"
		src?: string
		type?: string
		width?: number | string
	}
	readonly tagName: "EMBED"
}

export interface EmphasisElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "EM"
}

export interface FieldsetElement
	extends ElementBase<TextNode | LegendElement | FlowContentAll> {
	attributes?: GlobalAttributes & {
		disabled?: boolean
		form?: string
		name?: string
		role?: "group" | "radiogroup" | "presentation" | "none"
	}
	readonly tagName: "FIELDSET"
}

export interface FigcaptionElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?: "group" | "none" | "presentation"
	}
	readonly tagName: "FIGCAPTION"
}
export interface FigureElement
	extends ElementBase<TextNode | FigcaptionElement | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?: "group" | "none" | "presentation"
	}
	readonly tagName: "FIGURE"
}

export interface FileInputElement extends InputElement {
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

export interface FooterElement
	extends ElementBase<
		| TextNode
		| AddressElement
		| AbbreviationElement
		| AnchorElement
		| ArticleElement
		| AsideElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BlockquoteElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| DeletionElement
		| DescriptionListElement
		| DetailsElement
		| DialogElement
		| DivisionElement
		| EmbedElement
		| EmphasisElement
		| FieldsetElement
		| FigureElement
		| FlowIfMapDescendant
		| FlowIfItempropAttribute
		| FormElement
		| Heading1Element
		| Heading2Element
		| Heading3Element
		| Heading4Element
		| Heading5Element
		| Heading6Element
		| HeadingElement
		| HeadingGroupElement
		| HorizontalRuleElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| InsertionElement
		| KeyboardElement
		| LabelElement
		| MainElement
		| MarkElement
		| MathElement
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
		| ScriptElement
		| SearchElement
		| SectionElement
		| SelectElement
		| SlotElement
		| SmallElement
		| SpanElement
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TableElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| UnorderedListElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
	attributes?: GlobalAttributes & {
		role?: "contentinfo" | "group" | "presentation" | "none"
	}
	readonly tagName: "FOOTER"
}

export interface FormElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AddressElement
		| AnchorElement
		| ArticleElement
		| AsideElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BlockquoteElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| DeletionElement
		| DescriptionListElement
		| DetailsElement
		| DialogElement
		| DivisionElement
		| EmbedElement
		| EmphasisElement
		| FieldsetElement
		| FigureElement
		| FlowIfMapDescendant
		| FlowIfItempropAttribute
		| FooterElement
		| HeaderElement
		| Heading1Element
		| Heading2Element
		| Heading3Element
		| Heading4Element
		| Heading5Element
		| Heading6Element
		| HeadingElement
		| HeadingGroupElement
		| HorizontalRuleElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| InsertionElement
		| KeyboardElement
		| LabelElement
		| MainElement
		| MarkElement
		| MathElement
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
		| ScriptElement
		| SearchElement
		| SectionElement
		| SelectElement
		| SlotElement
		| SmallElement
		| SpanElement
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TableElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| UnorderedListElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
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
		"role"?: "form" | "search" | "none" | "presentation"
		"target"?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop"
	}
	readonly tagName: "FORM"
}

export interface FragmentElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: never
	dataset?: never
	readonly tagName: "FRAGMENT"
}

export interface HeadElement extends ElementBase<TextNode | MetadataContent> {
	attributes?: GlobalAttributes
	readonly tagName: "HEAD"
}

export interface HeaderElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AddressElement
		| AnchorElement
		| ArticleElement
		| AsideElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BlockquoteElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| DeletionElement
		| DescriptionListElement
		| DetailsElement
		| DialogElement
		| DivisionElement
		| EmbedElement
		| EmphasisElement
		| FieldsetElement
		| FigureElement
		| FlowIfMapDescendant
		| FlowIfItempropAttribute
		| FormElement
		| Heading1Element
		| Heading2Element
		| Heading3Element
		| Heading4Element
		| Heading5Element
		| Heading6Element
		| HeadingElement
		| HeadingGroupElement
		| HorizontalRuleElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| InsertionElement
		| KeyboardElement
		| LabelElement
		| MainElement
		| MarkElement
		| MathElement
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
		| ScriptElement
		| SearchElement
		| SectionElement
		| SelectElement
		| SlotElement
		| SmallElement
		| SpanElement
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TableElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| UnorderedListElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
	attributes?: GlobalAttributes & {
		role?: "banner" | "group" | "presentation" | "none"
	}
	readonly tagName: "HEADER"
}

export interface Heading1Element
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: "heading" | "tab" | "presentation" | "none"
	}
	readonly tagName: "H1"
}

export interface Heading2Element
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: "heading" | "tab" | "presentation" | "none"
	}
	readonly tagName: "H2"
}

export interface Heading3Element
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: "heading" | "tab" | "presentation" | "none"
	}
	readonly tagName: "H3"
}

export interface Heading4Element
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: "heading" | "tab" | "presentation" | "none"
	}
	readonly tagName: "H4"
}

export interface Heading5Element
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: "heading" | "tab" | "presentation" | "none"
	}
	readonly tagName: "H5"
}

export interface Heading6Element
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: "heading" | "tab" | "presentation" | "none"
	}
	readonly tagName: "H6"
}

export interface HeadingElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: "heading" | "tab" | "presentation" | "none"
	}
	readonly tagName: "HN"
}

export interface HeadingGroupElement
	extends ElementBase<
		| TextNode
		| ParagraphElement
		| Heading1Element
		| Heading2Element
		| Heading3Element
		| Heading4Element
		| Heading5Element
		| Heading6Element
	> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "HGROUP"
}

export interface HiddenInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		autocomplete?: Autocomplete
		autofocus?: never
		dirname?: string
		readonly type: "hidden"
		value: string
	} & ({ name: "_charset_"; value: never } | { name: string; value: string })
}

export interface HorizontalRuleElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		role?: "separator" | "presentation" | "none"
	}
	readonly tagName: "HR"
}

export interface HtmlElement extends ElementBase<[HeadElement | BodyElement]> {
	attributes?: GlobalAttributes & {
		xmlns?: string
	}
	readonly tagName: "HTML"
}

export interface IdiomaticTextElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "I"
}

export interface IframeElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		allow?: string
		height?: number | string
		loading?: "eager" | "lazy"
		name?: string
		referrerpolicy?: ReferrerPolicy
		role?: "application" | "document" | "img" | "none" | "presentation"
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

export interface ImageElement extends ElementBase<never> {
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
		role?:
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
		sizes?: string
		src: string
		srcset?: string
		width?: number | string
		usemap?: string
	}
	readonly tagName: "IMG"
}

export interface ImageInputElement extends InputElement {
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

export interface InputElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		autofocus?: boolean
		disabled?: boolean
		form?: string
		name: string
		type: InputElementTypes
	}
	readonly tagName: "INPUT"
}

export interface InsertionElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & ModAttributes
	readonly tagName: "INS"
}

export interface KeyboardElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "KBD"
}

export interface LabelElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| EmbedElement
		| EmphasisElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| KeyboardElement
		| MarkElement
		| MathElement
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
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
	attributes?: GlobalAttributes & {
		for: string
	}
	readonly tagName: "LABEL"
}

export interface LegendElement
	extends ElementBase<TextNode | PhrasingContent | HeadingElement> {
	attributes?: HTMLLegendElement
	readonly tagName: "LEGEND"
}

export interface LinkElement extends ElementBase<never> {
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
	readonly tagName: "LINK"
}

export interface ListItemElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?:
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
		value?: number | string
	}
	readonly tagName: "LI"
}

export interface MainElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?: "main"
	}
	readonly tagName: "MAIN"
}

// transparent content
export interface MapElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		name: string
	}
	readonly tagName: "MAP"
}

export interface MarkElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "MARK"
}

export interface MathElement extends ElementBase<MathMLElement> {
	attributes?: GlobalAttributes & {
		display?: "block" | "inline"
	}
	readonly tagName: "MATH"
}

export interface MenuElement
	extends ElementBase<ListItemElement | ScriptElement | TemplateElement> {
	attributes?: GlobalAttributes & {
		role?:
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
	}
	readonly tagName: "MENU"
}

export interface MetaElement extends ElementBase<never> {
	attributes?:
		| (GlobalAttributes & {
				charset: "utf-8"
		  })
		| {
				"http-equiv"?: HttpEquiv
				"content": string
		  }
		| {
				name: "color-scheme"
				content: ColorScheme
		  }
		| {
				name: "referrer"
				content: ReferrerPolicy
		  }
		| {
				name: "robots"
				content: RobotsContent
		  }
		| {
				name: Omit<MetaName, "color-scheme" | "referrer" | "robots">
				content: string
		  }
	readonly tagName: "META"
}

export interface MeterElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| EmbedElement
		| EmphasisElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| KeyboardElement
		| LabelElement
		| MarkElement
		| MathElement
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
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
	attributes?: GlobalAttributes & {
		form?: string
		high?: number | string
		low?: number | string
		max?: number | string
		min?: number | string
		optimum: number | string
	}
	readonly tagName: "METER"
}

export interface MonthInputElement extends InputElement {
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

export interface NavigationElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes
	readonly tagName: "NAV"
}

export interface NoscriptElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AddressElement
		| AnchorElement
		| ArticleElement
		| AsideElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BlockquoteElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| DeletionElement
		| DescriptionListElement
		| DetailsElement
		| DialogElement
		| DivisionElement
		| EmbedElement
		| EmphasisElement
		| FieldsetElement
		| FigureElement
		| FlowIfMapDescendant
		| FlowIfItempropAttribute
		| FooterElement
		| FormElement
		| HeaderElement
		| Heading1Element
		| Heading2Element
		| Heading3Element
		| Heading4Element
		| Heading5Element
		| Heading6Element
		| HeadingElement
		| HeadingGroupElement
		| HorizontalRuleElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| InsertionElement
		| KeyboardElement
		| LabelElement
		| MainElement
		| MarkElement
		| MathElement
		| MenuElement
		| MeterElement
		| NavigationElement
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
		| ScriptElement
		| SearchElement
		| SectionElement
		| SelectElement
		| SlotElement
		| SmallElement
		| SpanElement
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TableElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| UnorderedListElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
		| LinkElement
		| StyleElement
		| MetaElement
	> {
	attributes?: GlobalAttributes
	readonly tagName: "NOSCRIPT"
}

export interface NumberInputElement extends InputElement {
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
export interface ObjectElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		data: string
		form?: string
		height?: number | string
		name?: string
		role?: "application" | "document" | "img"
		type: string
		width?: number | string
	}
	readonly tagName: "OBJECT"
}

export interface OptionElement extends ElementBase<TextNode> {
	attributes?: GlobalAttributes & {
		disabled?: boolean
		label?: string
		selected?: boolean | string
		value?: number | string
	}
	readonly tagName: "OPTION"
}

export interface OptionGroupElement extends ElementBase<OptionElement> {
	attributes?: GlobalAttributes & {
		disabled?: boolean
		label: string
	}
	readonly tagName: "OPTGROUP"
}

export interface OrderedListElement
	extends ElementBase<ListItemElement | ScriptElement | TemplateElement> {
	attributes?: GlobalAttributes & {
		reversed?: boolean
		role?:
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
		start?: number | string
		type?: "a" | "A" | "i" | "I" | "1" | 1
	}
	readonly tagName: "OL"
}

export interface OutputElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		for?: string
		form?: string
		name: string
		role?: AriaRole
	}
	readonly tagName: "OUTPUT"
}

export interface ParagraphElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "P"
}

export interface PasswordInputElement extends InputElement {
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

export interface PictureElement
	extends ElementBase<[Array<SourceElement>, ImageElement]> {
	attributes?: GlobalAttributes
	readonly tagName: "PICTURE"
}

export interface PreformattedTextElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes
	readonly tagName: "PRE"
}

export interface ProgressElement
	extends ElementBase<
		| TextNode
		| AbbreviationElement
		| AudioElement
		| BidirectionalIsolateElement
		| BidirectionalTextOverrideElement
		| BreakElement
		| BringAttentionElement
		| ButtonElement
		| CanvasElement
		| CiteElement
		| CodeElement
		| DataElement
		| DatalistElement
		| DefinitionElement
		| EmbedElement
		| EmphasisElement
		| IdiomaticTextElement
		| IframeElement
		| ImageElement
		| InputElement
		| KeyboardElement
		| LabelElement
		| MarkElement
		| MathElement
		| MeterElement
		| NoscriptElement
		| ObjectElement
		| OutputElement
		| PictureElement
		| QuoteElement
		| RubyElement
		| SampleElement
		| ScriptElement
		| SelectElement
		| SlotElement
		| SmallElement
		| SpanElement
		| StrikethroughElement
		| StrongEmphasisElement
		| SubscriptElement
		| SuperscriptElement
		| SvgElement
		| TemplateElement
		| TextareaElement
		| TimeElement
		| UnarticulatedAnnotationElement
		| VariableElement
		| VideoElement
		| WordBreakOpportunityElement
	> {
	attributes?: GlobalAttributes & {
		max?: number | string
		value?: number | string
	}
	readonly tagName: "PROGRESS"
}

export interface QuoteElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		cite?: string
		role?: AriaRole
	}
	readonly tagName: "Q"
}

export interface RadioInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		checked?: boolean
		required?: boolean
		readonly type: "radio"
		value: string
	}
}

export interface RangeInputElement extends InputElement {
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

export interface ResetInputElement extends InputElement {
	attributes?: InputElement["attributes"] & {
		autocapitalize?: Autocapitalize
		readonly type: "reset"
		value?: string
	}
}

export interface RubyElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "RUBY"
}

export interface RubyFallbackParenthesisElement extends ElementBase<TextNode> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "RP"
}

export interface RubyTextElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "RT"
}

export interface SampleElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "SAMP"
}

export interface ScriptElement extends ElementBase<TextNode> {
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
	readonly tagName: "SCRIPT"
}

export interface SearchElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?: "form" | "group" | "none" | "presentation" | "region" | "search"
	}
	readonly tagName: "SEARCH"
}

export interface SearchInputElement extends InputElement {
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
	readonly tagName: "INPUT"
}

export interface SectionElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?:
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
	}
	readonly tagName: "SECTION"
}

export interface SelectElement
	extends ElementBase<
		OptionElement | OptionGroupElement | HorizontalRuleElement
	> {
	attributes?: GlobalAttributes & {
		autocomplete?: Autocomplete
		autofocus?: boolean
		disabled?: boolean
		form?: string
		multiple?: boolean
		required?: boolean
		role?: "menu"
		size?: number | string
	}
	readonly tagName: "SELECT"
}

// transparent content
export interface SlotElement extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		name?: string
	}
	readonly tagName: "SLOT"
}

export interface SmallElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "SMALL"
}

export interface StrikethroughElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "S"
}

export interface SourceElement extends ElementBase<never> {
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

export interface SpanElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "SPAN"
}

export interface StrongEmphasisElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "STRONG"
}

export interface StyleElement extends ElementBase<TextNode> {
	attributes?: HTMLStyleElement
	readonly tagName: "STYLE"
}

export interface SubmitInputElement extends InputElement {
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

export interface SubscriptElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "SUB"
}

export interface SummaryElement
	extends ElementBase<
		[HeadingElement, Array<PhrasingContent>] | Array<PhrasingContent>
	> {
	attributes?: GlobalAttributes
	readonly tagName: "SUMMARY"
}

export interface SuperscriptElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "SUP"
}

// TODO: implement this
export interface SvgElement extends ElementBase<SvgMLElement> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "SAMP"
}

export interface TableBodyElement extends ElementBase<TableRowElement> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "TBODY"
}

export interface TableDataCellElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "TD"
}

// TODO: complex children
export interface TableElement
	extends ElementBase<
		| TextNode
		| CaptionElement
		| ColumnGroupElement
		| TableHeadElement
		| TableBodyElement
		| TableRowElement
		| TableFooterElement
	> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "TABLE"
}

export interface TableFooterElement extends ElementBase<TableRowElement> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "TFOOT"
}

export interface TableHeadElement extends ElementBase<TableRowElement> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "THEAD"
}

// TODO: complicated children
export interface TableHeaderCellElement
	extends ElementBase<TextNode | FlowContentAll> {
	attributes?: GlobalAttributes & {
		abbr?: string
		colspan?: number | string
		headers?: string
		role?: AriaRole
		rowspan?: number | string
		scope?: "col" | "colgroup" | "row" | "rowgroup"
	}
	readonly tagName: "TH"
}

export interface TableRowElement
	extends ElementBase<TableDataCellElement | TableHeaderCellElement> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "TR"
}

export interface TemplateElement extends ElementBase<TextNode | ElementAny> {
	attributes?: GlobalAttributes & {
		shadowrootmode?: "closed" | "open"
	}
	readonly tagName: "TEMPLATE"
}

export interface TelInputElement extends InputElement {
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

export interface TextareaElement extends ElementBase<TextNode> {
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
	readonly tagName: "TEXTAREA"
}

export interface TextInputElement extends InputElement {
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

export interface TimeElement extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		datetime: string
		role?: AriaRole
	}
	readonly tagName: "TIME"
}

export interface TimeInputElement extends InputElement {
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

export interface TitleElement extends ElementBase<TextNode> {
	attributes?: GlobalAttributes
	readonly tagName: "TITLE"
}

export interface TrackElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		default?: boolean
		label: string
		src: string
	} & (
			| {
					kind?: "subtitles"
					srclang: string
			  }
			| {
					kind?: "captions" | "chapters" | "descriptions" | "metadata"
					srclang?: string
			  }
		)
	readonly tagName: "TRACK"
}

export interface UnarticulatedAnnotationElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "U"
}

export interface UnorderedListElement
	extends ElementBase<ListItemElement | ScriptElement | TemplateElement> {
	attributes?: GlobalAttributes & {
		role?:
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
	}
	readonly tagName: "UL"
}

export interface UrlInputElement extends InputElement {
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

export interface VariableElement
	extends ElementBase<TextNode | PhrasingContent> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "VAR"
}

// TODO: complex children
export interface VideoElement
	extends ElementBase<TrackElement | SourceElement> {
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
		role?: "application"
		src: string
		width?: number | string
	}
	readonly tagName: "VIDEO"
}

export interface WeekInputElement extends InputElement {
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

export interface WordBreakOpportunityElement extends ElementBase<never> {
	attributes?: GlobalAttributes & {
		role?: AriaRole
	}
	readonly tagName: "WBR"
}

export type BaseElements = BodyElement | HeadElement | HtmlElement

export type EmbeddedContent =
	| AudioElement
	| CanvasElement
	| EmbedElement
	| IframeElement
	| ImageElement
	| MathElement
	| ObjectElement
	| PictureElement
	| SvgElement
	| VideoElement

export type FlowContent =
	| AbbreviationElement
	| AddressElement
	| AnchorElement
	| ArticleElement
	| AsideElement
	| AudioElement
	| BidirectionalIsolateElement
	| BidirectionalTextOverrideElement
	| BlockquoteElement
	| BreakElement
	| BringAttentionElement
	| ButtonElement
	| CanvasElement
	| CiteElement
	| CodeElement
	| DataElement
	| DatalistElement
	| DefinitionElement
	| DeletionElement
	| DescriptionListElement
	| DetailsElement
	| DialogElement
	| DivisionElement
	| EmbedElement
	| EmphasisElement
	| FieldsetElement
	| FigureElement
	| FooterElement
	| FormElement
	| HeaderElement
	| Heading1Element
	| Heading2Element
	| Heading3Element
	| Heading4Element
	| Heading5Element
	| Heading6Element
	| HeadingElement
	| HeadingGroupElement
	| HorizontalRuleElement
	| IdiomaticTextElement
	| IframeElement
	| ImageElement
	| InputElement
	| InsertionElement
	| KeyboardElement
	| LabelElement
	| MainElement
	| MarkElement
	| MathElement
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
	| ScriptElement
	| SearchElement
	| SectionElement
	| SelectElement
	| SlotElement
	| SmallElement
	| SpanElement
	| StrikethroughElement
	| StrongEmphasisElement
	| SubscriptElement
	| SuperscriptElement
	| SvgElement
	| TableElement
	| TemplateElement
	| TextareaElement
	| TimeElement
	| UnarticulatedAnnotationElement
	| UnorderedListElement
	| VariableElement
	| VideoElement
	| WordBreakOpportunityElement

export type FlowIfMapDescendant = AreaElement

export type FlowIfItempropAttribute = LinkElement | MetaElement

export type FlowContentAll =
	| FlowContent
	| FlowIfMapDescendant
	| FlowIfItempropAttribute

export type FormContent =
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

export type FormContentLabelable =
	| ButtonElement
	| InputElement
	| MeterElement
	| OutputElement
	| ProgressElement
	| SelectElement
	| TextareaElement

export type FormContentListed =
	| ButtonElement
	| FieldsetElement
	| InputElement
	| ObjectElement
	| OutputElement
	| SelectElement
	| TextareaElement

export type FormContentResettable =
	| InputElement
	| OutputElement
	| SelectElement
	| TextareaElement

export type FormContentSubmittable =
	| ButtonElement
	| InputElement
	| ObjectElement
	| SelectElement
	| TextareaElement

export type HeadingContent =
	| Heading1Element
	| Heading2Element
	| Heading3Element
	| Heading4Element
	| Heading5Element
	| Heading6Element
	| HeadingElement
	| HeadingGroupElement

export type InteractiveContent =
	| ButtonElement
	| DetailsElement
	| EmbedElement
	| IframeElement
	| LabelElement
	| SelectElement
	| TextareaElement

export type InteractiveIfHrefAttribute = AnchorElement

export type InteractiveIfControlsAttribute = AudioElement | VideoElement

export type InteractiveIfUsemapAttribute = ImageElement | ObjectElement

export type InteractiveIfTypeAttributeNotHiddenState = InputElement

export type InteractiveContentAll =
	| InteractiveContent
	| InteractiveIfControlsAttribute
	| InteractiveIfHrefAttribute
	| InteractiveIfTypeAttributeNotHiddenState
	| InteractiveIfUsemapAttribute

export type ListContent =
	| DescriptionDetailsElement
	| DescriptionListElement
	| DescriptionTermElement
	| ListItemElement
	| OrderedListElement
	| UnorderedListElement

export type MetadataContent =
	| BaseElement
	| LinkElement
	| MetaElement
	| NoscriptElement
	| ScriptElement
	| StyleElement
	| TitleElement

export type MiscellaneousContent =
	| FigcaptionElement
	| FragmentElement
	| LegendElement
	| MapElement
	| OptionElement
	| OptionGroupElement
	| RubyFallbackParenthesisElement
	| RubyTextElement
	| SourceElement
	| SummaryElement

export type PhrasingContent =
	| AbbreviationElement
	| AudioElement
	| BidirectionalIsolateElement
	| BidirectionalTextOverrideElement
	| BreakElement
	| BringAttentionElement
	| ButtonElement
	| CanvasElement
	| CiteElement
	| CodeElement
	| DataElement
	| DatalistElement
	| DefinitionElement
	| EmbedElement
	| EmphasisElement
	| IdiomaticTextElement
	| IframeElement
	| ImageElement
	| InputElement
	| KeyboardElement
	| LabelElement
	| MarkElement
	| MathElement
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
	| StrikethroughElement
	| StrongEmphasisElement
	| SubscriptElement
	| SuperscriptElement
	| SvgElement
	| TemplateElement
	| TextareaElement
	| TimeElement
	| UnarticulatedAnnotationElement
	| VariableElement
	| VideoElement
	| WordBreakOpportunityElement

export type ScriptSupportingContent = ScriptElement | TemplateElement

export type SectioningContent =
	| ArticleElement
	| AsideElement
	| NavigationElement
	| SectionElement

export type TabularElements =
	| ColumnElement
	| ColumnGroupElement
	| TableBodyElement
	| TableDataCellElement
	| TableElement
	| TableFooterElement
	| TableHeadElement
	| TableHeaderCellElement
	| TableRowElement

export type ElementAny =
	| BaseElements
	| CaptionElement
	| EmbeddedContent
	| FlowContentAll
	| FormContent
	| HeadingContent
	| InteractiveContentAll
	| ListContent
	| MetadataContent
	| MiscellaneousContent
	| PhrasingContent
	| ScriptSupportingContent
	| SectioningContent
	| TabularElements
	| TrackElement
