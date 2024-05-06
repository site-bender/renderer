import {
	SbGlobalAttributeOverrides,
	Override,
	SbReferrerPolicy,
} from "../../shared"
import { SbElement } from "../"
import { SbMediaType } from "../../media"
import { AriaRole } from "../../unions"

// Remove deprecated attributes
// Make all attributes optional
// Force tagName to "A"
// Overrides attributes with more specific types
export interface SbAnchorElement {
	attributes?: Override<
		Omit<
			Partial<HTMLAnchorElement>,
			"charset" | "coords" | "name" | "relList" | "rev" // deprecated
		>,
		SbGlobalAttributeOverrides & {
			// narrowed types
			referrerpolicy?: SbReferrerPolicy
			rel?: SbAnchorRel
			role?: SbAnchorRole
			target?: SbAnchorTarget
			type?: SbMediaType
		}
	>
	// TODO: transparent with no interactive and no tabindex
	children?: Array<SbElement>
	readonly tagName: "A"
}

export type SbAnchorRel =
	| "alternate"
	| "author"
	| "bookmark"
	| "external"
	| "help"
	| "license"
	| "me"
	| "next"
	| "nofollow"
	| "noopener"
	| "noreferrer"
	| "opener"
	| "prev"
	| "privacy-policy"
	| "search"
	| "tag"
	| "terms-of-service"

export type SbAnchorRole = Extract<
	AriaRole,
	| "button"
	| "checkbox"
	| "menuitem"
	| "menuitemcheckbox"
	| "option"
	| "radio"
	| "switch"
	| "tab"
	| "treeitem"
>

export type SbAnchorTarget =
	| "_blank"
	| "_parent"
	| "_self"
	| "_top"
	| "_unfencedTop"
