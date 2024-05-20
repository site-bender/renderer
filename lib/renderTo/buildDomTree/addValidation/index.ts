import type { Either } from "@sitebender/fp/lib/either"
import type { Option } from "@sitebender/fp/lib/option"

import makeValidator from "../../../stubs/makeValidator"
import type { SbValidation } from "../../../types/shared"

import type { SbCastableValue } from "./../../../stubs/types"

export type SbValidateF = (
	value: SbCastableValue,
) => Either<Array<string>, Option<SbCastableValue>>

export type SbWithValidate = HTMLElement & {
	__sbValidate: SbValidateF
}

export type AddValidationF = (
	elem: HTMLElement,
) => (validation?: SbValidation) => void

const addValidation: AddValidationF = elem => validation => {
	if (validation) {
		const validate = makeValidator(validation) as SbValidateF

		;(elem as SbWithValidate).__sbValidate = validate
	}
}

export default addValidation
