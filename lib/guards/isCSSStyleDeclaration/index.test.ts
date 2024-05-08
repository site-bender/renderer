import { expect, test } from "vitest"

import isCSSStyleDeclaration from "."

test("[isCSSStyleDeclaration] (guards) returns true when passed a record", () => {
	expect(isCSSStyleDeclaration({})).toBe(true)
	expect(isCSSStyleDeclaration({ backgroundColor: "#000" })).toBe(true)
})
