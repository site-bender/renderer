import { expect, test } from "vitest"

import isEmbeddedContent from "."

test("returns true for embedded content elements", () => {
	expect(isEmbeddedContent({ tagName: "ARTICLE" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "ASIDE" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "NAV" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "SECTION" })()).toBe(true)
})

test("returns false for non-embedded content elements", () => {
	expect(isEmbeddedContent({ tagName: "ABBR" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "INPUT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "SELECT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "TEMPLATE" })()).toBe(false)
})
