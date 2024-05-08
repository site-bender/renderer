import type { SbArticleElement } from "../sections/article"
import type { SbAsideElement } from "../sections/aside"
import type { SbNavigationElement } from "../sections/nav"
import type { SbSectionElement } from "../sections/section"

export type SbSectioningContent =
	| SbArticleElement
	| SbAsideElement
	| SbNavigationElement
	| SbSectionElement
