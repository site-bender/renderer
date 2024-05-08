import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbPhrasingContent } from "../categories/phrasing"

export interface SbProgressElement {
	attributes?: Override<
		Partial<HTMLProgressElement>,
		SbGlobalAttributeOverrides
	>
	children?: Array<SbProgressContent>
	dataset?: SbDataset
	readonly tagName: "PROGRESS"
}

export type SbProgressContent = Exclude<
	SbPhrasingContent,
	{ tagName: "PROGRESS" }
>
