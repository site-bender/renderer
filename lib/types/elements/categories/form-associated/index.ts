import type { SbLabelableFormAssociatedContent } from "./labelable"
import type { SbLabelElement } from "../../forms/label"
import type { SbListedFormAssociatedContent } from "./listed"
import type { SbResettableFormAssociatedContent } from "./resettable"
import type { SbSubmittableFormAssociatedContent } from "./submittable"

export type SbFormAssociatedContent =
	| SbLabelableFormAssociatedContent
	| SbLabelElement
	| SbListedFormAssociatedContent
	| SbResettableFormAssociatedContent
	| SbSubmittableFormAssociatedContent
