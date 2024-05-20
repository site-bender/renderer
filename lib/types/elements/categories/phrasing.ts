import type { Override } from "../../shared"
import type { SbDeletionElement } from "../edits/del"
import type { SbInsertionElement } from "../edits/ins"
import type { SbAreaElement } from "../embedded/area"
import type { SbAudioElement } from "../embedded/audio"
import type { SbEmbedElement } from "../embedded/embed"
import type { SbIFrameElement } from "../embedded/iframe"
import type { SbImageElement } from "../embedded/img"
import type { SbMapElement } from "../embedded/map"
import type { SbObjectElement } from "../embedded/object"
import type { SbPictureElement } from "../embedded/picture"
import type { SbVideoElement } from "../embedded/video"
import type { SbButtonElement } from "../forms/button"
import type { SbDataListElement } from "../forms/datalist"
import type { SbInputElement } from "../forms/input"
import type { SbLabelElement } from "../forms/label"
import type { SbMeterElement } from "../forms/meter"
import type { SbOutputElement } from "../forms/output"
import type { SbProgressElement } from "../forms/progress"
import type { SbSelectElement } from "../forms/select"
import type { SbTextAreaElement } from "../forms/textarea"
import type { SbLinkElement } from "../metadata/link"
import type { SbMetaElement } from "../metadata/meta"
import type { SbCanvasElement } from "../scripting/canvas"
import type { SbNoScriptElement } from "../scripting/noscript"
import type { SbScriptElement } from "../scripting/script"
import type { SbSlotElement } from "../scripting/slot"
import type { SbTemplateElement } from "../scripting/template"
import type { SbAnchorElement } from "../text-level-semantics/a"
import type { SbAbbreviationElement } from "../text-level-semantics/abbr"
import type { SbBringAttentionElement } from "../text-level-semantics/b"
import type { SbBidirectionalIsolateElement } from "../text-level-semantics/bdi"
import type { SbBidirectionalTextOverrideElement } from "../text-level-semantics/bdo"
import type { SbBreakElement } from "../text-level-semantics/br"
import type { SbCiteElement } from "../text-level-semantics/cite"
import type { SbCodeElement } from "../text-level-semantics/code"
import type { SbDataElement } from "../text-level-semantics/data"
import type { SbDefinitionElement } from "../text-level-semantics/dfn"
import type { SbEmphasisElement } from "../text-level-semantics/em"
import type { SbIdiomaticTextElement } from "../text-level-semantics/i"
import type { SbKeyboardElement } from "../text-level-semantics/kbd"
import type { SbMarkElement } from "../text-level-semantics/mark"
import type { SbQuoteElement } from "../text-level-semantics/q"
import type { SbRubyElement } from "../text-level-semantics/ruby"
import type { SbStrikethroughElement } from "../text-level-semantics/s"
import type { SbSampleElement } from "../text-level-semantics/samp"
import type { SbSmallElement } from "../text-level-semantics/small"
import type { SbSpanElement } from "../text-level-semantics/span"
import type { SbStrongEmphasisElement } from "../text-level-semantics/strong"
import type { SbSubscriptElement } from "../text-level-semantics/sub"
import type { SbSuperscriptElement } from "../text-level-semantics/sup"
import type { SbTimeElement } from "../text-level-semantics/time"
import type { SbUnarticulatedAnnotationElement } from "../text-level-semantics/u"
import type { SbVariableElement } from "../text-level-semantics/var"
import type { SbWordBreakOpportunityElement } from "../text-level-semantics/wbr"
import type { SbTextNode } from "../text-node"

// TODO: add Math, Svg

export type SbPhrasingContent =
	| SbAbbreviationElement
	| SbAnchorElement
	| SbAreaElement // TODO: narrow type
	| SbAudioElement
	| SbBidirectionalIsolateElement
	| SbBidirectionalTextOverrideElement
	| SbBreakElement
	| SbBringAttentionElement
	| SbButtonElement
	| SbCanvasElement
	| SbCiteElement
	| SbCodeElement
	| SbDataElement
	| SbDataListElement
	| SbDefinitionElement
	| SbDeletionElement // TODO: narrow type
	| SbEmbedElement
	| SbEmphasisElement
	| SbIdiomaticTextElement
	| SbIFrameElement
	| SbImageElement
	| SbInputElement
	| SbInsertionElement // TODO: narrow type
	| SbKeyboardElement
	| SbLabelElement
	| Override<SbLinkElement, { itemprop: string }>
	| SbMapElement // TODO: narrow type
	| SbMarkElement
	| Override<SbMetaElement, { itemprop: string }>
	| SbMeterElement
	| SbNoScriptElement
	| SbObjectElement
	| SbOutputElement
	| SbPictureElement
	| SbProgressElement
	| SbQuoteElement
	| SbRubyElement
	| SbSampleElement
	| SbScriptElement
	| SbSelectElement
	| SbSlotElement
	| SbSmallElement
	| SbSpanElement
	| SbStrikethroughElement
	| SbStrongEmphasisElement
	| SbSubscriptElement
	| SbSuperscriptElement
	| SbTemplateElement
	| SbTextAreaElement
	| SbTextNode
	| SbTextNode
	| SbTimeElement
	| SbUnarticulatedAnnotationElement
	| SbVariableElement
	| SbVideoElement
	| SbWordBreakOpportunityElement
