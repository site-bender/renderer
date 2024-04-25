import { expect, test } from "vitest"

import isFormAssociatedListedContent from "."

test("[isFormAssociatedListedContent] (guards) returns true for form-associated listed content elements", () => {
	expect(isFormAssociatedListedContent({ tagName: "BUTTON" })()).toBe(true)
	expect(isFormAssociatedListedContent({ tagName: "FIELDSET" })()).toBe(true)
	expect(isFormAssociatedListedContent({ tagName: "INPUT" })()).toBe(true)
	expect(isFormAssociatedListedContent({ tagName: "OBJECT" })()).toBe(true)
	expect(isFormAssociatedListedContent({ tagName: "OUTPUT" })()).toBe(true)
	expect(isFormAssociatedListedContent({ tagName: "SELECT" })()).toBe(true)
	expect(isFormAssociatedListedContent({ tagName: "TEXTAREA" })()).toBe(true)
})

test("[isFormAssociatedListedContent] (guards) returns false for non-form-associated listed content elements", () => {
	expect(isFormAssociatedListedContent({ tagName: "ABBR" })()).toBe(false)
	expect(isFormAssociatedListedContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isFormAssociatedListedContent({ tagName: "FIGURE" })()).toBe(false)
	expect(isFormAssociatedListedContent({ tagName: "P" })()).toBe(false)
	expect(isFormAssociatedListedContent({ tagName: "SECTION" })()).toBe(false)
	expect(isFormAssociatedListedContent({ tagName: "TEMPLATE" })()).toBe(false)
})
