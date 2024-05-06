import { SbGlobalAttributeOverrides, Override, SbHttpEquiv } from "../../shared"

// TODO: Make flow and phrasing if itemprop present
export interface SbMetaElement {
	attributes?: Override<
		Omit<Partial<HTMLMetaElement>, "scheme">,
		SbGlobalAttributeOverrides & {
			charset?: "utf-8"
			httpEquiv?: SbHttpEquiv
		}
	>
	readonly tagName: "META"
}
