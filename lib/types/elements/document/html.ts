import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbHeadElement } from "../metadata/head"
import { SbBodyElement } from "../sections/body"

export interface SbHtmlElement {
	attributes?: Override<
		Omit<Partial<HTMLHtmlElement>, "version">,
		SbGlobalAttributeOverrides & {
			xmlns: string
		}
	>
	children?: [SbHeadElement, SbBodyElement]
	readonly tagName: "HTML"
}
