import { SbConditional } from "../../types/shared"

export type MakeConditionalF = (
	conditional: SbConditional,
) => (value: string) => boolean

const makeConditional: MakeConditionalF = _conditional => _value => {
	return Math.random() < 0.7
}

export default makeConditional
