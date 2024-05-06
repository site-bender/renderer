import { SbGlobalAttributeOverrides, Override, SbHttpEquiv } from "../../shared"
import { SbTextNode } from "../text-node"

export interface SbStyleElement {
	attributes?: Override<
		Omit<Partial<HTMLStyleElement>, "type">,
		SbGlobalAttributeOverrides & {
			charset?: "utf-8"
			httpEquiv?: SbHttpEquiv
		}
	>
	children?: Array<SbTextNode>
	readonly tagName: "STYLE"
}
