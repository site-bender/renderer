// @vitest-environment jsdom

import { expect, test } from "vitest"

import TextNode from "../../../TextNode"
import renderTo from "../../../../renderTo"

import Hn from "."

test("[Hn] (elements::flow::heading) returns HeadingElement object", () => {
	renderTo(document.body)(Hn({ content: "This is the heading!" }))({ level: 3 })

	expect(document.body.innerHTML).toEqual("<h3>This is the heading!</h3>")

	document.body.innerHTML = ""
})

test("[Hn] (elements::flow::heading) returns HeadingElement object", () => {
	renderTo(document.body)(Hn({ content: [TextNode("This is the heading!")] }))({
		level: 1,
	})

	expect(document.body.innerHTML).toEqual("<h1>This is the heading!</h1>")

	document.body.innerHTML = ""
})
