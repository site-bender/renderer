import { expect, test } from "vitest"

import isFormAssociatedContent from "."

test("returns true for form-associated content elements", () => {
	expect(isFormAssociatedContent({ tagName: "BUTTON" })()).toBe(true)
	expect(isFormAssociatedContent({ tagName: "INPUT" })()).toBe(true)
	expect(isFormAssociatedContent({ tagName: "OBJECT" })()).toBe(true)
	expect(isFormAssociatedContent({ tagName: "SELECT" })()).toBe(true)
	expect(isFormAssociatedContent({ tagName: "TEXTAREA" })()).toBe(true)
})

test("returns false for non-form-associated content elements", () => {
	expect(isFormAssociatedContent({ tagName: "ABBR" })()).toBe(false)
	expect(isFormAssociatedContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isFormAssociatedContent({ tagName: "FIGURE" })()).toBe(false)
	expect(isFormAssociatedContent({ tagName: "P" })()).toBe(false)
	expect(isFormAssociatedContent({ tagName: "SECTION" })()).toBe(false)
	expect(isFormAssociatedContent({ tagName: "TEMPLATE" })()).toBe(false)
})
