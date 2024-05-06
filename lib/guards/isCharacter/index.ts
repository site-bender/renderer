import isString from "../isString"

export type IsCharacterF = (value: unknown) => boolean

const isCharacter: IsCharacterF = value => isString(value) && value.length === 1

export default isCharacter
