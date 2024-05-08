import type { SbButtonElement } from "../../forms/button"
import type { SbInputElement } from "../../forms/input"
import type { SbObjectElement } from "../../embedded/object"
import type { SbSelectElement } from "../../forms/select"
import type { SbTextAreaElement } from "../../forms/textarea"

export type SbSubmittableFormAssociatedContent =
	| SbButtonElement
	| SbInputElement
	| SbObjectElement
	| SbSelectElement
	| SbTextAreaElement
