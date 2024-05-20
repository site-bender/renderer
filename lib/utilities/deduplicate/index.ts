import { SbElement } from "../../types/elements"
import stringify from "../stringify"

const deduplicate = <T extends SbElement>(arr: Array<T>): Array<T> => {
	const filtered = arr.reduce((acc, obj) => {
		const key = stringify(obj as T)

		return {
			...acc,
			[key]: obj,
		}
	}, {} as T)

	return Object.values(filtered) as Array<T>
}

export default deduplicate
