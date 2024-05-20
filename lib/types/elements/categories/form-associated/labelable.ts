import type { SbButtonElement } from "../../forms/button"
import type { SbInputElement } from "../../forms/input"
import type { SbHiddenInputElement } from "../../forms/input/hidden"
import type { SbMeterElement } from "../../forms/meter"
import type { SbOutputElement } from "../../forms/output"
import type { SbProgressElement } from "../../forms/progress"
import type { SbSelectElement } from "../../forms/select"
import type { SbTextAreaElement } from "../../forms/textarea"

export type SbLabelableFormAssociatedContent =
	| SbButtonElement
	| Exclude<SbInputElement, SbHiddenInputElement>
	| SbMeterElement
	| SbOutputElement
	| SbProgressElement
	| SbSelectElement
	| SbTextAreaElement
