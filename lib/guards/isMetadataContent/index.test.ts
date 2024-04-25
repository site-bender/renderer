import { expect, test } from "vitest"

import isMetadataContent from "."

test("[isMetadataContent] (guards) returns true for metadata content elements", () => {
	expect(isMetadataContent({ tagName: "BASE" })()).toBe(true)
	expect(isMetadataContent({ tagName: "LINK" })()).toBe(true)
	expect(isMetadataContent({ tagName: "META" })()).toBe(true)
	expect(isMetadataContent({ tagName: "NOSCRIPT" })()).toBe(true)
	expect(isMetadataContent({ tagName: "SCRIPT" })()).toBe(true)
	expect(isMetadataContent({ tagName: "STYLE" })()).toBe(true)
	expect(isMetadataContent({ tagName: "TITLE" })()).toBe(true)
})

test("[isMetadataContent] (guards) returns false for non-metadata content elements", () => {
	expect(isMetadataContent({ tagName: "ABBR" })()).toBe(false)
	expect(isMetadataContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isMetadataContent({ tagName: "INPUT" })()).toBe(false)
	expect(isMetadataContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isMetadataContent({ tagName: "SELECT" })()).toBe(false)
	expect(isMetadataContent({ tagName: "TEMPLATE" })()).toBe(false)
})
