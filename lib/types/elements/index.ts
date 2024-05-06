import { SbEditsContent } from "./categories/edits"
import { SbFlowContent } from "./categories/flow"
import { SbInteractiveContent } from "./categories/interactive"
import { SbMetadataContent } from "./categories/metadata"
import { SbSectioningContent } from "./categories/sectioning"
import { SbHtmlElement } from "./document/html"
import { SbSourceElement } from "./embedded/source"
import { SbTrackElement } from "./embedded/track"
import { SbDescriptionDetailsElement } from "./grouping/dd"
import { SbDescriptionTermElement } from "./grouping/dt"
import { SbFigcaptionElement } from "./grouping/figcaption"
import { SbHeadElement } from "./metadata/head"
import { SbBodyElement } from "./sections/body"
import { SbRubyFallbackParenthesisElement } from "./text-level-semantics/rp"
import { SbRubyTextElement } from "./text-level-semantics/rt"

export type SbElement =
	| SbFlowContent
	| SbInteractiveContent
	| SbSectioningContent
	| SbRubyFallbackParenthesisElement
	| SbRubyTextElement
	| SbBodyElement
	| SbHeadElement
	| SbMetadataContent
	| SbHtmlElement
	| SbEditsContent
	| SbSourceElement
	| SbTrackElement
	| SbDescriptionDetailsElement
	| SbDescriptionTermElement
	| SbFigcaptionElement
