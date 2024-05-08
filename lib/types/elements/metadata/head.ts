import type {
	Override,
	SbDataset,
	SbGlobalAttributeOverrides,
} from "../../shared"
import type { SbMetadataContent } from "../categories/metadata"

export interface SbHeadElement {
	attributes?: Override<Partial<HTMLHeadElement>, SbGlobalAttributeOverrides>
	children?: Array<SbHeadContent>
	dataset?: SbDataset
	readonly tagName: "HEAD"
}

export type SbHeadContent = Exclude<SbMetadataContent, { tagName: "HEAD" }>
