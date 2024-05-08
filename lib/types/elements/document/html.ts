import type { SbBodyElement } from "../sections/body"
import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbHeadElement } from "../metadata/head"

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
