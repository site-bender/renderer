// @vitest-environment jsdom

import { expect, test } from "vitest"

import render from "."

test("returns the element and children", () => {
	document.body.appendChild(
		render({
			attributes: {
				id: "main-content",
				role: "main",
			},
			children: [
				{
					children: [
						{
							children: ["This is the title of the article"],
							tagName: "HN",
						},
						{
							children: ["Hi, y'all. Here is the text of the paragraph."],
							tagName: "P",
						},
						{
							children: [
								{
									children: ["This is the subtitle"],
									tagName: "HN",
								},
								{
									children: ["This is the subtext. Shhh."],
									tagName: "P",
								},
							],
							tagName: "SECTION",
						},
					],
					tagName: "ARTICLE",
				},
			],
			dataset: {
				bob: "says hi",
			},
			tagName: "MAIN",
		})(),
	)

	expect(document.body.innerHTML).toEqual(
		`<main id="main-content" role="main" data-bob="says hi"><article><h1>This is the title of the article</h1><p>Hi, y'all. Here is the text of the paragraph.</p><section><h2>This is the subtitle</h2><p>This is the subtext. Shhh.</p></section></article></main>`,
	)
})
