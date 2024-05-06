import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbTextNode } from "../text-node"

export interface SbTitleElement {
	attributes?: Override<Partial<HTMLTitleElement>, SbGlobalAttributeOverrides>
	children?: Array<SbTextNode>
	readonly tagName: "TITLE"
}
