import { SbBlockquoteElement } from "../grouping/blockquote"
import { SbDescriptionListElement } from "../grouping/dl"
import { SbParagraphElement } from "../grouping/p"
import { SbAddressElement } from "../sections/address"
import { SbArticleElement } from "../sections/article"
import { SbAsideElement } from "../sections/aside"
import { SbFooterElement } from "../sections/footer"
import { SbNavigationElement } from "../sections/nav"
import { SbSectionElement } from "../sections/section"
import { SbHeadingContent } from "./heading"
import { SbPhrasingContent } from "./phrasing"

export type SbFlowContent =
	| SbPhrasingContent
	| SbAddressElement
	| SbArticleElement
	| SbAsideElement
	| SbFooterElement
	| SbHeadingContent
	| SbParagraphElement
	| SbNavigationElement
	| SbSectionElement
	| SbBlockquoteElement
	| SbDescriptionListElement
