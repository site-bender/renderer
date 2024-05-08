import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
	SbHttpEquiv,
} from "../../shared"

// TODO: Make flow and phrasing if itemprop present
export interface SbMetaElement {
	attributes?: Override<
		Omit<Partial<HTMLMetaElement>, "scheme">,
		SbGlobalAttributeOverrides & {
			charset?: "utf-8"
			httpEquiv?: SbHttpEquiv
		}
	>
	dataset?: SbDataset
	readonly tagName: "META"
}
