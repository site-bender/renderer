import { SbElement } from "."

export type SbFragment = {
	children?: Array<SbElement>
	readonly tagName: "FRAGMENT"
}
