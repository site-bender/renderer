import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbHeadElement } from "../metadata/head"
import type { SbBodyElement } from "../sections/body"

export interface SbHtmlElement {
	attributes?: Override<
		Omit<Partial<HTMLHtmlElement>, "version">,
		SbGlobalAttributeOverrides & {
			xmlns: string
		}
	>
	children?: [SbHeadElement, SbBodyElement]
	dataset?: SbDataset
	readonly tagName: "HTML"
}
