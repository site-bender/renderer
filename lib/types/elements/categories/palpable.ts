import type { SbAddressElement } from "../sections/address"
import type { SbFooterElement } from "../sections/footer"
import type { SbParagraphElement } from "../grouping/p"
import type { SbPhrasingContent } from "./phrasing"
import type { SbBreakElement } from "../text-level-semantics/br"
import type { SbSmallElement } from "../text-level-semantics/small"
import type { SbSpanElement } from "../text-level-semantics/span"
import type { SbStrikethroughElement } from "../text-level-semantics/s"
import type { SbWordBreakOpportunityElement } from "../text-level-semantics/wbr"
import type { SbTextNode } from "../text-node"
import type { SbSectioningContent } from "./sectioning"
import type { SbBlockquoteElement } from "../grouping/blockquote"
import type { SbDescriptionListElement } from "../grouping/dl"
import type { SbFigureElement } from "../grouping/figure"
import type { SbMainElement } from "../grouping/main"
import type { SbMenuElement } from "../grouping/menu"
import type { SbOrderedListElement } from "../grouping/ol"
import type { SbUnorderedListElement } from "../grouping/ul"
import type { SbPreformattedTextElement } from "../grouping/pre"
import type { SbSearchElement } from "../grouping/search"
import type { SbDetailsElement } from "../interactive/details"
import type { SbButtonElement } from "../forms/button"
import type { SbFieldSetElement } from "../forms/fieldset"
import type { SbFormElement } from "../forms/form"
import type { SbSelectElement } from "../forms/select"

export type SbPalpableContent =
	| Exclude<
			SbPhrasingContent,
			| SbBreakElement
			| SbSmallElement
			| SbSpanElement
			| SbStrikethroughElement
			| SbTextNode
			| SbWordBreakOpportunityElement
			| SbSelectElement
	  >
	| SbSectioningContent
	| SbAddressElement
	| SbFooterElement
	| SbParagraphElement
	| SbBlockquoteElement
	| SbDescriptionListElement // TODO: narrow type
	| SbFigureElement
	| SbMainElement
	| SbMenuElement // TODO: narrow type
	| SbOrderedListElement // TODO: narrow type
	| SbUnorderedListElement // TODO: narrow type
	| SbPreformattedTextElement
	| SbSearchElement
	| SbDetailsElement
	| SbButtonElement
	| SbFieldSetElement
	| SbFormElement
