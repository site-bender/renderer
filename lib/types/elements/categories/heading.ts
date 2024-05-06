import { SbHeadingGroupElement } from "../sections/hgroup"
import {
	SbHeading1Element,
	SbHeading2Element,
	SbHeading3Element,
	SbHeading4Element,
	SbHeading5Element,
	SbHeading6Element,
	SbHeadingElement,
} from "../sections/hn"

export type SbHeadingContent =
	| SbHeading1Element
	| SbHeading2Element
	| SbHeading3Element
	| SbHeading4Element
	| SbHeading5Element
	| SbHeading6Element
	| SbHeadingElement
	| SbHeadingGroupElement
