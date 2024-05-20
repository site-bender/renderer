import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"

import type { SbImageElement } from "./img"
import type { SbSourceElement } from "./source"

// TODO
export interface SbPictureElement {
	attributes?: Override<Partial<HTMLPictureElement>, SbGlobalAttributeOverrides>
	children?: SbPictureContent
	dataset?: SbDataset
	readonly tagName: "PICTURE"
}

export type SbPictureContent = [...Array<SbSourceElement>, SbImageElement]
