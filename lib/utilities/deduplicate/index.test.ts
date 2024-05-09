import { expect, test } from "vitest"

import type { SbElement } from "../../types/elements"

import deduplicate from "."

const objects: Array<SbElement> = [
	{
		tagName: "P",
	},
	{
		tagName: "PRE",
	},
	{
		tagName: "BR",
	},
	{
		tagName: "SECTION",
	},
]

test("[deduplicate] (utilities) removes duplicate objects from array", () => {
	expect(deduplicate([...objects, ...objects])).toMatchObject(objects)
})
