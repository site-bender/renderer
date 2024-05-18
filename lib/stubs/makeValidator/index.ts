import type { SbResult, SbValidation } from "../../types/shared"

import left from "@sitebender/fp/lib/either/left"
import right from "@sitebender/fp/lib/either/right"
import some from "@sitebender/fp/lib/option/some"

export type MakeValidatorF<T> = (
	validation: SbValidation,
) => (value?: string) => SbResult<T>

const makeValidator: MakeValidatorF<string> = _validation =>
	function (this: HTMLInputElement) {
		if (Math.ceil(Math.random() * 1000) % 2 === 0) {
			return right(some(this.value))
		}

		return left(["Oh, noes!"])
	}

export default makeValidator
