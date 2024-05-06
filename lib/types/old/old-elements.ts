import type { AriaRole } from "./unions"
import type {
	DragAndDropEvent,
	ElementBase,
	FocusEvent,
	GlobalAttributes,
	HTMLEvent,
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

export type ModChildren = TextNode | FlowContentAll

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

export type AbbreviationAttributes = {
	role?: AriaRole
	title: string
}

export type AbbreviationChildren = TextNode | PhrasingContent

export interface AbbreviationElement
	extends ElementBase<
		AbbreviationAttributes,
		AbbreviationChildren,
		never,
		never
	> {
	readonly tagName: "ABBR"
}

export type AddressAttributes = {
	role?: AriaRole
}

export type AddressChildren =
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

export interface AddressElement
	extends ElementBase<AddressAttributes, AddressChildren, never, never> {
	readonly tagName: "ADDRESS"
}

export type AnchorAttributes = {
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

export type AnchorChildren = TextNode | FlowContentAll

export type AnchorPublishes = {
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

export interface AnchorElement
	extends ElementBase<
		AnchorAttributes,
		AnchorChildren,
		AnchorPublishes,
		never
	> {
	readonly tagName: "A"
}

export type AreaAttributes = {
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
}

export interface AreaElement
	extends ElementBase<AreaAttributes, never, never, never> {
	readonly tagName: "AREA"
}

export type ArticleAttributes = {
	role?:
		| "application"
		| "document"
		| "feed"
		| "main"
		| "none"
		| "presentation"
		| "region"
}

export type ArticleChildren = TextNode | FlowContentAll

export interface ArticleElement
	extends ElementBase<ArticleAttributes, ArticleChildren, never, never> {
	readonly tagName: "ARTICLE"
}

export type AsideAttributes = {
	role?: "feed" | "none" | "note" | "presentation" | "region" | "search"
}

export type AsideChildren = TextNode | FlowContentAll

export interface AsideElement
	extends ElementBase<AsideAttributes, AsideChildren, never, never> {
	readonly tagName: "ASIDE"
}

export type AudioAttributes = {
	autoplay?: boolean
	controls?: boolean
	controlslist?: "nodownload" | "nofullscreen" | "noremoteplayback" | undefined
	crossorigin?: CrossOrigin
	disableremoteplayback?: boolean
	loop?: boolean
	muted?: boolean
	preload?: "" | "auto" | "metadata" | "none"
	role?: "application"
	src: string
}

export type AudioChildren = TrackElement | SourceElement | FlowContentAll

export interface AudioElement
	extends ElementBase<AudioAttributes, AudioChildren, never, never> {
	readonly tagName: "AUDIO"
}

export type BaseAttributes = {
	href: string
	target?: "_blank" | "_parent" | "_self" | "_top"
}

export interface BaseElement
	extends ElementBase<BaseAttributes, never, never, never> {
	readonly tagName: "BASE"
}

export type BidirectionalIsolateAttributes = {
	role?: AriaRole
}

export type BidirectionalIsolateChildren = TextNode | PhrasingContent

export interface BidirectionalIsolateElement
	extends ElementBase<
		BidirectionalIsolateAttributes,
		BidirectionalIsolateChildren,
		never,
		never
	> {
	readonly tagName: "BDI"
}

export type BidirectionalTextOverrideAttributes = {
	role?: AriaRole
}

export type BidirectionalTextOverrideChildren = TextNode | PhrasingContent

export interface BidirectionalTextOverrideElement
	extends ElementBase<
		BidirectionalTextOverrideAttributes,
		BidirectionalTextOverrideChildren,
		never,
		never
	> {
	readonly tagName: "BDO"
}

export type BlockquoteAttributes = {
	cite?: string
	role?: AriaRole
}

export type BlockquoteChildren = TextNode | FlowContentAll

export interface BlockquoteElement
	extends ElementBase<BlockquoteAttributes, BlockquoteChildren, never, never> {
	readonly tagName: "BLOCKQUOTE"
}

export type BodyChildren = TextNode | FlowContentAll

export interface BodyElement
	extends ElementBase<{}, BodyChildren, never, never> {
	attributes?: GlobalAttributes
	readonly tagName: "BODY"
}

export interface BreakElement extends ElementBase<{}, never, never, never> {
	attributes?: GlobalAttributes
	readonly tagName: "BR"
}

export type BringAttentionAttributes = {
	role?: AriaRole
}

export type BringAttentionChildren = TextNode | PhrasingContent

export interface BringAttentionElement
	extends ElementBase<
		BringAttentionAttributes,
		BringAttentionChildren,
		never,
		never
	> {
	readonly tagName: "B"
}

export type ButtonAttributes = {
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

export type ButtonChildren =
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

export interface ButtonElement
	extends ElementBase<ButtonAttributes, ButtonChildren, never, never> {
	readonly tagName: "BUTTON"
}

// SEE https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
export type ButtonInputAttributes = {
	autofocus?: boolean
	disabled?: boolean
	form?: string
	name: string
	popovertarget?: string
	popovertargetaction?: "hide" | "show" | "toggle"
	readonly type: "button"
	value?: "string"
}

export interface ButtonInputElement
	extends ElementBase<ButtonInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type CanvasAttributes = {
	height?: number | string
	role?: AriaRole
	width?: number | string
}

export type CanvasChildren =
	| AnchorElement
	| TextNode
	| ButtonElement
	| ButtonInputElement
	| CheckboxInputElement
	| RadioInputElement

// Needs transparent element children
export interface CanvasElement
	extends ElementBase<CanvasAttributes, CanvasChildren, never, never> {
	readonly tagName: "CANVAS"
}

export type CaptionChildren = TextNode | FlowContentAll

export interface CaptionElement
	extends ElementBase<{}, CaptionChildren, never, never> {
	readonly tagName: "CAPTION"
}

export type CheckboxInputAttributes = {
	autocapitalize?: Autocapitalize
	autofocus?: boolean
	checked?: boolean
	disabled?: boolean
	form?: string
	list?: string
	name: string
	readonly type: "checkbox"
	required?: boolean
	value?: string
}

export interface CheckboxInputElement
	extends ElementBase<CheckboxInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type CiteAttributes = {
	role?: AriaRole
}

export type CiteChildren = TextNode | PhrasingContent

export interface CiteElement
	extends ElementBase<CiteAttributes, CiteChildren, never, never> {
	readonly tagName: "CITE"
}

export type CodeAttributes = {
	role?: AriaRole
}

export type CodeChildren = TextNode | PhrasingContent

export interface CodeElement
	extends ElementBase<CodeAttributes, CodeChildren, never, never> {
	readonly tagName: "CODE"
}

export type ColorInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	name: string
	readonly type: "color"
	value?: string
}

export interface ColorInputElement
	extends ElementBase<ColorInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type ColumnAttributes = {
	span?: number | string
}

export interface ColumnElement
	extends ElementBase<ColumnAttributes, never, never, never> {
	readonly tagName: "COL"
}

export type ColumnGroupAttributes = {
	span?: number | string
}

export interface ColumnGroupElement
	extends ElementBase<ColumnGroupAttributes, never, never, never> {
	readonly tagName: "COLGROUP"
}

export type DataAttributes = {
	role?: AriaRole
	value: string
}

export type DataChildren = TextNode | PhrasingContent

export interface DataElement
	extends ElementBase<DataAttributes, DataChildren, never, never> {
	readonly tagName: "DATA"
}

export type DatalistChildren = TextNode | PhrasingContent | OptionElement

export interface DatalistElement
	extends ElementBase<{}, DatalistChildren, never, never> {
	readonly tagName: "DATALIST"
}

export type DateInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	max?: string
	min?: string
	name: string
	readonly type: "date"
	readonly?: boolean
	required?: boolean
	step?: string
	value?: string
}

export interface DateInputElement
	extends ElementBase<DateInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type DateTimeLocalInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	max?: string
	min?: string
	name: string
	readonly type: "datetime-local"
	readonly?: boolean
	required?: boolean
	step?: string
	value?: string
}

export interface DateTimeLocalInputElement
	extends ElementBase<DateTimeLocalInputAttributes, never, never, never> {
	tagName: "INPUT"
}

// transparent content
export interface DeletionElement
	extends ElementBase<ModAttributes, ModChildren, never, never> {
	readonly tagName: "DEL"
}

export type DetailsAttributes = {
	name?: string
	open?: boolean
}

export type DetailsChildren = TextNode | FlowContentAll | SummaryElement

export interface DetailsElement
	extends ElementBase<DetailsAttributes, DetailsChildren, never, never> {
	readonly tagName: "DETAILS"
}

export type DefinitionAttributes = {
	role?: AriaRole
}

export type DefinitionChildren =
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

export interface DefinitionElement
	extends ElementBase<DefinitionAttributes, DefinitionChildren, never, never> {
	readonly tagName: "DFN"
}

export type DialogAttributes = {
	open?: boolean
	role?: "alertdialog"
}

export type DialogChildren = TextNode | FlowContentAll

export interface DialogElement
	extends ElementBase<DialogAttributes, DialogChildren, never, never> {
	readonly tagName: "DIALOG"
}

export type DivisionAttributes = {
	role?: AriaRole
}

export type DivisionChildren = TextNode | FlowContentAll

export interface DivisionElement
	extends ElementBase<DivisionAttributes, DivisionChildren, never, never> {
	readonly tagName: "DIV"
}

export type DescriptionDataChildren = TextNode | FlowContentAll

export interface DescriptionDetailsElement
	extends ElementBase<{}, DescriptionDataChildren, never, never> {
	readonly tagName: "DD"
}

export type DescriptionListAttributes = {
	role?: "group" | "list" | "none" | "presentation"
}

export type DescriptionListChildren =
	| DescriptionDetailsElement
	| DescriptionTermElement
	| ScriptElement
	| TemplateElement

export interface DescriptionListElement
	extends ElementBase<
		DescriptionListAttributes,
		DescriptionDataChildren,
		never,
		never
	> {
	readonly tagName: "DL"
}

export type DescriptionTermAttributes = {
	role?: "listitem"
}

export type DescriptionTermChildren =
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

// TODO: exclude header descendants
export interface DescriptionTermElement
	extends ElementBase<
		DescriptionTermAttributes,
		DescriptionTermChildren,
		never,
		never
	> {
	readonly tagName: "DT"
}

export type EmailInputAttributes = {
	autocomplete?: Autocomplete
	autofocus?: boolean
	dirname?: string
	disabled?: boolean
	form?: string
	list?: string
	maxlength?: number | string
	minlength?: number | string
	multiple?: boolean
	name: string
	pattern?: string
	placeholder?: string
	readonly type: "email"
	readonly?: boolean
	required?: boolean
	size?: number | string
	value?: string
}

export interface EmailInputElement
	extends ElementBase<EmailInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type EmbedAttributes = {
	height?: number | string
	role?: "application" | "document" | "img" | "none" | "presentation"
	src?: string
	type?: string
	width?: number | string
}

export interface EmbedElement
	extends ElementBase<EmbedAttributes, never, never, never> {
	readonly tagName: "EMBED"
}

export type EmphasisAttributes = {
	role?: AriaRole
}

export type EmphasisChildren = TextNode | PhrasingContent

export interface EmphasisElement
	extends ElementBase<EmphasisAttributes, EmphasisChildren, never, never> {
	readonly tagName: "EM"
}

export type FieldsetAttributes = {
	disabled?: boolean
	form?: string
	name?: string
	role?: "group" | "radiogroup" | "presentation" | "none"
}

export type FieldsetChildren = TextNode | LegendElement | FlowContentAll

export interface FieldsetElement
	extends ElementBase<FieldsetAttributes, FieldsetChildren, never, never> {
	readonly tagName: "FIELDSET"
}

export type FigcaptionAttributes = {
	role?: "group" | "none" | "presentation"
}

export type FigcaptionChildren = TextNode | FlowContentAll

export interface FigcaptionElement
	extends ElementBase<FigcaptionAttributes, FigcaptionChildren, never, never> {
	readonly tagName: "FIGCAPTION"
}

export type FigureAttributes = {
	role?: "group" | "none" | "presentation"
}

export type FigureChildren = TextNode | FigcaptionElement | FlowContentAll

export interface FigureElement
	extends ElementBase<FigureAttributes, FigureChildren, never, never> {
	readonly tagName: "FIGURE"
}

export type FileInputAttributes = {
	accept?: string
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	capture?: string
	disabled?: boolean
	form?: string
	list?: string
	multiple?: boolean
	name: string
	readonly type: "file"
	required?: boolean
	value?: string
}

export interface FileInputElement
	extends ElementBase<FileInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type FooterAttributes = {
	role?: "contentinfo" | "group" | "presentation" | "none"
}

export type FooterChildren =
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

export interface FooterElement
	extends ElementBase<FooterAttributes, FooterChildren, never, never> {
	readonly tagName: "FOOTER"
}

export type FormAttributes = {
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

export type FormChildren =
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

export interface FormElement
	extends ElementBase<FormAttributes, FormChildren, never, never> {
	readonly tagName: "FORM"
}

export type FragmentChildren = TextNode | FlowContentAll

export interface FragmentElement
	extends ElementBase<never, FragmentChildren, never, never> {
	dataset?: never
	readonly tagName: "FRAGMENT"
}

export type HeadChildren = TextNode | MetadataContent

export interface HeadElement
	extends ElementBase<{}, HeadChildren, never, never> {
	readonly tagName: "HEAD"
}

export type HeaderAttributes = {
	role?: "banner" | "group" | "presentation" | "none"
}

export type HeaderChildren =
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

export interface HeaderElement
	extends ElementBase<HeaderAttributes, HeaderChildren, never, never> {
	readonly tagName: "HEADER"
}

export type HeadingAttributes = {
	role?: "heading" | "tab" | "presentation" | "none"
}

export type HeadingChildren = TextNode | PhrasingContent

export interface Heading1Element
	extends ElementBase<HeadingAttributes, HeadingChildren, never, never> {
	readonly tagName: "H1"
}

export interface Heading2Element
	extends ElementBase<HeadingAttributes, HeadingChildren, never, never> {
	readonly tagName: "H2"
}

export interface Heading3Element
	extends ElementBase<HeadingAttributes, HeadingChildren, never, never> {
	readonly tagName: "H3"
}

export interface Heading4Element
	extends ElementBase<HeadingAttributes, HeadingChildren, never, never> {
	readonly tagName: "H4"
}

export interface Heading5Element
	extends ElementBase<HeadingAttributes, HeadingChildren, never, never> {
	readonly tagName: "H5"
}

export interface Heading6Element
	extends ElementBase<HeadingAttributes, HeadingChildren, never, never> {
	readonly tagName: "H6"
}

export interface HeadingElement
	extends ElementBase<HeadingAttributes, HeadingChildren, never, never> {
	readonly tagName: "HN"
}

export type HeadingGroupAttributes = {
	role?: AriaRole
}

export type HeadingGroupChildren =
	| TextNode
	| ParagraphElement
	| Heading1Element
	| Heading2Element
	| Heading3Element
	| Heading4Element
	| Heading5Element
	| Heading6Element

export interface HeadingGroupElement
	extends ElementBase<
		HeadingGroupAttributes,
		HeadingGroupChildren,
		never,
		never
	> {
	readonly tagName: "HGROUP"
}

export type HiddenInputAttributes = {
	autofocus?: boolean
	disabled?: boolean
	form?: string
	name: string
} & {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: never
	dirname?: string
	readonly type: "hidden"
	value: string
} & ({ name: "_charset_"; value: never } | { name: string; value: string })

export interface HiddenInputElement
	extends ElementBase<HiddenInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type HorizontalRuleAttributes = {
	role?: "separator" | "presentation" | "none"
}

export interface HorizontalRuleElement
	extends ElementBase<HorizontalRuleAttributes, never, never, never> {
	readonly tagName: "HR"
}

export type HtmlAttributes = {
	xmlns?: string
}

export type HtmlChildren = [HeadElement | BodyElement]

export interface HtmlElement
	extends ElementBase<HtmlAttributes, HtmlChildren, never, never> {
	readonly tagName: "HTML"
}

export type IdiomaticTextAttributes = {
	role?: AriaRole
}

export type IdiomaticTextChildren = TextNode | PhrasingContent

export interface IdiomaticTextElement
	extends ElementBase<
		IdiomaticTextAttributes,
		IdiomaticTextChildren,
		never,
		never
	> {
	readonly tagName: "I"
}

export type IframeAttributes = {
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

export interface IframeElement
	extends ElementBase<IframeAttributes, never, never, never> {
	readonly tagName: "IFRAME"
}

export type ImageAttributes = {
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

export interface ImageElement
	extends ElementBase<ImageAttributes, never, never, never> {
	readonly tagName: "IMG"
}

export type ImageInputAttributes = {
	alt: string
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: Formenctype
	formmethod?: Formmethod
	formnovalidate?: boolean
	formtarget?: Formtarget
	height?: number | string
	list?: string
	name: string
	readonly type: "image"
	readonly?: boolean
	src: string
	width?: number | string
}

export interface ImageInputElement
	extends ElementBase<ImageInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type InputElement =
	| ButtonInputElement
	| CheckboxInputElement
	| ColorInputElement
	| DateInputElement
	| DateTimeLocalInputElement
	| EmailInputElement
	| FileInputElement
	| HiddenInputElement
	| ImageInputElement
	| MonthInputElement
	| NumberInputElement
	| PasswordInputElement
	| RadioInputElement
	| RangeInputElement
	| ResetInputElement
	| SearchInputElement
	| SubmitInputElement
	| TelInputElement
	| TextInputElement
	| TimeInputElement
	| UrlInputElement
	| WeekInputElement

export interface InsertionElement
	extends ElementBase<ModAttributes, ModChildren, never, never> {
	readonly tagName: "INS"
}

export type KeyboardAttributes = {
	role?: AriaRole
}

export type KeyboardChildren = TextNode | PhrasingContent

export interface KeyboardElement
	extends ElementBase<KeyboardAttributes, KeyboardChildren, never, never> {
	readonly tagName: "KBD"
}

export type LabelAttributes = {
	for: string
}

export type LabelChildren =
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

export interface LabelElement
	extends ElementBase<LabelAttributes, LabelChildren, never, never> {
	readonly tagName: "LABEL"
}

export type LegendChildren = TextNode | PhrasingContent | HeadingElement

export interface LegendElement
	extends ElementBase<{}, LegendChildren, never, never> {
	readonly tagName: "LEGEND"
}

export type LinkAttributes = {
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
} & (
	| {
			as: "image"
			imagesizes?: string
			imagesrcset?: string
			rel: "preload"
			type?: string
	  }
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
)

export interface LinkElement
	extends ElementBase<LinkAttributes, never, never, never> {
	readonly tagName: "LINK"
}

export type ListItemAttributes = {
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

export type ListItemChildren = TextNode | FlowContentAll

export interface ListItemElement
	extends ElementBase<ListItemAttributes, ListItemChildren, never, never> {
	readonly tagName: "LI"
}

export type MainAttributes = {
	role?: "main"
}

export type MainChildren = TextNode | FlowContentAll

export interface MainElement
	extends ElementBase<MainAttributes, MainChildren, never, never> {
	readonly tagName: "MAIN"
}

export type MapAttributes = {
	name: string
}

export type MapChildren = TextNode | FlowContentAll

// transparent content
export interface MapElement
	extends ElementBase<MapAttributes, MapChildren, never, never> {
	readonly tagName: "MAP"
}

export type MarkAttributes = {
	role?: AriaRole
}

export type MarkChildren = TextNode | PhrasingContent

export interface MarkElement
	extends ElementBase<MarkAttributes, MarkChildren, never, never> {
	readonly tagName: "MARK"
}

export type MathAttributes = {
	display?: "block" | "inline"
}

export type MathChildren = MathMLElement

export interface MathElement
	extends ElementBase<MathAttributes, MathChildren, never, never> {
	readonly tagName: "MATH"
}

export type MenuAttributes = {
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

export type MenuChildren = ListItemElement | ScriptElement | TemplateElement

export interface MenuElement
	extends ElementBase<MenuAttributes, MenuChildren, never, never> {
	readonly tagName: "MENU"
}

export type MetaAttributes =
	| {
			charset: "utf-8"
	  }
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

export interface MetaElement
	extends ElementBase<MetaAttributes, never, never, never> {
	readonly tagName: "META"
}

export type MeterAttributes = {
	form?: string
	high?: number | string
	low?: number | string
	max?: number | string
	min?: number | string
	optimum: number | string
}

export type MeterChildren =
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

export interface MeterElement
	extends ElementBase<MeterAttributes, MeterChildren, never, never> {
	readonly tagName: "METER"
}

export type MonthInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	max?: number | string
	min?: number | string
	name: string
	readonly type: "month"
	readonly?: boolean
	required?: boolean
	step?: number | string
	value?: string
}

export interface MonthInputElement
	extends ElementBase<MonthInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type NavigationChildren = TextNode | FlowContentAll

export interface NavigationElement
	extends ElementBase<{}, NavigationChildren, never, never> {
	readonly tagName: "NAV"
}

export type NoscriptChildren =
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

export interface NoscriptElement
	extends ElementBase<{}, NoscriptChildren, never, never> {
	readonly tagName: "NOSCRIPT"
}

export type NumberInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	max: number | string
	min: number | string
	name: string
	placeholder?: string
	readonly type: "number"
	readonly?: boolean
	required?: boolean
	step?: number | string
	value?: string | number
}

export interface NumberInputElement
	extends ElementBase<NumberInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type ObjectAttributes = {
	data: string
	form?: string
	height?: number | string
	name?: string
	role?: "application" | "document" | "img"
	type: string
	width?: number | string
}

export type ObjectChildren = TextNode | FlowContentAll

// transparent content
// TODO: do we need this?
export interface ObjectElement
	extends ElementBase<ObjectAttributes, ObjectChildren, never, never> {
	readonly tagName: "OBJECT"
}

export type OptionAttributes = {
	disabled?: boolean
	label?: string
	selected?: boolean | string
	value?: number | string
}

export interface OptionElement
	extends ElementBase<OptionAttributes, TextNode, never, never> {
	readonly tagName: "OPTION"
}

export type OptionGroupAttributes = {
	disabled?: boolean
	label: string
}

export interface OptionGroupElement
	extends ElementBase<OptionGroupAttributes, OptionElement, never, never> {
	readonly tagName: "OPTGROUP"
}

export type OrderedListAttributes = {
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

export type OrderedListChildren =
	| ListItemElement
	| ScriptElement
	| TemplateElement

export interface OrderedListElement
	extends ElementBase<
		OrderedListAttributes,
		OrderedListChildren,
		never,
		never
	> {
	readonly tagName: "OL"
}

export type OutputAttributes = {
	for?: string
	form?: string
	name: string
	role?: AriaRole
}

export type OutputChildren = TextNode | PhrasingContent

export interface OutputElement
	extends ElementBase<OutputAttributes, OutputChildren, never, never> {
	readonly tagName: "OUTPUT"
}

export type ParagraphAttributes = {
	role?: AriaRole
}

export type ParagraphChildren = TextNode | PhrasingContent

export interface ParagraphElement
	extends ElementBase<ParagraphAttributes, ParagraphChildren, never, never> {
	readonly tagName: "P"
}

export type PasswordInputAttributes = {
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	maxlength?: number | string
	minlength?: number | string
	multiple?: boolean
	name: string
	pattern?: string
	placeholder?: string
	readonly type: "password"
	readonly?: boolean
	required?: boolean
	size?: number | string
	value?: string
}

export interface PasswordInputElement
	extends ElementBase<PasswordInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type PictureChildren = [Array<SourceElement>, ImageElement]

export interface PictureElement
	extends ElementBase<{}, PictureChildren, never, never> {
	readonly tagName: "PICTURE"
}

export type PreformattedTextChildren = TextNode | PhrasingContent

export interface PreformattedTextElement
	extends ElementBase<{}, PreformattedTextChildren, never, never> {
	readonly tagName: "PRE"
}

export type ProgressAttributes = {
	max?: number | string
	value?: number | string
}

export type ProgressChildren =
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

export interface ProgressElement
	extends ElementBase<ProgressAttributes, ProgressChildren, never, never> {
	readonly tagName: "PROGRESS"
}

export type QuoteAttributes = {
	cite?: string
	role?: AriaRole
}

export type QuoteChildren = TextNode | PhrasingContent

export interface QuoteElement
	extends ElementBase<QuoteAttributes, QuoteChildren, never, never> {
	readonly tagName: "Q"
}

export type RadioInputAttributes = {
	autocapitalize?: Autocapitalize
	autofocus?: boolean
	checked?: boolean
	disabled?: boolean
	form?: string
	name: string
	readonly type: "radio"
	required?: boolean
	value: string
}

export interface RadioInputElement
	extends ElementBase<RadioInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type RangeInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	max?: number | string
	min?: number | string
	name: string
	readonly type: "range"
	step?: number | string
	value?: string
}

export interface RangeInputElement
	extends ElementBase<RadioInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type ResetInputAttributes = {
	autocapitalize?: Autocapitalize
	readonly type: "reset"
	value?: string
}

export interface ResetInputElement
	extends ElementBase<ResetInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type RubyAttributes = {
	role?: AriaRole
}

export type RubyChildren = TextNode | PhrasingContent

export interface RubyElement
	extends ElementBase<RubyAttributes, RubyChildren, never, never> {
	readonly tagName: "RUBY"
}

export type RubyFallbackParenthesisAttributes = {
	role?: AriaRole
}

export interface RubyFallbackParenthesisElement
	extends ElementBase<
		RubyFallbackParenthesisAttributes,
		TextNode,
		never,
		never
	> {
	readonly tagName: "RP"
}

export type RubyTextAttributes = {
	role?: AriaRole
}

export type RubyTextChildren = TextNode | PhrasingContent

export interface RubyTextElement
	extends ElementBase<RubyTextAttributes, RubyTextChildren, never, never> {
	readonly tagName: "RT"
}

export type SampleAttributes = {
	role?: AriaRole
}

export type SampleChildren = TextNode | PhrasingContent

export interface SampleElement
	extends ElementBase<SampleAttributes, SampleChildren, never, never> {
	readonly tagName: "SAMP"
}

export type ScriptAttributes = {
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

export interface ScriptElement
	extends ElementBase<ScriptAttributes, TextNode, never, never> {
	readonly tagName: "SCRIPT"
}

export type SearchAttributes = {
	role?: "form" | "group" | "none" | "presentation" | "region" | "search"
}

export type SearchChildren = TextNode | FlowContentAll

export interface SearchElement
	extends ElementBase<SearchAttributes, SearchChildren, never, never> {
	readonly tagName: "SEARCH"
}

export type SearchInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	dirname?: string
	disabled?: boolean
	form?: string
	list?: string
	maxlength?: number | string
	minlength?: number | string
	name: string
	pattern?: string
	placeholder?: string
	readonly type: "search"
	required?: boolean
	size?: number | string
	value?: string
}

export interface SearchInputElement
	extends ElementBase<SearchInputAttributes, never, never, never> {
	readonly tagName: "INPUT"
}

export type SectionAttributes = {
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

export type SectionChildren = TextNode | FlowContentAll

export interface SectionElement
	extends ElementBase<SectionAttributes, SectionChildren, never, never> {
	readonly tagName: "SECTION"
}

export type SelectAttributes = {
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	multiple?: boolean
	required?: boolean
	role?: "menu"
	size?: number | string
}

export type SelectChildren =
	| OptionElement
	| OptionGroupElement
	| HorizontalRuleElement

export interface SelectElement
	extends ElementBase<SelectAttributes, SelectChildren, never, never> {
	readonly tagName: "SELECT"
}

export type SlotAttributes = {
	name?: string
}

export type SlotChildren = TextNode | FlowContentAll

// transparent content
export interface SlotElement
	extends ElementBase<SlotAttributes, SlotChildren, never, never> {
	readonly tagName: "SLOT"
}

export type SmallAttributes = {
	role?: AriaRole
}

export type SmallChildren = TextNode | PhrasingContent

export interface SmallElement
	extends ElementBase<SmallAttributes, SmallChildren, never, never> {
	readonly tagName: "SMALL"
}

export type StrikethroughAttributes = {
	role?: AriaRole
}

export type StrikethroughChildren = TextNode | PhrasingContent

export interface StrikethroughElement
	extends ElementBase<
		StrikethroughAttributes,
		StrikethroughChildren,
		never,
		never
	> {
	readonly tagName: "S"
}

export type SourceAttributes = {
	height?: number | string
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	type?: string
}

export interface SourceElement
	extends ElementBase<SourceAttributes, never, never, never> {
	readonly tagName: "SOURCE"
}

export type SpanAttributes = {
	role?: AriaRole
}

export type SpanChildren = TextNode | PhrasingContent

export interface SpanElement
	extends ElementBase<SpanAttributes, SpanChildren, never, never> {
	readonly tagName: "SPAN"
}

export type StrongEmphasisAttributes = {
	role?: AriaRole
}

export type StrongEmphasisChildren = TextNode | PhrasingContent

export interface StrongEmphasisElement
	extends ElementBase<
		StrongEmphasisAttributes,
		StrongEmphasisChildren,
		never,
		never
	> {
	readonly tagName: "STRONG"
}

export type StyleAttributes = {
	disabled?: boolean
	media?: string
	type?: string
}

export interface StyleElement
	extends ElementBase<StyleAttributes, TextNode, never, never> {
	readonly tagName: "STYLE"
}

export type SubmitInputAttributes = {
	autocapitalize?: Autocapitalize
	autofocus?: boolean
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: Formenctype
	formmethod?: Formmethod
	formnovalidate?: boolean
	formtarget?: Formtarget
	name: string
	readonly type: "submit"
	value?: string
}

export interface SubmitInputElement
	extends ElementBase<SubmitInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type SubscriptAttributes = {
	role?: AriaRole
}

export type SubscriptChildren = TextNode | PhrasingContent

export interface SubscriptElement
	extends ElementBase<SubscriptAttributes, SubscriptChildren, never, never> {
	readonly tagName: "SUB"
}

export type SummaryChildren =
	| TextNode
	| [HeadingElement, Array<PhrasingContent>]
	| Array<PhrasingContent>

export interface SummaryElement
	extends ElementBase<{}, SummaryChildren, never, never> {
	attributes?: GlobalAttributes
	readonly tagName: "SUMMARY"
}

export type SuperscriptAttributes = {
	role?: AriaRole
}

export type SuperscriptChildren = TextNode | PhrasingContent

export interface SuperscriptElement
	extends ElementBase<
		SuperscriptAttributes,
		SuperscriptChildren,
		never,
		never
	> {
	readonly tagName: "SUP"
}

export type SvgAttributes = {
	role?: AriaRole
}

export type SvgChildren = SvgMLElement

// TODO: implement this
export interface SvgElement
	extends ElementBase<SvgAttributes, SvgChildren, never, never> {
	readonly tagName: "SAMP"
}

export type TableBodyAttributes = {
	role?: AriaRole
}

export interface TableBodyElement
	extends ElementBase<TableBodyAttributes, TableRowElement, never, never> {
	readonly tagName: "TBODY"
}

export type TableDataCellAttributes = {
	role?: AriaRole
}

export type TableDataCellChildren = TextNode | FlowContentAll

export interface TableDataCellElement
	extends ElementBase<
		TableDataCellAttributes,
		TableDataCellChildren,
		never,
		never
	> {
	readonly tagName: "TD"
}

export type TableAttributes = {
	role?: AriaRole
}

export type TableChildren =
	| TextNode
	| CaptionElement
	| ColumnGroupElement
	| TableHeadElement
	| TableBodyElement
	| TableRowElement
	| TableFooterElement

// TODO: complex children
export interface TableElement
	extends ElementBase<TableAttributes, TableChildren, never, never> {
	readonly tagName: "TABLE"
}

export type TableFooterAttributes = {
	role?: AriaRole
}

export interface TableFooterElement
	extends ElementBase<TableFooterAttributes, TableRowElement, never, never> {
	readonly tagName: "TFOOT"
}

export type TableHeadAttributes = {
	role?: AriaRole
}

export interface TableHeadElement
	extends ElementBase<TableHeadAttributes, TableRowElement, never, never> {
	readonly tagName: "THEAD"
}

export type TableHeaderCellAttributes = {
	abbr?: string
	colspan?: number | string
	headers?: string
	role?: AriaRole
	rowspan?: number | string
	scope?: "col" | "colgroup" | "row" | "rowgroup"
}

export type TableHeaderCellChildren = TextNode | FlowContentAll

// TODO: complicated children
export interface TableHeaderCellElement
	extends ElementBase<
		TableHeaderCellAttributes,
		TableHeaderCellChildren,
		never,
		never
	> {
	readonly tagName: "TH"
}

export type TableRowAttributes = {
	role?: AriaRole
}

export type TableRowChildren = TableDataCellElement | TableHeaderCellElement

export interface TableRowElement
	extends ElementBase<TableRowAttributes, TableRowChildren, never, never> {
	readonly tagName: "TR"
}

export type TemplateAttributes = {
	shadowrootmode?: "closed" | "open"
}

export type TemplateChildren = TextNode | ElementAny

export interface TemplateElement
	extends ElementBase<TemplateAttributes, TemplateChildren, never, never> {
	readonly tagName: "TEMPLATE"
}

export type TelInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	dirname?: string
	disabled?: boolean
	form?: string
	list?: string
	maxlength?: number | string
	minlength?: number | string
	name: string
	pattern?: string
	placeholder?: string
	readonly type: "tel"
	readonly?: boolean
	required?: boolean
	size?: number | string
	value?: string
}

export interface TelInputElement
	extends ElementBase<TelInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type TextareaAttributes = {
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

export interface TextareaElement
	extends ElementBase<TextareaAttributes, TextNode, never, never> {
	readonly tagName: "TEXTAREA"
}

export type TextInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	dirname?: string
	disabled?: boolean
	form?: string
	list?: string
	maxlength?: number | string
	minlength?: number | string
	name: string
	pattern?: string
	placeholder?: string
	readonly type: "text"
	readonly?: boolean
	required?: boolean
	size?: number | string
	value?: string
}

export interface TextInputElement
	extends ElementBase<TextInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type TimeAttributes = {
	datetime: string
	role?: AriaRole
}

export type TimeChildren = TextNode | PhrasingContent

export interface TimeElement
	extends ElementBase<TimeAttributes, TimeChildren, never, never> {
	readonly tagName: "TIME"
}

export type TimeInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	max?: string
	min?: string
	name: string
	readonly type: "time"
	readonly?: boolean
	required?: boolean
	step?: string
	value?: string
}

export interface TimeInputElement
	extends ElementBase<TimeInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export interface TitleElement extends ElementBase<{}, TextNode, never, never> {
	readonly tagName: "TITLE"
}

export type TrackAttributes = {
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

export interface TrackElement
	extends ElementBase<TrackAttributes, never, never, never> {
	readonly tagName: "TRACK"
}

export type UnarticulatedAnnotationAttributes = {
	role?: AriaRole
}

export type UnarticulatedAnnotationChildren = TextNode | PhrasingContent

export interface UnarticulatedAnnotationElement
	extends ElementBase<
		UnarticulatedAnnotationAttributes,
		UnarticulatedAnnotationChildren,
		never,
		never
	> {
	readonly tagName: "U"
}

export type UnorderedListAttributes = {
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

export type UnorderedListChildren =
	| ListItemElement
	| ScriptElement
	| TemplateElement

export interface UnorderedListElement
	extends ElementBase<
		UnorderedListAttributes,
		UnorderedListChildren,
		never,
		never
	> {
	readonly tagName: "UL"
}

export type UrlInputAttributes = {
	autocomplete?: Autocomplete
	autofocus?: boolean
	dirname?: string
	disabled?: boolean
	form?: string
	list?: string
	maxlength?: number | string
	minlength?: number | string
	name: string
	pattern?: string
	placeholder?: string
	readonly type: "url"
	readonly?: boolean
	required?: boolean
	size?: number | string
	value?: string
}

export interface UrlInputElement
	extends ElementBase<UrlInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type VariableAttributes = {
	role?: AriaRole
}

export type VariableChildren = TextNode | PhrasingContent

export interface VariableElement
	extends ElementBase<VariableAttributes, VariableChildren, never, never> {
	readonly tagName: "VAR"
}

export type VideoAttributes = {
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

export type VideoChildren = TrackElement | SourceElement

// TODO: complex children
export interface VideoElement
	extends ElementBase<VariableAttributes, VariableChildren, never, never> {
	readonly tagName: "VIDEO"
}

export type WeekInputAttributes = {
	autocapitalize?: Autocapitalize
	autocomplete?: Autocomplete
	autofocus?: boolean
	disabled?: boolean
	form?: string
	list?: string
	max?: string
	min?: string
	name: string
	readonly type: "week"
	readonly?: boolean
	required?: boolean
	step?: string
	value?: string
}

export interface WeekInputElement
	extends ElementBase<WeekInputAttributes, never, never, never> {
	tagName: "INPUT"
}

export type WordBreakOpportunityAttributes = {
	role?: AriaRole
}

export interface WordBreakOpportunityElement
	extends ElementBase<WordBreakOpportunityAttributes, never, never, never> {
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
