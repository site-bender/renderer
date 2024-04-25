import { expect, test } from "vitest"

import isFormAssociatedLabelableContent from "."

test("[isFormAssociatedLabelableContent] (guards) returns true for form-associated labelable content elements", () => {
	expect(isFormAssociatedLabelableContent({ tagName: "BUTTON" })()).toBe(true)
	expect(isFormAssociatedLabelableContent({ tagName: "INPUT" })()).toBe(true)
	expect(isFormAssociatedLabelableContent({ tagName: "METER" })()).toBe(true)
	expect(isFormAssociatedLabelableContent({ tagName: "OUTPUT" })()).toBe(true)
	expect(isFormAssociatedLabelableContent({ tagName: "PROGRESS" })()).toBe(true)
	expect(isFormAssociatedLabelableContent({ tagName: "SELECT" })()).toBe(true)
	expect(isFormAssociatedLabelableContent({ tagName: "TEXTAREA" })()).toBe(true)
})

test("[isFormAssociatedLabelableContent] (guards) returns false for non-form-associated labelable content elements", () => {
	expect(isFormAssociatedLabelableContent({ tagName: "ABBR" })()).toBe(false)
	expect(isFormAssociatedLabelableContent({ tagName: "DATALIST" })()).toBe(
		false,
	)
	expect(isFormAssociatedLabelableContent({ tagName: "FIGURE" })()).toBe(false)
	expect(isFormAssociatedLabelableContent({ tagName: "P" })()).toBe(false)
	expect(isFormAssociatedLabelableContent({ tagName: "SECTION" })()).toBe(false)
	expect(isFormAssociatedLabelableContent({ tagName: "TEMPLATE" })()).toBe(
		false,
	)
})
