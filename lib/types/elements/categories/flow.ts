import type { SbAreaElement } from "../embedded/area"
import type { SbFieldSetElement } from "../forms/fieldset"
import type { SbFormElement } from "../forms/form"
import type { SbInputElement } from "../forms/input"
import type { SbBlockquoteElement } from "../grouping/blockquote"
import type { SbDivisionElement } from "../grouping/div"
import type { SbDescriptionListElement } from "../grouping/dl"
import type { SbFigureElement } from "../grouping/figure"
import type { SbHorizontalRuleElement } from "../grouping/hr"
import type { SbMainElement } from "../grouping/main"
import type { SbMenuElement } from "../grouping/menu"
import type { SbOrderedListElement } from "../grouping/ol"
import type { SbParagraphElement } from "../grouping/p"
import type { SbPreformattedTextElement } from "../grouping/pre"
import type { SbSearchElement } from "../grouping/search"
import type { SbUnorderedListElement } from "../grouping/ul"
import type { SbDetailsElement } from "../interactive/details"
import type { SbDialogElement } from "../interactive/dialog"
import type { SbAddressElement } from "../sections/address"
import type { SbArticleElement } from "../sections/article"
import type { SbAsideElement } from "../sections/aside"
import type { SbFooterElement } from "../sections/footer"
import type { SbHeaderElement } from "../sections/header"
import type { SbNavigationElement } from "../sections/nav"
import type { SbSectionElement } from "../sections/section"
import type { SbTableElement } from "../tabular/table"
import type { SbHeadingContent } from "./heading"
import type { SbPhrasingContent } from "./phrasing"

export type SbFlowContent =
	| SbPhrasingContent
	| SbAddressElement
	| SbAreaElement // TODO: narrow type (descendant of map)
	| SbArticleElement
	| SbAsideElement
	| SbBlockquoteElement
	| SbDescriptionListElement
	| SbDetailsElement
	| SbDialogElement
	| SbDivisionElement
	| SbFieldSetElement
	| SbFigureElement
	| SbFooterElement
	| SbFormElement
	| SbHeaderElement
	| SbHeadingContent
	| SbHorizontalRuleElement
	| SbInputElement
	| SbMainElement
	| SbMenuElement
	| SbNavigationElement
	| SbOrderedListElement
	| SbParagraphElement
	| SbPreformattedTextElement
	| SbSearchElement
	| SbSectionElement
	| SbTableElement
	| SbUnorderedListElement
