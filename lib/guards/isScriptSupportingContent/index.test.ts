import { expect, test } from "vitest"

import isScriptSupportingContent from "."

test("returns true for script-supporting content elements", () => {
	expect(isScriptSupportingContent({ tagName: "SCRIPT" })()).toBe(true)
	expect(isScriptSupportingContent({ tagName: "TEMPLATE" })()).toBe(true)
})

test("returns false for non-script-supporting content elements", () => {
	expect(isScriptSupportingContent({ tagName: "ABBR" })()).toBe(false)
	expect(isScriptSupportingContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isScriptSupportingContent({ tagName: "INPUT" })()).toBe(false)
	expect(isScriptSupportingContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isScriptSupportingContent({ tagName: "SELECT" })()).toBe(false)
})
