import { SbAddressElement } from "../sections/address"
import { SbFooterElement } from "../sections/footer"
import { SbParagraphElement } from "../grouping/p"
import { SbPhrasingContent } from "./phrasing"
import { SbBreakElement } from "../text-level-semantics/br"
import { SbSmallElement } from "../text-level-semantics/small"
import { SbSpanElement } from "../text-level-semantics/span"
import { SbStrikethroughElement } from "../text-level-semantics/s"
import { SbWordBreakOpportunityElement } from "../text-level-semantics/wbr"
import { SbTextNode } from "../text-node"
import { SbSectioningContent } from "./sectioning"
import { SbBlockquoteElement } from "../grouping/blockquote"
import { SbDescriptionListElement } from "../grouping/dl"

export type SbPalpableContent =
	| Exclude<
			SbPhrasingContent,
			| SbBreakElement
			| SbSmallElement
			| SbSpanElement
			| SbStrikethroughElement
			| SbTextNode
			| SbWordBreakOpportunityElement
	  >
	| SbSectioningContent
	| SbAddressElement
	| SbFooterElement
	| SbParagraphElement
	| SbBlockquoteElement
	| SbDescriptionListElement // TODO: narrow type
