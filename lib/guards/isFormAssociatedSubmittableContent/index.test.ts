import { expect, test } from "vitest"

import isFormAssociatedSubmittableContent from "."

test("[isFormAssociatedSubmittableContent] (guards) returns true for form-associated submittable content elements", () => {
	expect(isFormAssociatedSubmittableContent({ tagName: "BUTTON" })()).toBe(true)
	expect(isFormAssociatedSubmittableContent({ tagName: "INPUT" })()).toBe(true)
	expect(isFormAssociatedSubmittableContent({ tagName: "OBJECT" })()).toBe(true)
	expect(isFormAssociatedSubmittableContent({ tagName: "SELECT" })()).toBe(true)
	expect(isFormAssociatedSubmittableContent({ tagName: "TEXTAREA" })()).toBe(
		true,
	)
})

test("[isFormAssociatedSubmittableContent] (guards) returns false for non-form-associated submittable content elements", () => {
	expect(isFormAssociatedSubmittableContent({ tagName: "ABBR" })()).toBe(false)
	expect(isFormAssociatedSubmittableContent({ tagName: "DATALIST" })()).toBe(
		false,
	)
	expect(isFormAssociatedSubmittableContent({ tagName: "FIGURE" })()).toBe(
		false,
	)
	expect(isFormAssociatedSubmittableContent({ tagName: "P" })()).toBe(false)
	expect(isFormAssociatedSubmittableContent({ tagName: "SECTION" })()).toBe(
		false,
	)
	expect(isFormAssociatedSubmittableContent({ tagName: "TEMPLATE" })()).toBe(
		false,
	)
})
