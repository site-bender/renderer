import { expect, test } from "vitest"

import isEmbeddedContent from "."

test("returns true for embedded content elements", () => {
	expect(isEmbeddedContent({ tagName: "H1" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "H2" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "H3" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "H4" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "H5" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "H6" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "HGROUP" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "HN" })()).toBe(true)
})

test("returns false for non-embedded content elements", () => {
	expect(isEmbeddedContent({ tagName: "ABBR" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "INPUT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "SELECT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "TEMPLATE" })()).toBe(false)
})
