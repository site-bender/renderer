import type { SbGlobalAttributes } from "../../types/shared"

import isString from "../isString"
import isBoolean from "../isBoolean"
import isMemberOf from "../isMemberOf"
import isTabIndex from "../isTabIndex"
import isEmptyStringOrBoolean from "../isEmptyStringOrBoolean"
import isCharacter from "../isCharacter"
import isCSSStyleDeclaration from "../isCSSStyleDeclaration"

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
	style: isCSSStyleDeclaration,
	tabindex: isTabIndex,
	title: isString,
	translate: isMemberOf(["no", "yes"]),
}

export type pickGlobalAttributesF = (
	attributes: SbGlobalAttributes,
) => SbGlobalAttributes

const pickGlobalAttributes = (attributes = {} as SbGlobalAttributes) =>
	Object.fromEntries(
		Object.entries(attributes).filter(([key, value]) => {
			const f = globalAttributes[key] as (
				value: string | boolean | CSSStyleDeclaration,
			) => boolean

			return f ? f(value) : false
		}),
	)

export default pickGlobalAttributes
