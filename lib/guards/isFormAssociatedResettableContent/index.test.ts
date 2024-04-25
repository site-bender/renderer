import { expect, test } from "vitest"

import isFormAssociatedResettableContent from "."

test("[isFormAssociatedResettableContent] (guards) returns true for form-associated resettable content elements", () => {
	expect(isFormAssociatedResettableContent({ tagName: "INPUT" })()).toBe(true)
	expect(isFormAssociatedResettableContent({ tagName: "OUTPUT" })()).toBe(true)
	expect(isFormAssociatedResettableContent({ tagName: "SELECT" })()).toBe(true)
	expect(isFormAssociatedResettableContent({ tagName: "TEXTAREA" })()).toBe(
		true,
	)
})

test("[isFormAssociatedResettableContent] (guards) returns false for non-form-associated resettable content elements", () => {
	expect(isFormAssociatedResettableContent({ tagName: "ABBR" })()).toBe(false)
	expect(isFormAssociatedResettableContent({ tagName: "DATALIST" })()).toBe(
		false,
	)
	expect(isFormAssociatedResettableContent({ tagName: "FIGURE" })()).toBe(false)
	expect(isFormAssociatedResettableContent({ tagName: "P" })()).toBe(false)
	expect(isFormAssociatedResettableContent({ tagName: "SECTION" })()).toBe(
		false,
	)
	expect(isFormAssociatedResettableContent({ tagName: "TEMPLATE" })()).toBe(
		false,
	)
})
