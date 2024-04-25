import { expect, test } from "vitest"

import isEmbeddedContent from "."

test("[isEmbeddedContent] (guards) returns true for embedded content elements", () => {
	expect(isEmbeddedContent({ tagName: "AUDIO" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "CANVAS" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "EMBED" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "IFRAME" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "IMG" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "MATH" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "OBJECT" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "PICTURE" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "SVG" })()).toBe(true)
	expect(isEmbeddedContent({ tagName: "VIDEO" })()).toBe(true)
})

test("[isEmbeddedContent] (guards) returns false for non-embedded content elements", () => {
	expect(isEmbeddedContent({ tagName: "ABBR" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "INPUT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "SELECT" })()).toBe(false)
	expect(isEmbeddedContent({ tagName: "TEMPLATE" })()).toBe(false)
})
