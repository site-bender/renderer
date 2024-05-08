import isBoolean from "../isBoolean"

export type IsEmptyStringOrBooleanF = (value: unknown) => boolean

const isEmptyStringOrBoolean: IsEmptyStringOrBooleanF = value =>
	value === "" || isBoolean(value as boolean)

export default isEmptyStringOrBoolean
