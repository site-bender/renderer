import { SbConditional } from "../../types/shared"

export type MakeConditionalF = (conditional: SbConditional) => () => boolean

const makeConditional: MakeConditionalF = _conditional => () => {
	return (Math.random() * 10) % 2 === 0
}

export default makeConditional
