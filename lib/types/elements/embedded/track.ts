import { SbGlobalAttributeOverrides, Override } from "../../shared"

export interface SbTrackElement {
	attributes?: Override<Partial<HTMLTrackElement>, SbGlobalAttributeOverrides>
	children?: never
	readonly tagName: "TRACK"
}
