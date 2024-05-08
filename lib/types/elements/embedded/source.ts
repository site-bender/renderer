import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbSourceElement {
	attributes?: Override<Partial<HTMLSourceElement>, SbGlobalAttributeOverrides>
	children?: never
	dataset?: SbDataset
	readonly tagName: "SOURCE"
}
