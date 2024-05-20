import { expect, test } from "vitest"

import deduplicate from "."
import type { SbElement } from "../../types/elements"

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
