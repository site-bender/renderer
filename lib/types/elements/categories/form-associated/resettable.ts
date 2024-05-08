import type { SbInputElement } from "../../forms/input"
import type { SbOutputElement } from "../../forms/output"
import type { SbSelectElement } from "../../forms/select"
import type { SbTextAreaElement } from "../../forms/textarea"

export type SbResettableFormAssociatedContent =
	| SbInputElement
	| SbOutputElement
	| SbSelectElement
	| SbTextAreaElement
