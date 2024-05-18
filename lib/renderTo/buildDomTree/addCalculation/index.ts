import type { SbNumericOperation } from "@sitebender/operations/lib/types"
import type {
	CalculateF,
	WithCalculate,
	WithCalculatorCallbacks,
} from "../../../types/shared"

import collectDependencies from "../../../utilities/collectDependencies"
import makeCalculator from "@sitebender/operations/lib/makeCalculator"
import { isLeft } from "@sitebender/fp/lib/either"
import { getOrElse } from "@sitebender/fp/lib/option"

export type AddCalculationF = (
	element: HTMLElement,
) => (calculation: SbNumericOperation) => void

const addCalculation: AddCalculationF = element => calculation => {
	const selectors = collectDependencies(calculation as SbNumericOperation)
	const doCalculation = makeCalculator(calculation)
	const calculate: CalculateF = function (this: typeof element) {
		const value = doCalculation()

		if (isLeft(value)) {
			this.innerHTML = value.left.join(",")
		} else {
			const out = getOrElse<number>(() => NaN)(value.right)

			this.innerHTML = Number.isNaN(out) ? "n/a" : `${out}`
		}
	}

	;(element as WithCalculate).__sbCalculate = calculate

	const doc = document as WithCalculatorCallbacks

	selectors.forEach(selector => {
		doc.__sbCalculations ??= {}
		doc.__sbCalculations[selector] ??= []
		doc.__sbCalculations[selector].push(element.id)
	})
}

export default addCalculation
