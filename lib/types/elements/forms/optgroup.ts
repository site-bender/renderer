import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbOptionElement } from "./option"

export interface SbOptionGroupElement {
	attributes?: Override<
		Partial<HTMLOptGroupElement>,
		SbGlobalAttributeOverrides
	>
	children?: Array<SbOptionElement>
	dataset?: SbDataset
	readonly tagName: "OPTGROUP"
}
