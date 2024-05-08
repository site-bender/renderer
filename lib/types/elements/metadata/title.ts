import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbTextNode } from "../text-node"

export interface SbTitleElement {
	attributes?: Override<Partial<HTMLTitleElement>, SbGlobalAttributeOverrides>
	children?: Array<SbTextNode>
	dataset?: SbDataset
	readonly tagName: "TITLE"
}
