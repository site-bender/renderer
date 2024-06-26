import { SECTIONING_ELEMENTS } from "../../../constants"
import type { SbElement } from "../../../types/elements"

export type SetLevelF = (
	tagName: SbElement["tagName"],
) => (level: number) => number

const setLevel: SetLevelF = tagName => level =>
	SECTIONING_ELEMENTS.includes(tagName) || tagName === "FRAGMENT"
		? level + 1
		: level

export default setLevel
