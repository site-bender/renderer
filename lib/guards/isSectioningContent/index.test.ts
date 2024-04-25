import { expect, test } from "vitest"

import isSectioningContent from "."

test("[isSectioningContent] (guards) returns true for sectioning content elements", () => {
	expect(isSectioningContent({ tagName: "ARTICLE" })()).toBe(true)
	expect(isSectioningContent({ tagName: "ASIDE" })()).toBe(true)
	expect(isSectioningContent({ tagName: "NAV" })()).toBe(true)
	expect(isSectioningContent({ tagName: "SECTION" })()).toBe(true)
})

test("[isSectioningContent] (guards) returns false for non-sectioning content elements", () => {
	expect(isSectioningContent({ tagName: "ABBR" })()).toBe(false)
	expect(isSectioningContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isSectioningContent({ tagName: "INPUT" })()).toBe(false)
	expect(isSectioningContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isSectioningContent({ tagName: "SELECT" })()).toBe(false)
	expect(isSectioningContent({ tagName: "TEMPLATE" })()).toBe(false)
})
