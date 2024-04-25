import { expect, test } from "vitest"

import isHeadingContent from "."

test("[isHeadingContent] (guards) returns true for heading content elements", () => {
	expect(isHeadingContent({ tagName: "H1" })()).toBe(true)
	expect(isHeadingContent({ tagName: "H2" })()).toBe(true)
	expect(isHeadingContent({ tagName: "H3" })()).toBe(true)
	expect(isHeadingContent({ tagName: "H4" })()).toBe(true)
	expect(isHeadingContent({ tagName: "H5" })()).toBe(true)
	expect(isHeadingContent({ tagName: "H6" })()).toBe(true)
	expect(isHeadingContent({ tagName: "HGROUP" })()).toBe(true)
	expect(isHeadingContent({ tagName: "HN" })()).toBe(true)
})

test("[isHeadingContent] (guards) returns false for non-heading content elements", () => {
	expect(isHeadingContent({ tagName: "ABBR" })()).toBe(false)
	expect(isHeadingContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isHeadingContent({ tagName: "INPUT" })()).toBe(false)
	expect(isHeadingContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isHeadingContent({ tagName: "SELECT" })()).toBe(false)
	expect(isHeadingContent({ tagName: "TEMPLATE" })()).toBe(false)
})
