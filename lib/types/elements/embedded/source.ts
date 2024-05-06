import { SbGlobalAttributeOverrides, Override } from "../../shared"

export interface SbSourceElement {
	attributes?: Override<Partial<HTMLSourceElement>, SbGlobalAttributeOverrides>
	children?: never
	readonly tagName: "SOURCE"
}
