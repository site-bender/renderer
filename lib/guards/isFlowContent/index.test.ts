import { expect, test } from "vitest"

import isFlowContent from "."

test("returns true for flow content elements", () => {
	expect(isFlowContent({ tagName: "ABBR" })()).toBe(true)
	expect(isFlowContent({ tagName: "CANVAS" })()).toBe(true)
	expect(isFlowContent({ tagName: "EMBED" })()).toBe(true)
	expect(isFlowContent({ tagName: "FOOTER" })()).toBe(true)
	expect(isFlowContent({ tagName: "IMG" })()).toBe(true)
	expect(isFlowContent({ tagName: "LABEL" })()).toBe(true)
	expect(isFlowContent({ tagName: "OBJECT" })()).toBe(true)
	expect(isFlowContent({ tagName: "PICTURE" })()).toBe(true)
	expect(isFlowContent({ tagName: "SELECT" })()).toBe(true)
	expect(isFlowContent({ tagName: "VIDEO" })()).toBe(true)
})

test("returns false for non-flow content elements", () => {
	expect(isFlowContent({ tagName: "BASE" })()).toBe(false)
	expect(isFlowContent({ tagName: "LINK" })()).toBe(false)
	expect(isFlowContent({ tagName: "META" })()).toBe(false)
	expect(isFlowContent({ tagName: "TITLE" })()).toBe(false)
})

test("returns true for AREA when descendant of MAP", () => {
	expect(
		isFlowContent({ tagName: "AREA" })({
			ancestors: ["ARTICLE", "SECTION", "MAP"],
		}),
	).toBe(true)
})

test("returns false for MAP when not a descendant of AREA", () => {
	expect(
		isFlowContent({ tagName: "AREA" })({
			ancestors: ["ARTICLE", "SECTION"],
		}),
	).toBe(false)
})

test("returns true for LINK and META when itemprop attribute present", () => {
	expect(
		isFlowContent({ attributes: { itemprop: "prop" }, tagName: "LINK" })(),
	).toBe(true)
	expect(
		isFlowContent({ attributes: { itemprop: "prop" }, tagName: "META" })(),
	).toBe(true)
})

test("returns true for LINK and META when itemprop attribute absent", () => {
	expect(isFlowContent({ tagName: "LINK" })()).toBe(false)
	expect(isFlowContent({ tagName: "META" })()).toBe(false)
})
