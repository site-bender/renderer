import { expect, test } from "vitest"

import accordion from "."
import accordionItem from "./accordionItem"

test("returns an accordion JSON configuration", () => {
	console.log(
		"accordion",
		JSON.stringify(
			accordion({
				children: [
					accordionItem({
						children: ["I am child 1.", "I am child 2."],
						title: ["I am accordion item 1"],
					}),
					accordionItem({
						children: ["I am child 1.", "I am child 2."],
						title: ["I am accordion item 1"],
					}),
					accordionItem({
						children: ["I am child 1.", "I am child 2."],
						title: ["I am accordion item 1"],
					}),
				],
				id: "bob",
				title: ["I am the title!"],
			}),
			null,
			2,
		),
	)

	expect(true).toBeTruthy()
})
