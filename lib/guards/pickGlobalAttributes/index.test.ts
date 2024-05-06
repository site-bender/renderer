import { expect, test } from "vitest"

import pickGlobalAttributes from "."
import {
	Autocapitalize,
	ContentEditable,
	Dir,
	EnterKeyHint,
	Hidden,
	InputMode,
	Popover,
	Spellcheck,
	Translate,
} from "../../types/unions"

const globalAttributes = {
	accesskey: "B",
	autocapitalize: "sentences" as Autocapitalize,
	class: "no-class",
	contenteditable: true as ContentEditable,
	dir: "ltr" as Dir,
	draggable: false,
	enterkeyhint: "done" as EnterKeyHint,
	hidden: "" as Hidden,
	id: "id",
	inert: true,
	inputmode: "numeric" as InputMode,
	itemid: "itemid",
	itemref: "itemref",
	itemscope: true,
	itemtype: "itemtype",
	lang: "en",
	nonce: "123",
	popover: "auto" as Popover,
	spellcheck: "" as Spellcheck,
	style: "style",
	tabindex: "-1",
	title: "title",
	translate: "no" as Translate,
}

test("[pickGlobalAttributes] (guards) returns all type-checked global attributes", () => {
	expect(pickGlobalAttributes(globalAttributes)).toMatchObject(globalAttributes)
})

test("[pickGlobalAttributes] (guards) omits non-global attributes", () => {
	expect(
		pickGlobalAttributes({
			...globalAttributes,
			spellcheck: true,
			/* @ts-expect-error */
			test: true,
			other: "blue",
		}),
	).toMatchObject({
		...globalAttributes,
		spellcheck: true,
	})
})
