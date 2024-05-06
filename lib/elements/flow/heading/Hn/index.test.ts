// @vitest-environment jsdom

import { expect, test } from "vitest"

import TextNode from "../../../TextNode"
import renderTo from "../../../../renderTo"

import Hn from "."

test("[Hn] (elements::flow::heading) returns HeadingElement when supplied a string", () => {
	const content = "This is the heading!"

	renderTo(document.body)(Hn(content))({
		level: 3,
	})

	const h3 = document.body.querySelector("h3")

	expect(h3?.id).toBeDefined()
	expect(h3?.innerHTML).toEqual(content)

	document.body.innerHTML = ""
})

test("[Hn] (elements::flow::heading) returns HeadingElement with supplied children", () => {
	renderTo(document.body)(
		Hn({
			attributes: {
				id: "id",
			},
			children: [TextNode("This is the heading!")],
		}),
	)({
		level: 1,
	})

	expect(document.body.innerHTML).toEqual(
		'<h1 id="id">This is the heading!</h1>',
	)

	document.body.innerHTML = ""
})

test("[Hn] (elements::flow::heading) ignores incorrect attributes", () => {
	renderTo(document.body)(
		Hn({
			attributes: {
				id: "id",
				/* @ts-expect-error */
				grizmo: "grizmo",
			},
			children: [TextNode("This is the heading!")],
			dataset: {
				gribbet: "gribbet",
			},
		}),
	)({
		level: 1,
	})

	expect(document.body.innerHTML).toEqual(
		'<h1 id="id" data-gribbet="gribbet">This is the heading!</h1>',
	)

	document.body.innerHTML = ""
})
