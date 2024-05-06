import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { AriaRole } from "../../unions"
import { SbPhrasingContent } from "../categories/phrasing"
import { SbRubyFallbackParenthesisElement } from "./rp"
import { SbRubyTextElement } from "./rt"

export interface SbRubyElement {
	attributes?: Override<
		Partial<HTMLElement>,
		SbGlobalAttributeOverrides & {
			role?: AriaRole
		}
	>
	children?: Array<
		SbPhrasingContent | SbRubyFallbackParenthesisElement | SbRubyTextElement
	>
	readonly tagName: "RUBY"
}
