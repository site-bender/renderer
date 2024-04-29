// @vitest-environment jsdom

import { expect, test } from "vitest"

import AccordionItem from "."
import TextNode from "../../../../elements/TextNode"
import renderTo from "../../../../renderTo"

test("[AccordionItem] (components::widgets) works with string label", () => {
	renderTo(document.body)(
		AccordionItem({
			content: [TextNode("This is the content.")],
			id: "id",
			isOpen: true,
			label: "I am the label!",
		}),
	)()

	expect(document.body.innerHTML).toEqual(
		'<details id="id" open=""><summary>I am the label!</summary>This is the content.</details>',
	)

	document.body.innerHTML = ""
})

test("[AccordionItem] (components::widgets) works with element label", () => {
	renderTo(document.body)(
		AccordionItem({
			content: [TextNode("This is the content.")],
			id: "id",
			isOpen: false,
			label: {
				children: [TextNode("I am the label!")],
				tagName: "SUMMARY",
			},
		}),
	)()

	expect(document.body.innerHTML).toEqual(
		'<details id="id"><summary>I am the label!</summary>This is the content.</details>',
	)

	document.body.innerHTML = ""
})

test("[AccordionItem] (components::widgets) accepts a string for content", () => {
	renderTo(document.body)(
		AccordionItem({
			attributes: {
				id: "id",
			},
			dataset: {
				yes: "no",
			},
			content: "This is the content.",
			isOpen: false,
			label: {
				children: [TextNode("I am the label!")],
				tagName: "SUMMARY",
			},
		}),
	)()

	expect(document.body.innerHTML).toEqual(
		'<details id="id" data-yes="no"><summary>I am the label!</summary><p>This is the content.</p></details>',
	)

	document.body.innerHTML = ""
})

test("[AccordionItem] (components::widgets) generates an ID", () => {
	renderTo(document.body)(
		AccordionItem({
			content: [TextNode("This is the content.")],
			isOpen: true,
			label: "I am the label!",
		}),
	)()

	const id = document.body.querySelector("details")?.id

	expect(id).toMatch(/^_([0-9a-z]){21,22}$/i)

	document.body.innerHTML = ""
})
