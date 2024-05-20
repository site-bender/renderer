import type {
	Override,
	SbAriaRole,
	SbCrossOrigin,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbFlowContent } from "../categories/flow"

import type { SbSourceElement } from "./source"
import type { SbTrackElement } from "./track"

// TODO
export interface SbAudioElement {
	attributes?: Override<
		Partial<HTMLAudioElement>,
		SbGlobalAttributeOverrides & {
			// space-separated string of "nodownload" | "nofullscreen" | "noremoteplayback"
			controlsList?: string
			crossOrigin?: SbCrossOrigin
			role?: Extract<SbAriaRole, "application">
		}
	>
	children?: Array<SbAudioContent>
	dataset?: SbDataset
	readonly tagName: "AUDIO"
}

export type SbAudioContent =
	| Exclude<SbFlowContent, { tagName: "AUDIO" } | { tagName: "VIDEO" }>
	| SbSourceElement
	| SbTrackElement
