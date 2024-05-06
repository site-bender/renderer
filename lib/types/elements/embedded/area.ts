import {
	SbGlobalAttributeOverrides,
	Override,
	SbReferrerPolicy,
} from "../../shared"

export interface SbAreaElement {
	attributes?: Override<
		Omit<Partial<HTMLAreaElement>, "noHref">,
		SbGlobalAttributeOverrides & {
			referrerPolicy?: SbReferrerPolicy
			rel?: SbAreaRel
			target?: SbAreaTarget
		} & (
				| {
						coords: string
						shape: "circle" | "poly" | "rect"
				  }
				| {
						coords: never
						shape: "default"
				  }
			)
	>
	children?: never
	readonly tagName: "AREA"
}

export type SbAreaTarget = "_blank" | "_parent" | "_self" | "_top"

export type SbAreaRel =
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
