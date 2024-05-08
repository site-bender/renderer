import type { SbBodyElement } from "./sections/body"
import type { SbDescriptionDetailsElement } from "./grouping/dd"
import type { SbDescriptionTermElement } from "./grouping/dt"
import type { SbEditsContent } from "./categories/edits"
import type { SbFigcaptionElement } from "./grouping/figcaption"
import type { SbFlowContent } from "./categories/flow"
import type { SbFragment } from "./fragment"
import type { SbHeadElement } from "./metadata/head"
import type { SbHtmlElement } from "./document/html"
import type { SbInteractiveContent } from "./categories/interactive"
import type { SbLegendElement } from "./forms/legend"
import type { SbListItemElement } from "./grouping/li"
import type { SbMetadataContent } from "./categories/metadata"
import type { SbOptionElement } from "./forms/option"
import type { SbOptionGroupElement } from "./forms/optgroup"
import type { SbRubyFallbackParenthesisElement } from "./text-level-semantics/rp"
import type { SbRubyTextElement } from "./text-level-semantics/rt"
import type { SbSectioningContent } from "./categories/sectioning"
import type { SbSourceElement } from "./embedded/source"
import type { SbSummaryElement } from "./interactive/summary"
import type { SbTableBodyElement } from "./tabular/tbody"
import type { SbTableCaptionElement } from "./tabular/caption"
import type { SbTableColumnElement } from "./tabular/col"
import type { SbTableColumnGroupElement } from "./tabular/colgroup"
import type { SbTableDataCellElement } from "./tabular/td"
import type { SbTableFooterElement } from "./tabular/tfoot"
import type { SbTableHeaderCellElement } from "./tabular/th"
import type { SbTableHeaderElement } from "./tabular/thead"
import type { SbTableRowElement } from "./tabular/tr"
import type { SbTrackElement } from "./embedded/track"

export type SbElement =
	| SbBodyElement
	| SbDescriptionDetailsElement
	| SbDescriptionTermElement
	| SbEditsContent
	| SbFigcaptionElement
	| SbFlowContent
	| SbFragment
	| SbHeadElement
	| SbHtmlElement
	| SbInteractiveContent
	| SbLegendElement
	| SbListItemElement
	| SbMetadataContent
	| SbOptionElement
	| SbOptionGroupElement
	| SbRubyFallbackParenthesisElement
	| SbRubyTextElement
	| SbSectioningContent
	| SbSourceElement
	| SbSummaryElement
	| SbTableBodyElement
	| SbTableCaptionElement
	| SbTableColumnElement
	| SbTableColumnGroupElement
	| SbTableDataCellElement
	| SbTableFooterElement
	| SbTableHeaderCellElement
	| SbTableHeaderElement
	| SbTableRowElement
	| SbTrackElement
