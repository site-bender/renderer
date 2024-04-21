import { expect, test } from "vitest"

import hasChild from "."

test("returns true when object has child with the tagName", () => {
	expect(
		hasChild({
			children: [
				{
					children: [{ tagName: "AREA" }, { tagName: "P" }, { tagName: "A" }],
					tagName: "DIV",
				},
				{
					tagName: "BODY",
				},
			],
			tagName: "ARTICLE",
		})(["A"]),
	).toBe(true)
})

test("returns true when object has child with one of `tagNames`", () => {
	expect(
		hasChild({
			children: [
				{
					children: [{ tagName: "AREA" }, { tagName: "P" }, { tagName: "A" }],
					tagName: "DIV",
				},
				{
					tagName: "BODY",
				},
			],
			tagName: "ARTICLE",
		})(["ABBR", "IFRAME", "A", "EMBED"]),
	).toBe(true)
})

test("returns false when object does not have child with one of `tagNames`", () => {
	expect(
		hasChild({
			children: [
				{
					children: [{ tagName: "AREA" }, { tagName: "P" }, { tagName: "A" }],
					tagName: "DIV",
				},
				{
					tagName: "BODY",
				},
			],
			tagName: "ARTICLE",
		})(["AUDIO", "TEXTAREA"]),
	).toBe(false)
})
