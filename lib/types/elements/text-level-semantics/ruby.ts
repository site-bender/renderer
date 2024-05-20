import type {
	Override,
	SbAriaRole,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

import type { SbRubyFallbackParenthesisElement } from "./rp"
import type { SbRubyTextElement } from "./rt"

export interface SbRubyElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: SbAriaRole
		}
	>
	children?: Array<
		SbPhrasingContent | SbRubyFallbackParenthesisElement | SbRubyTextElement
	>
	dataset?: SbDataset
	readonly tagName: "RUBY"
}
