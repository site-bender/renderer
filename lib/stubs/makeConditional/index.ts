import type { SbConditional, SbResult } from "../../types/shared"

import left from "@sitebender/fp/lib/either/left"
import right from "@sitebender/fp/lib/either/right"
import some from "@sitebender/fp/lib/option/some"

export type MakeConditionalF = (
	conditional: SbConditional,
) => (value?: string) => SbResult<boolean>

const makeConditional: MakeConditionalF = _conditional =>
	function (_value) {
		return Math.random() < 0.7 ? right(some(true)) : left(["oh, shit!"])
	}

export default makeConditional
