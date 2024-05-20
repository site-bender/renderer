import isLeft from "@sitebender/fp/lib/either/isLeft"

import moveElementToDisplayCache from "./moveElementToDisplayCache"
import replaceElementFromDisplayCache from "./replaceElementFromDisplayCache"

export type MakeDisplayToggleF = (
	id?: string,
) => (testCondition: Function) => () => void

const makeDisplayToggle: MakeDisplayToggleF = id => testCondition => () => {
	if (id) {
		const test = testCondition()

		isLeft(test)
			? moveElementToDisplayCache(id)
			: replaceElementFromDisplayCache(id)
	}
}

export default makeDisplayToggle
