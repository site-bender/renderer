import { SbElement } from "../../types/elements"

export type StringifyF = (obj: SbElement | Array<SbElement>) => string

const stringify: StringifyF = obj => {
	if (Array.isArray(obj)) {
		return obj.map(item => stringify(item)).join(";")
	}

	const entries = Object.entries(obj)
		.sort((a, b) => a[0]?.localeCompare(b[0]))
		.reduce((out, [key, value]) => {
			const val =
				value != null && typeof value === "object" ? stringify(value) : value

			out.push(`${key}:${val}`)

			return out
		}, [] as Array<string>)

	return entries.join(";")
}

export default stringify
