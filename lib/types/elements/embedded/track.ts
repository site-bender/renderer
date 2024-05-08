import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

export interface SbTrackElement {
	attributes?: Override<Partial<HTMLTrackElement>, SbGlobalAttributeOverrides>
	children?: never
	dataset?: SbDataset
	readonly tagName: "TRACK"
}
