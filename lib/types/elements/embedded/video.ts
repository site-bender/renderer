import {
	SbGlobalAttributeOverrides,
	Override,
	SbCrossOrigin,
} from "../../shared"
import { AriaRole } from "../../unions"
import { SbFlowContent } from "../categories/flow"
import { SbSourceElement } from "./source"
import { SbTrackElement } from "./track"

// TODO
export interface SbVideoElement {
	attributes?: Override<
		Partial<HTMLVideoElement>,
		SbGlobalAttributeOverrides & {
			// space-separated string of "nodownload" | "nofullscreen" | "noremoteplayback"
			controlsList?: string
			crossOrigin?: SbCrossOrigin
			role?: Extract<AriaRole, "application">
		}
	>
	children?: Array<SbFlowContent>
	readonly tagName: "AUDIO"
}

export type SbContent =
	| Exclude<SbFlowContent, { tagName: "AUDIO" } | { tagName: "VIDEO" }>
	| SbSourceElement
	| SbTrackElement
