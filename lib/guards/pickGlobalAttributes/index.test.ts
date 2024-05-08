import { expect, test } from "vitest"

import pickGlobalAttributes from "."
import type {
	SbAutocapitalize,
	SbContentEditable,
	SbDirection,
	SbEnterKeyHint,
	SbHidden,
	SbInputMode,
	SbPopover,
	SbSpellcheck,
	SbTranslate,
} from "../../types/shared"

const globalAttributes = {
	accesskey: "B",
	autocapitalize: "sentences" as SbAutocapitalize,
	class: "no-class",
	contenteditable: true as SbContentEditable,
	dir: "ltr" as SbDirection,
	draggable: false,
	enterkeyhint: "done" as SbEnterKeyHint,
	hidden: "" as SbHidden,
	id: "id",
	inert: true,
	inputmode: "numeric" as SbInputMode,
	itemid: "itemid",
	itemref: "itemref",
	itemscope: true,
	itemtype: "itemtype",
	lang: "en",
	nonce: "123",
	popover: "auto" as SbPopover,
	spellcheck: "" as SbSpellcheck,
	style: { color: "red" } as CSSStyleDeclaration,
	tabindex: "-1",
	title: "title",
	translate: "no" as SbTranslate,
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
