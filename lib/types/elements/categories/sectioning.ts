import { SbArticleElement } from "../sections/article"
import { SbAsideElement } from "../sections/aside"
import { SbNavigationElement } from "../sections/nav"
import { SbSectionElement } from "../sections/section"

export type SbSectioningContent =
	| SbArticleElement
	| SbAsideElement
	| SbNavigationElement
	| SbSectionElement
