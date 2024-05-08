import isString from "../isString"

export type IsTabIndexF = (value: unknown) => boolean

const isTabIndex: IsTabIndexF = value =>
	isString(value) && !Number.isNaN(Number(value))

export default isTabIndex
