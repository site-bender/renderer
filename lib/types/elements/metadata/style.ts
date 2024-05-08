import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
	SbHttpEquiv,
} from "../../shared"
import type { SbTextNode } from "../text-node"

export interface SbStyleElement {
	attributes?: Override<
		Omit<Partial<HTMLStyleElement>, "type">,
		SbGlobalAttributeOverrides & {
			charset?: "utf-8"
			httpEquiv?: SbHttpEquiv
		}
	>
	children?: Array<SbTextNode>
	dataset?: SbDataset
	readonly tagName: "STYLE"
}
