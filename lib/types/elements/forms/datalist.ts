import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbOptionElement } from "./option"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbDataListElement {
	attributes?: Override<
		Partial<HTMLDataListElement>,
		SbGlobalAttributeOverrides
	>
	children?: Array<SbPhrasingContent> | Array<SbOptionElement>
	dataset?: SbDataset
	readonly tagName: "DATALIST"
}
