import type { Either } from "@sitebender/fp/lib/either"
import type { SbValidation } from "../../types/shared"
import type { Option } from "@sitebender/fp/lib/option"

import left from "@sitebender/fp/lib/either/left"
import right from "@sitebender/fp/lib/either/right"
import some from "@sitebender/fp/lib/option/some"

export type MakeValidatorF = (
	validation: SbValidation,
) => (value: unknown) => Either<Array<string>, Option<unknown>>

const makeValidator: MakeValidatorF = _validation =>
	function (this: HTMLInputElement) {
		if (Math.ceil(Math.random() * 1000) % 2 === 0) {
			return right(some(this.value))
		}

		return left(["Oh, noes!"])
	}

export default makeValidator
