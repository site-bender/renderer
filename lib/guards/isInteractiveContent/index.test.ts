import { expect, test } from "vitest"

import isInteractiveContent from "."

test("[isInteractiveContent] (guards) returns true for interactive content elements", () => {
	expect(isInteractiveContent({ tagName: "BUTTON" })()).toBe(true)
	expect(isInteractiveContent({ tagName: "DETAILS" })()).toBe(true)
	expect(isInteractiveContent({ tagName: "EMBED" })()).toBe(true)
	expect(isInteractiveContent({ tagName: "IFRAME" })()).toBe(true)
	expect(isInteractiveContent({ tagName: "LABEL" })()).toBe(true)
	expect(isInteractiveContent({ tagName: "SELECT" })()).toBe(true)
	expect(isInteractiveContent({ tagName: "TEXTAREA" })()).toBe(true)
})

test("[isInteractiveContent] (guards) returns false for non-interactive content elements", () => {
	expect(isInteractiveContent({ tagName: "ABBR" })()).toBe(false)
	expect(isInteractiveContent({ tagName: "DATALIST" })()).toBe(false)
	expect(isInteractiveContent({ tagName: "INPUT" })()).toBe(false)
	expect(isInteractiveContent({ tagName: "OUTPUT" })()).toBe(false)
	expect(isInteractiveContent({ tagName: "SCRIPT" })()).toBe(false)
	expect(isInteractiveContent({ tagName: "TEMPLATE" })()).toBe(false)
})

test("[isInteractiveContent] (guards) returns true for A elements when href attribute present", () => {
	expect(
		isInteractiveContent({ attributes: { href: "href" }, tagName: "A" })(),
	).toBe(true)
})

test("[isInteractiveContent] (guards) returns false for A elements when href attribute absent", () => {
	expect(isInteractiveContent({ tagName: "A" })()).toBe(false)
})

test("[isInteractiveContent] (guards) returns true for AUDIO and VIDEO elements when controls attribute present", () => {
	expect(
		isInteractiveContent({
			attributes: { controls: "controls" },
			tagName: "AUDIO",
		})(),
	).toBe(true)
	expect(
		isInteractiveContent({
			attributes: { controls: "controls" },
			tagName: "VIDEO",
		})(),
	).toBe(true)
})

test("[isInteractiveContent] (guards) returns false for A elements when controls attribute absent", () => {
	expect(isInteractiveContent({ tagName: "AUDIO" })()).toBe(false)
	expect(isInteractiveContent({ tagName: "VIDEO" })()).toBe(false)
})

test("[isInteractiveContent] (guards) returns true for IMG and OBJECT elements when usemap attribute present", () => {
	expect(
		isInteractiveContent({
			attributes: { usemap: "usemap" },
			tagName: "IMG",
		})(),
	).toBe(true)
	expect(
		isInteractiveContent({
			attributes: { usemap: "usemap" },
			tagName: "OBJECT",
		})(),
	).toBe(true)
})

test("[isInteractiveContent] (guards) returns false for A elements when usemap attribute absent", () => {
	expect(isInteractiveContent({ tagName: "IMG" })()).toBe(false)
	expect(isInteractiveContent({ tagName: "OBJECT" })()).toBe(false)
})

test("[isInteractiveContent] (guards) returns true for INPUT elements when type attribute present but not hidden", () => {
	expect(
		isInteractiveContent({ attributes: { type: "type" }, tagName: "INPUT" })(),
	).toBe(true)
})

test("[isInteractiveContent] (guards) returns false for INPUT elements when type attribute present but hidden", () => {
	expect(
		isInteractiveContent({
			attributes: { hidden: "hidden", type: "type" },
			tagName: "INPUT",
		})(),
	).toBe(false)
})

test("[isInteractiveContent] (guards) returns false for INPUT elements when type attribute absent", () => {
	expect(
		isInteractiveContent({
			attributes: { hidden: "hidden" },
			tagName: "INPUT",
		})(),
	).toBe(false)
})
