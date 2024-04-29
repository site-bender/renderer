// @vitest-environment jsdom

import { expect, test } from "vitest"

import renderTo from "."

test("[renderTo] returns the element and children", () => {
	renderTo(document.body)({
		attributes: {
			id: "main-content",
			role: "main",
		},
		children: [
			{
				children: [
					{
						children: [
							{
								content: "This is the title of the article",
								tagName: "TEXTNODE",
							},
						],
						tagName: "HN",
					},
					{
						children: [
							{
								content: "Hi, y'all. Here is the text of the paragraph.",
								tagName: "TEXTNODE",
							},
						],
						tagName: "P",
					},
					{
						children: [
							{
								children: [
									{
										content: "This is the subtitle",
										tagName: "TEXTNODE",
									},
								],
								tagName: "HN",
							},
							{
								children: [
									{
										content: "This is the subtext. Shhh.",
										tagName: "TEXTNODE",
									},
								],
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
	})()

	expect(document.body.innerHTML).toStrictEqual(
		`<main id="main-content" role="main" data-bob="says hi"><article><h1>This is the title of the article</h1><p>Hi, y'all. Here is the text of the paragraph.</p><section><h2>This is the subtitle</h2><p>This is the subtext. Shhh.</p></section></article></main>`,
	)
	document.body.innerHTML = ""
})

test("[renderTo] handles fragments", () => {
	renderTo(document.body)({
		children: [
			{
				children: [
					{
						content: "This is the title of the article",
						tagName: "TEXTNODE",
					},
				],
				tagName: "HN",
			},
			{
				children: [
					{
						content: "Hi, y'all. Here is the text of the paragraph.",
						tagName: "TEXTNODE",
					},
				],
				tagName: "P",
			},
			{
				children: [
					{
						children: [
							{
								content: "This is the subtitle",
								tagName: "TEXTNODE",
							},
						],
						tagName: "HN",
					},
					{
						children: [
							{
								content: "This is the subtext. Shhh.",
								tagName: "TEXTNODE",
							},
						],
						tagName: "P",
					},
				],
				tagName: "SECTION",
			},
		],
		tagName: "FRAGMENT",
	})()

	expect(document.body.innerHTML).toStrictEqual(
		`<h1>This is the title of the article</h1><p>Hi, y'all. Here is the text of the paragraph.</p><section><h2>This is the subtitle</h2><p>This is the subtext. Shhh.</p></section>`,
	)
	document.body.innerHTML = ""
})

test("[renderTo] allows deep nesting and increments headings", () => {
	renderTo(document.body)({
		children: [
			{
				children: [
					{
						children: [
							{
								content: "h1",
								tagName: "TEXTNODE",
							},
						],
						tagName: "HN",
					},
					{
						children: [
							{
								children: [
									{
										content: "h2",
										tagName: "TEXTNODE",
									},
								],
								tagName: "HN",
							},
							{
								children: [
									{
										children: [
											{
												content: "h3",
												tagName: "TEXTNODE",
											},
										],
										tagName: "HN",
									},
									{
										children: [
											{
												children: [
													{
														content: "h4",
														tagName: "TEXTNODE",
													},
												],
												tagName: "HN",
											},
											{
												children: [
													{
														children: [
															{
																content: "h5",
																tagName: "TEXTNODE",
															},
														],
														tagName: "HN",
													},
													{
														children: [
															{
																children: [
																	{
																		content: "h6",
																		tagName: "TEXTNODE",
																	},
																],
																tagName: "HN",
															},
															{
																children: [
																	{
																		content: "The sub-sub-sub-sub-sub text.",
																		tagName: "TEXTNODE",
																	},
																],
																tagName: "P",
															},
															{
																attributes: {
																	name: "search",
																	required: true,
																	type: "search",
																},
																tagName: "INPUT",
																validation: {
																	operand: 7,
																	operation: "lessThan",
																	returns: "boolean",
																	test: 9,
																},
															},
															{
																attributes: {
																	name: "email",
																	required: false,
																	type: "email",
																},
																tagName: "INPUT",
															},
														],
														tagName: "SECTION",
													},
												],
												tagName: "SECTION",
											},
											{
												tagName: "HR",
											},
										],
										tagName: "SECTION",
									},
								],
								tagName: "SECTION",
							},
						],
						tagName: "SECTION",
					},
				],
				tagName: "ARTICLE",
			},
		],
		tagName: "MAIN",
	})()

	expect(document.body.innerHTML).toStrictEqual(
		`<main><article><h1>h1</h1><section><h2>h2</h2><section><h3>h3</h3><section><h4>h4</h4><section><h5>h5</h5><section><h6>h6</h6><p>The sub-sub-sub-sub-sub text.</p><input name="search" required="" type="search"><input name="email" type="email"></section></section><hr></section></section></section></article></main>`,
	)
})
