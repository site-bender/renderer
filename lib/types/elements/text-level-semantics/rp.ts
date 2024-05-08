import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbTextNode } from "../text-node"

export interface SbRubyFallbackParenthesisElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<SbTextNode>
	dataset?: SbDataset
	readonly tagName: "RP"
}
