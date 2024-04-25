import { expect, test } from "vitest"

import hasDescendant from "."

test("[hasDescendant] (guards) returns true when object has child with the tagName", () => {
	expect(
		hasDescendant({
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

test("[hasDescendant] (guards) returns true when object has child with one of `tagNames`", () => {
	expect(
		hasDescendant({
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

test("[hasDescendant] (guards) returns false when object does not have child with one of `tagNames`", () => {
	expect(
		hasDescendant({
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
