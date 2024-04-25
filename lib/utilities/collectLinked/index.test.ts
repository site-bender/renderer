// @vitest-environment jsdom

import { expect, test } from "vitest"

import collectLinked from "."

const config = {
	children: [
		{
			scripts: ["one", "two"],
			stylesheets: "alpha",
			tagName: "DIV",
		},
		{
			scripts: ["three"],
			stylesheets: ["bravo", "charlie", "delta"],
			tagName: "DIV",
		},
		{
			children: [
				{
					scripts: "seven",
					stylesheets: ["echo", "foxtrot"],
					tagName: "SPAN",
				},
				{
					scripts: ["eight", "nine"],
					tagName: "SPAN",
				},
			],
			scripts: ["four", "five", "six"],
			stylesheets: ["bravo", "golf"],
			tagName: "DIV",
		},
	],
	scripts: ["one", "three", "five"],
	stylesheets: ["charlie", "hotel"],
	tagName: "DIV",
}

test("[collectLinked] (utilities) handles scripts", () => {
	const collected = collectLinked("scripts")(config)

	expect(collected).toEqual([
		"one",
		"three",
		"five",
		"two",
		"four",
		"six",
		"seven",
		"eight",
		"nine",
	])
})

test("[collectLinked] (utilities) handles stylesheets", () => {
	const collected = collectLinked("stylesheets")(config)

	expect(collected).toEqual([
		"charlie",
		"hotel",
		"alpha",
		"bravo",
		"delta",
		"golf",
		"echo",
		"foxtrot",
	])
})
