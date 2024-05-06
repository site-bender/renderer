import { SbAreaElement } from "../embedded/area"
import { SbAudioElement } from "../embedded/audio"
import { SbEmbedElement } from "../embedded/embed"
import { SbIFrameElement } from "../embedded/iframe"
import { SbImageElement } from "../embedded/img"
import { SbMapElement } from "../embedded/map"
import { SbObjectElement } from "../embedded/object"
import { SbPictureElement } from "../embedded/picture"
import { SbVideoElement } from "../embedded/video"
import { SbNoScriptElement } from "../scripting/noscript"
import { SbScriptElement } from "../scripting/script"
import { SbTemplateElement } from "../scripting/template"
import { SbAnchorElement } from "../text-level-semantics/a"
import { SbAbbreviationElement } from "../text-level-semantics/abbr"
import { SbBringAttentionElement } from "../text-level-semantics/b"
import { SbBidirectionalIsolateElement } from "../text-level-semantics/bdi"
import { SbBidirectionalTextOverrideElement } from "../text-level-semantics/bdo"
import { SbBreakElement } from "../text-level-semantics/br"
import { SbCiteElement } from "../text-level-semantics/cite"
import { SbCodeElement } from "../text-level-semantics/code"
import { SbDataElement } from "../text-level-semantics/data"
import { SbDefinitionElement } from "../text-level-semantics/dfn"
import { SbEmphasisElement } from "../text-level-semantics/em"
import { SbIdiomaticTextElement } from "../text-level-semantics/i"
import { SbKeyboardElement } from "../text-level-semantics/kbd"
import { SbMarkElement } from "../text-level-semantics/mark"
import { SbQuoteElement } from "../text-level-semantics/q"
import { SbRubyElement } from "../text-level-semantics/ruby"
import { SbStrikethroughElement } from "../text-level-semantics/s"
import { SbSampleElement } from "../text-level-semantics/samp"
import { SbSmallElement } from "../text-level-semantics/small"
import { SbSpanElement } from "../text-level-semantics/span"
import { SbStrongEmphasisElement } from "../text-level-semantics/strong"
import { SbSubscriptElement } from "../text-level-semantics/sub"
import { SbSuperscriptElement } from "../text-level-semantics/sup"
import { SbTimeElement } from "../text-level-semantics/time"
import { SbUnarticulatedAnnotationElement } from "../text-level-semantics/u"
import { SbVariableElement } from "../text-level-semantics/var"
import { SbWordBreakOpportunityElement } from "../text-level-semantics/wbr"
import { SbTextNode } from "../text-node"

export type SbPhrasingContent =
	| SbAbbreviationElement
	| SbAnchorElement
	| SbAreaElement
	| SbAudioElement
	| SbBidirectionalIsolateElement
	| SbBidirectionalTextOverrideElement
	| SbBreakElement
	| SbBringAttentionElement
	| SbCiteElement
	| SbCodeElement
	| SbDataElement
	| SbDefinitionElement
	| SbEmphasisElement
	| SbIdiomaticTextElement
	| SbKeyboardElement
	| SbMarkElement
	| SbNoScriptElement
	| SbQuoteElement
	| SbRubyElement
	| SbSampleElement
	| SbSmallElement
	| SbSpanElement
	| SbStrikethroughElement
	| SbStrongEmphasisElement
	| SbSubscriptElement
	| SbSuperscriptElement
	| SbTextNode
	| SbTimeElement
	| SbUnarticulatedAnnotationElement
	| SbVariableElement
	| SbVideoElement
	| SbWordBreakOpportunityElement
	| SbPictureElement
	| SbImageElement
	| SbEmbedElement
	| SbIFrameElement
	| SbMapElement
	| SbObjectElement
	| SbScriptElement
	| SbTemplateElement
