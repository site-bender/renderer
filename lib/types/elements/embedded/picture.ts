import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbImageElement } from "./img"
import { SbSourceElement } from "./source"

// TODO
export interface SbPictureElement {
	attributes?: Override<Partial<HTMLPictureElement>, SbGlobalAttributeOverrides>
	children?: SbPictureContent
	readonly tagName: "PICTURE"
}

export type SbPictureContent = [...Array<SbSourceElement>, SbImageElement]
