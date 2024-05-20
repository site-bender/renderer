// @vitest-environment jsdom
import { expect, test } from "vitest"

import renderTo from "."

test("[renderTo] returns the element and children and collects the scripts and stylesheets", () => {
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
						scripts: {
							attributes: {
								src: "https://scripts/hn",
								type: "module",
							},
							tagName: "SCRIPT",
						},
						stylesheets: [
							{
								attributes: {
									href: "https://styles/hn1",
									media: "all",
									rel: "stylesheet",
								},
								tagName: "LINK",
							},
							{
								attributes: {
									href: "https://styles/hn2",
									media: "print",
									rel: "stylesheet",
								},
								tagName: "LINK",
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
						scripts: [
							{
								attributes: {
									src: "https://scripts/p",
									type: "module",
								},
								tagName: "SCRIPT",
							},
							{
								attributes: {
									src: "https://scripts/p2",
									type: "module",
								},
								tagName: "SCRIPT",
							},
						],
						stylesheets: [
							{
								attributes: {
									href: "https://styles/p",
									media: "all",
									rel: "stylesheet",
								},
								tagName: "LINK",
							},
							{
								attributes: {
									href: "https://styles/hn2",
									media: "print",
									rel: "stylesheet",
								},
								tagName: "LINK",
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

	expect(document.head.innerHTML).toStrictEqual(
		`<link href="https://styles/hn1" media="all" rel="stylesheet">` +
			`<link href="https://styles/hn2" media="print" rel="stylesheet">` +
			`<link href="https://styles/p" media="all" rel="stylesheet">` +
			`<script src="https://scripts/hn" type="module"></script>` +
			`<script src="https://scripts/p" type="module"></script>` +
			`<script src="https://scripts/p2" type="module"></script>`,
	)
	expect(document.body.innerHTML).toStrictEqual(
		`<main id="main-content" role="main" data-bob="says hi">` +
			`<article><h1>This is the title of the article</h1>` +
			`<p>Hi, y'all. Here is the text of the paragraph.</p>` +
			`<section><h2>This is the subtitle</h2>` +
			`<p>This is the subtext. Shhh.</p></section></article></main>`,
	)
	document.body.innerHTML = ""
})
