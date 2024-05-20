import concat from "@sitebender/fp/lib/array/concat"
import unique from "@sitebender/fp/lib/array/unique"

import type { WithCalculate, WithCalculatorCallbacks } from "../../types/shared"

const runCalculations = () => {
	const doc = document as WithCalculatorCallbacks
	const calculations = Object.entries(doc.__sbCalculations || {})
	let elems: Array<string> = []

	doc.__sbCalculations = Object.fromEntries(
		calculations.map(([selector, ids]) => {
			const elem = doc.querySelector(selector)

			elems = concat(elems)(ids)

			return [elem?.id, ids]
		}),
	)

	unique(elems).forEach(id => {
		const elem = document.getElementById(id) as WithCalculate

		elem.__sbCalculate && elem.__sbCalculate()
	})
}

export default runCalculations
