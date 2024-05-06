import type { GlobalAttributes } from "../../types/shared"

import isString from "../isString"
import isBoolean from "../isBoolean"
import isMemberOf from "../isMemberOf"
import isTabIndex from "../isTabIndex"
import isEmptyStringOrBoolean from "../isEmptyStringOrBoolean"
import isCharacter from "../isCharacter"

const globalAttributes: Record<string, Function> = {
	accesskey: isCharacter,
	autocapitalize: isMemberOf([
		"characters",
		"none",
		"off",
		"on",
		"sentences",
		"words",
	]),
	class: isString,
	contenteditable: isEmptyStringOrBoolean,
	dir: isMemberOf(["auto", "ltr", "rtl"]),
	draggable: isBoolean,
	enterkeyhint: isMemberOf([
		"done",
		"enter",
		"go",
		"next",
		"previous",
		"search",
		"send",
	]),
	hidden: isMemberOf(["", "hidden", "until-found"]),
	id: isString,
	inert: isBoolean,
	inputmode: isMemberOf([
		"decimal",
		"email",
		"none",
		"numeric",
		"search",
		"tel",
		"text",
		"url",
	]),
	itemid: isString,
	itemref: isString,
	itemscope: isBoolean,
	itemtype: isString,
	lang: isString,
	nonce: isString,
	popover: isMemberOf(["auto", "manual"]),
	spellcheck: isEmptyStringOrBoolean,
	style: isString,
	tabindex: isTabIndex,
	title: isString,
	translate: isMemberOf(["no", "yes"]),
}

export type pickGlobalAttributesF = (
	attributes: GlobalAttributes,
) => GlobalAttributes

const pickGlobalAttributes = (attributes = {} as GlobalAttributes) =>
	Object.fromEntries(
		Object.entries(attributes).filter(([key, value]) => {
			const f = globalAttributes[key] as (value: string | boolean) => boolean

			return f ? f(value) : false
		}),
	)

export default pickGlobalAttributes
