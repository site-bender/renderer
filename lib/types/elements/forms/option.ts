import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbTextNode } from "../text-node"

export interface SbOptionElement {
	attributes?: Override<Partial<HTMLOptionElement>, SbGlobalAttributeOverrides>
	children?: Array<SbTextNode>
	dataset?: SbDataset
	readonly tagName: "OPTION"
}
