import { SbGlobalAttributeOverrides, Override } from "../../shared"
import { SbMetadataContent } from "../categories/metadata"

export interface SbHeadElement {
	attributes?: Override<Partial<HTMLHeadElement>, SbGlobalAttributeOverrides>
	children?: Array<SbHeadContent>
	readonly tagName: "HEAD"
}

export type SbHeadContent = Exclude<SbMetadataContent, { tagName: "HEAD" }>
