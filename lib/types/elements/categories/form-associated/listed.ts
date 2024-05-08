import type { SbButtonElement } from "../../forms/button"
import type { SbFieldSetElement } from "../../forms/fieldset"
import type { SbInputElement } from "../../forms/input"
import type { SbObjectElement } from "../../embedded/object"
import type { SbOutputElement } from "../../forms/output"
import type { SbSelectElement } from "../../forms/select"
import type { SbTextAreaElement } from "../../forms/textarea"

export type SbListedFormAssociatedContent =
	| SbButtonElement
	| SbFieldSetElement
	| SbInputElement
	| SbObjectElement
	| SbOutputElement
	| SbSelectElement
	| SbTextAreaElement
