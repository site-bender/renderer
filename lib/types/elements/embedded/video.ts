import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbCrossOrigin,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"
import type { SbSourceElement } from "./source"
import type { SbTrackElement } from "./track"

// TODO
export interface SbVideoElement {
	attributes?: Override<
		Partial<HTMLVideoElement>,
		SbGlobalAttributeOverrides & {
			// space-separated string of "nodownload" | "nofullscreen" | "noremoteplayback"
			controlsList?: string
			crossOrigin?: SbCrossOrigin
			role?: Extract<SbAriaRole, "application">
		}
	>
	children?: Array<SbFlowContent>
	dataset?: SbDataset
	readonly tagName: "VIDEO"
}

export type SbContent =
	| Exclude<SbFlowContent, { tagName: "AUDIO" } | { tagName: "VIDEO" }>
	| SbSourceElement
	| SbTrackElement
