import moveElementToDisplayCache from "./moveElementToDisplayCache"
import replaceElementFromDisplayCache from "./replaceElementFromDisplayCache"

export type MakeDisplayToggleF = (
	id?: string,
) => (testCondition: Function) => () => void

const makeDisplayToggle: MakeDisplayToggleF = id => testCondition => () => {
	if (id) {
		const test = testCondition()

		console.log("test", test)

		test ? replaceElementFromDisplayCache(id) : moveElementToDisplayCache(id)
	}
}

export default makeDisplayToggle
