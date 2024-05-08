import type { SbBlockquoteElement } from "../grouping/blockquote"
import type { SbDetailsElement } from "../interactive/details"
import type { SbDialogElement } from "../interactive/dialog"
import type { SbFieldSetElement } from "../forms/fieldset"
import type { SbTableDataCellElement } from "../tabular/td"

export type SbSectioningRootContent =
	| SbBlockquoteElement
	| SbDetailsElement
	| SbDialogElement
	| SbFieldSetElement
	| SbTableDataCellElement
